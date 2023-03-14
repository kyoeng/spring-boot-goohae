package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.WishVO;
import com.kdt.goohae.service.user.WishService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

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

    /**
     * wishList에서 상품 삭제
     * param : productCode
     * */
    @GetMapping(value = "logined-user/mywish/delete")
    public String delete (WishVO vo, HttpSession httpSession){
        vo.setUserId((String) httpSession.getAttribute("loginId"));
        wishService.delete(vo);
        return "/user/myPage/wishList";
    }

    /**
     * 체크된 항목 삭제
     * param : productCode의 배열 ( productCodes로 해주세요. )
     * */
    @GetMapping(value = "logined-user/mywish/checked-delete")
    public String checkedDelete (WishVO vo, HttpSession httpSession){
        vo.setUserId((String) httpSession.getAttribute("loginId"));
        wishService.checkedDelete(vo);
        return "/user/myPage/wishList";
    }

}
