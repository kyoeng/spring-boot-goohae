package com.kdt.goohae.mapper.user;

import com.kdt.goohae.domain.forPaging.SearchCri;
import com.kdt.goohae.domain.user.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface UserMapper {

    int insert(UserVO vo);
    UserVO selectOne(UserVO vo);
    int delete(UserVO vo);
    ArrayList<UserVO> selectList(SearchCri cri);

}
