package com.kdt.goohae.mapper.user;

import com.kdt.goohae.domain.user.OrderVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface OrderMapper {

    int insert(OrderVO vo);
    int delete(OrderVO vo);
    OrderVO selectOne(OrderVO vo);
    ArrayList<OrderVO> selectList(String loginId);

}
