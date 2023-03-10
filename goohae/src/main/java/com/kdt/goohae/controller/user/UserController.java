package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping(value = "deletetest")
    public void listtest(UserVO vo){
        vo.setId("dbdb1114");
        log.info("{}",userService.delete(vo)); }

    @GetMapping(value = "user/join")
    public ModelAndView joinF(UserVO vo, ModelAndView mv) {
        mv.setViewName("user/singlePage/signUp");
        mv.addObject("UserVO",vo);
        return mv;
    }

    @PostMapping(value = "user/join")
    public ModelAndView join (@RequestBody UserVO vo, ModelAndView mv) {
        vo.setPassword(passwordEncoder.encode(vo.getPassword()));
        if ( userService.insert(vo)>0 ) {
            mv.setViewName("user/singlePage/login");
        } else {
            mv.setViewName("user/singlePage/login");
        }
        return mv;
    }

    @GetMapping (value = "user/login")
    public String loginF() { return "user/singlePage/login"; }


    /**
     * 파라미터 : 아이디, 패스워드
     * 로직 :
     * 1. 로그인 요청한 아이디로 DB에서 해당 계정 골라오기
     *      1-1. 해당 계정 없으면 --> id오류
     * 2. 패스워드 비교
     *      2-1. 같으면 로그인 ( session에 id와 name 전달 )
     *      2-2. 다르면 Pw오류
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
     * 로그아웃 처리
     * */
    @GetMapping (value = "user/logout")
    public String logout(HttpSession httpSession){
        httpSession.setAttribute("loginId",null);
        return "/mainPage";
    }

    /**
     * 아이디 찾기, 비밀번호 찾기
     * */
    @GetMapping (value = "user/findid")
    public String findId () {return "user/singlePage/findId";}

    @GetMapping (value = "user/findpw")
    public String findPw (UserVO vo, ModelAndView mv) {
        mv.setViewName("user/singlePage/findPw");
        mv.addObject("findPw",vo);
        return "user/singlePage/findPw";
    }


    @GetMapping (value = "user/mypage")
    public String myPage(HttpSession httpSession){
        return "user/myPage/myPage";
    }
    @GetMapping (value = "user/mypost")
    public String myPost(ModelAndView mv){

        mv.setViewName("user/myPage/myPost");
//        mv.addObject("post",userService.getMyPost());
        return "user/myPage/myPost";
    }
    @GetMapping (value = "user/mycart")
    public String myCart(){ return "user/myPage/shoppingCart";}

}
