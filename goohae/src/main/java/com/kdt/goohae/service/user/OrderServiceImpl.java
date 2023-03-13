package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.OrderVO;
import com.kdt.goohae.mapper.user.OrderMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OrderServiceImpl implements OrderService{

    OrderMapper orderMapper;
    public OrderServiceImpl(OrderMapper orderMapper) { this.orderMapper = orderMapper; }

    @Override
    public int insert(OrderVO vo){ return orderMapper.insert(vo); }
    @Override
    public int delete(OrderVO vo){ return orderMapper.delete(vo); }
    @Override
    public OrderVO selectOne(OrderVO vo) { return orderMapper.selectOne(vo); }
    @Override
    public ArrayList<OrderVO> selectList(String loginId) { return orderMapper.selectList(loginId); }

}
