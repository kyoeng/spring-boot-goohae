package com.kdt.goohae.domain.user;

import lombok.Data;

@Data
public class OrderVO {

    private String userId;
    private String productName;
    private String receiverName;
    private String address;
    private int phoneNumber;
    private int postNumber;
    private String orderDate;
    private int orderSeq;
    private int productCode;
    private int price;
    private int productEa;
    private String deliStatus;
}
