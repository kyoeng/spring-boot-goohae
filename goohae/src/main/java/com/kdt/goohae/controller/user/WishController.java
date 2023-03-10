package com.kdt.goohae.controller.user;

import com.kdt.goohae.service.user.WishService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class WishController {

    WishService wishService;

    public WishController(WishService wishService) {this.wishService = wishService;}

    /**
     * myWishList로 이동
     * */
    @GetMapping(value = "logined-user/mywish")
    public String myWish() {return "/user/myPage/wishList";}

    /**
     * wishList에 wishList담아서 전달.
     * result : ArrayList<productDto>
     * */
    @PostMapping(value = "logined-user/mywish")
    public Model myWish(Model model, HttpSession httpSession) {return model.addAttribute("wishList",wishService.selectList((String) httpSession.getAttribute("loginId")));}

}
