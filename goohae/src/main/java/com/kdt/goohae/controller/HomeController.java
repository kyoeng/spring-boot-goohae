package com.kdt.goohae.controller;


import com.kdt.goohae.service.admin.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Slf4j
@Controller
public class HomeController {

    // 필드
    private final ProductService productService;

    // 생성자
    public HomeController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newProduct", productService.getMainNew());
        model.addAttribute("bestProduct", productService.getMainBest());
        return "index";
    }

}
