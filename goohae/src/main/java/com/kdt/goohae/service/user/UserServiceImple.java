package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.mapper.user.UserMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImple  implements UserService{

    public UserServiceImple(UserMapper mapper) {this.mapper = mapper;}

    UserMapper mapper;

    @Override
    public int insert(UserVO vo) {
        return mapper.insert(vo);
    }
    @Override
    public UserVO selectOne(UserVO vo) {return mapper.selectOne(vo);}

    @Override
    public int delete(UserVO vo) {return mapper.delete(vo);}
    @Override
    public ArrayList<UserVO> selectList() { return mapper.selectList();}
}
