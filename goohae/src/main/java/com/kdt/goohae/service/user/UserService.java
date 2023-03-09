package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.forPaging.SearchCri;
import com.kdt.goohae.domain.user.UserVO;

import java.util.ArrayList;

public interface UserService {

    int insert(UserVO vo);
    UserVO selectOne(UserVO vo);
    int delete (UserVO vo);
    ArrayList<UserVO> selectList(SearchCri cri);
}
