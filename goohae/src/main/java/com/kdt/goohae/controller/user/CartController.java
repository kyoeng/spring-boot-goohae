package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.CartVO;
import com.kdt.goohae.service.user.CartService;
import com.sun.org.apache.xpath.internal.operations.Mod;
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

    /**
     * 장바구니의 상품을 삭제하고,
     * myCart 페이지로 이동
     * param : productCode
     * */
    @PostMapping(value = "logined-user/mycart/delete")
    public String delete (CartVO vo, HttpSession httpSession, Model model) {
        vo.setUserId((String) httpSession.getAttribute("loginId"));
        if ( cartService.delete(vo)>0 ){
            httpSession.setAttribute("message", "success");
        } else {
            httpSession.setAttribute("message", "fail");
        }
        return "redirect:user/myPage/shoppingCart";
    }

    /**
     * 체크된 상품들 카트에서 삭제
     * 삭제 후 shoppingCart로 이동
     * param : 체크된 상품들의 productCode로 이뤄진 배열
     * */
    @PostMapping(value = "logined-user/mycart/checked-delete")
    public String checkedDelete(CartVO vo, HttpSession httpSession) {
        vo.setUserId((String)httpSession.getAttribute("loginId"));
        if(cartService.checkedDelete(vo)>0){
            httpSession.setAttribute("message", "success");
        } else {
            httpSession.setAttribute("message", "fail");
        }
        return "redirect:user/myPage/shoppingCart";
    }

    /**
     * 장바구니 추가기능
     * 추가 결과는 model의 message에 담아서 전달
     * param : productCode
     * param : productEa
     * */
    @PostMapping(value = "logined-user/mycart/insert")
    public Model insert(CartVO vo, HttpSession httpSession, Model model){
        vo.setUserId((String) httpSession.getAttribute("loginId") );
        if (cartService.insert(vo)>0){
            model.addAttribute("message","success");
        } else {
            model.addAttribute("message","fail");
        }
        return model;
    }

}
