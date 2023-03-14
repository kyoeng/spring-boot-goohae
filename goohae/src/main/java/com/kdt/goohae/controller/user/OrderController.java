package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.OrderVO;
import com.kdt.goohae.service.user.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Controller
public class OrderController {

    OrderService orderService;

    public OrderController(OrderService orderService) {this.orderService = orderService;}

    /**
     * OrderInfo에서 주문 일자 , 수량, 주문처리상태
     * Productdto로 이미지 경로, 이름, 옵션
     * */
    @GetMapping(value = "/logined-user/order/list")
    public ModelAndView selectList(ModelAndView mv, HttpSession httpSession){
        String loginId = (String)httpSession.getAttribute("loginId");
        mv.setViewName("user/myPage/myOrder");
        mv.addObject("orderList", orderService.selectList(loginId));
        return mv;
    }

    /**
     * 결제 화면으로 가는 것
     * param : productCode,
     * param : productPrice,
     * param : productEa,
     * */
    @GetMapping(value = "/logined-user/order/start")
    public ModelAndView orderPage(ModelAndView mv){
        mv.setViewName("user/memberPayment");
//        mv.addObject("orderVO",vo);
        return mv;
    }

    /**
     * 한 개의 상품 주문시
     * param : receiverName
     * param : address
     * param : phoneNumber
     * param : postNumber
     * param : productCode
     * param : productEa
     * param : price
     * */
    @PostMapping(value = "/logined-user/order/payment")
    public ModelAndView pay ( ModelAndView mv, HttpSession httpSession, OrderVO vo){
        vo.setUserId((String) httpSession.getAttribute("loginId"));
        mv.setViewName("user/paymentComplete");
        return mv;
    }

}
