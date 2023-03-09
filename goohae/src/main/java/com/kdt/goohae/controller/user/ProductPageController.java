package com.kdt.goohae.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductPageController {

    @GetMapping(value = "/subpage")
    public String subPage() { return "product/subPage";}
    @GetMapping(value = "/product-detail")
    public String detail() {return "product/detailPage";}

}
