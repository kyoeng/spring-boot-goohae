package com.kdt.goohae.controller.admin;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductController {

    @GetMapping("/reg-pro")
    public String regProduct() {
        return "admin/regProduct";
    }

}
