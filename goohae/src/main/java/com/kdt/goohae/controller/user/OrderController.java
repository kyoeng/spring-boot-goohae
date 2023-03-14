package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.admin.GetProductDTO;
import com.kdt.goohae.domain.admin.ProductVO;
import com.kdt.goohae.domain.user.OrderVO;
import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.service.admin.ProductService;
import com.kdt.goohae.service.user.OrderService;
import com.kdt.goohae.service.user.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final ProductService productService;

    public OrderController(OrderService orderService, UserService userService, ProductService productService) {
        this.orderService = orderService;
        this.userService = userService;
        this.productService = productService;
    }

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
    public ModelAndView orderPage(ModelAndView mv, ProductVO product, UserVO vo,
                                  HttpServletRequest request){
        // 유저 정보 담기
        vo.setId((String)request.getSession().getAttribute("loginId"));
        mv.addObject("userInfo", userService.selectOne(vo));

        // 상품 정보 담기
        GetProductDTO dto = new GetProductDTO();
        dto = productService.getProductOne(product);
        dto.setProductEa(product.getProductEa());
        mv.addObject("products", dto);

        mv.setViewName("user/memberPayment");
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
