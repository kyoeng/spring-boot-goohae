package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class UserController {
//    private final UserService userService;
//    private final PasswordEncoder passwordEncoder;
//
//    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
//        this.userService = userService;
//        this.passwordEncoder = passwordEncoder;
//    }
    @GetMapping(value = "main")
    public String main() { return "mainPage";}

    @GetMapping(value = "user/join")
    public ModelAndView join(UserVO vo, ModelAndView mv) {
        mv.setViewName("user/singlePage/signUp");
        mv.addObject("signUp",vo);
        return mv;}
    @GetMapping (value = "user/login")
    public String login() {
        log.info("로그인");
        return "user/singlePage/login";}
    @GetMapping (value = "user/findid")
    public String findId () {return "user/singlePage/findId";}
    @GetMapping (value = "user/findpw")
    public String findPw (UserVO vo, ModelAndView mv) {
        mv.setViewName("user/singlePage/findPw");
        mv.addObject("findPw",vo);
        return "user/singlePage/findPw";}

    // 마이페이지는 로그인 해야함.
    @GetMapping (value = "user/mypage")
    public String myPage(){ return "user/myPage/myPage";}
    @GetMapping (value = "user/mypost")
    public String myPost(){ return "user/myPage/mypost";}
    @GetMapping (value = "user/mycart")
    public String myCart(){ return "user/myPage/shoppingCart";}


    @PostMapping(value = "user/join")
    public String join(@RequestBody UserVO vo) {
//        if(userService.insert(vo)>0) return "user/join";
        return "user/login";
    }
}
