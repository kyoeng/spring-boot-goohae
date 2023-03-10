package com.kdt.goohae.controller.user;

import com.kdt.goohae.service.user.CartService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {this.cartService = cartService; }

    /**
     * mycart 페이지로 이동
     * */
    @GetMapping(value = "logined-user/mycart")
    public String myCart() {return "user/myPage/shoppingCart";}

    /**
     * 내 장바구니
     * loginId의 장바구니를 담아서 전달.
     * */
    @PostMapping(value = "logined-user/mycart")
    public Model myCart(HttpSession httpSession, Model model){
        String loginId = (String) httpSession.getAttribute("loginId");
        model.addAttribute("userCart", cartService.selectList(loginId) );
        return model;
    }

}
