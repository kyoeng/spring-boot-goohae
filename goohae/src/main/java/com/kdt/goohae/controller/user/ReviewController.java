package com.kdt.goohae.controller.user;

import com.kdt.goohae.service.admin.PostBoardService;
import com.kdt.goohae.service.user.QnaBoardService;
import com.kdt.goohae.service.user.ReviewService;
import org.springframework.stereotype.Controller;

@Controller
public class ReviewController {

    ReviewService reviewService;
    QnaBoardService qnaBoardService;

    public ReviewController(ReviewService reviewService, QnaBoardService qnaBoardService) {
        this.reviewService = reviewService;
        this.qnaBoardService = qnaBoardService;
    }



}
