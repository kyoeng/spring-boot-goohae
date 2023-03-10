package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.service.user.CartService;
import com.kdt.goohae.service.user.QnaBoardService;
import com.kdt.goohae.service.user.ReviewService;
import com.kdt.goohae.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Slf4j
@Controller
public class UserController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final ReviewService reviewService;
    private final CartService cartService;
    private final QnaBoardService qnaBoardService;

    public UserController(UserService userService, PasswordEncoder passwordEncoder, ReviewService reviewService, CartService cartService, QnaBoardService qnaBoardService) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.reviewService = reviewService;
        this.cartService = cartService;
        this.qnaBoardService = qnaBoardService;
    }

    @GetMapping(value = "user/join")
    public String joinF(UserVO vo) { return "user/singlePage/signUp";  }

    /**
     * 해당 id가 있는지 확인
     * 있으면 세션에 "ID중복" 메세지 전달
     * 없으면 insert 메소드 실행 후 success 인지 fail인지 전달.
     * 실패시 : join화면으로
     * param : id
     * param : password
     * param : name
     * param : postNumber
     * param : address
     * param : phoneNumber
     * */
    @PostMapping(value = "user/join")
    public ModelAndView join ( UserVO vo, ModelAndView mv) {
        mv.setViewName("user/singlePage/join");
        if(userService.selectOne(vo) == null){
            vo.setPassword(passwordEncoder.encode(vo.getPassword()));
            if ( userService.insert(vo)>0 ) {
                mv.addObject("message", "success");
                mv.setViewName("user/singlePage/login");
            } else {
                mv.addObject("message","fail");
            }
        } else {
            mv.addObject("message","ID중복");
        }
        return mv;
    }

    /**
     * 로그인 처리
     * 1. 로그인 요청한 아이디로 DB에서 해당 계정 골라오기
     *      1-1. 해당 계정 없으면 --> id오류
     * 2. 패스워드 비교
     *      2-1. 같으면 로그인 ( session에 id와 name 전달 )
     *      2-2. 다르면 Pw오류
     * Param : id
     * param : password
     * */
    @PostMapping (value = "user/login")
    public ModelAndView login(UserVO vo, ModelAndView mv, HttpSession httpSession) {
        UserVO dbVO = userService.selectOne(vo);
        if(dbVO != null){
            if(passwordEncoder.matches(vo.getPassword(), dbVO.getPassword())){
                httpSession.setAttribute("loginId",vo.getId());
                httpSession.setAttribute("name",dbVO.getName());
                mv.setViewName("index");
            }else{
                mv.addObject("message", "PW오류");
                mv.setViewName("/user/singlePage/login");
            }
        }else {
            mv.addObject("message", "ID오류");
            mv.setViewName("/user/singlePage/login");
        }
        return mv;
    }


    /**
     * 로그인 폼
     * */
    @GetMapping (value = "user/login")
    public String loginF() { return "user/singlePage/login"; }

    /**
     * 로그아웃 처리
     * */
    @GetMapping (value = "logined-user/logout")
    public String logout(HttpSession httpSession){
        httpSession.setAttribute("loginId",null);
        return "/mainPage";
    }

    /**
     * 아이디 찾기 폼
     * */
    @GetMapping (value = "user/findid")
    public String findId () {return "user/singlePage/findId";}

    /**
     * 비밀번호 찾기 폼
     * */
    @GetMapping (value = "user/findpw")
    public String findPw () { return "user/singlePage/findPw"; }

    /**
     * 마이페이지
     * 로그인 안하면, message에 "로그인 해주세요." 전달.
     * */
    @GetMapping (value = "logined-user/mypage")
    public String myPage(HttpSession httpSession){
        if ( httpSession.getAttribute("loginId") == null) {
            httpSession.setAttribute("message", "로그인 해주세요.");
            return "/";
        }
        return "user/myPage/myPage";
    }

    /**
     * myPage에 myPost로 이동
     * */
    @GetMapping (value = "logined-user/mypost")
    public String myReview(){return "user/myPage/myPost";}

    /**
     * model에 유저의 qnaList, reviewList를 담아서 전달.
     * */
    @PostMapping (value = "logined-user/mypost")
    public Model myReview(Model model,HttpSession httpSession) {
        model.addAttribute("qnaList",qnaBoardService.userList((String)httpSession.getAttribute("loginId")));
        model.addAttribute("reviewList",reviewService.getUserReview((String)httpSession.getAttribute("loginId")));
        return model;
    }
}
