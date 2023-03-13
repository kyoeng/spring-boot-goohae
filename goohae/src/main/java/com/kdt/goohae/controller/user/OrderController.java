package com.kdt.goohae.controller.user;

import com.kdt.goohae.service.user.OrderService;
import org.springframework.stereotype.Controller;

@Controller
public class OrderController {

    OrderService orderService;

    public OrderController(OrderService orderService) {this.orderService = orderService;}


}
