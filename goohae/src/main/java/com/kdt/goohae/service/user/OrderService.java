package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.OrderVO;

import java.util.ArrayList;

public interface OrderService {

    public int insert(OrderVO vo);
    public int delete(OrderVO vo);
    OrderVO selectOne(OrderVO vo);
    ArrayList<OrderVO> selectList(String loginId);
}
