package com.kdt.goohae.mapper.user;

import com.kdt.goohae.domain.user.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int insert(UserVO vo);
    UserVO selectOne(UserVO vo);
}
