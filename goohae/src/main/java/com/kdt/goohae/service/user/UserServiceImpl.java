package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.forPaging.SearchCri;
import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.mapper.user.UserMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService{

    UserMapper mapper;
    public UserServiceImpl(UserMapper mapper) {this.mapper = mapper;}

    @Override
    public int insert(UserVO vo) {
        return mapper.insert(vo);
    }
    @Override
    public UserVO selectOne(UserVO vo) {return mapper.selectOne(vo);}
    @Override
    public int delete(UserVO vo) {return mapper.delete(vo);}
    @Override
    public ArrayList<UserVO> selectList(SearchCri cri) { return mapper.selectList(cri);}
    @Override
    public int getTotalData() { return mapper.getTotalData(); }
    public int update(UserVO vo) { return mapper.update(vo); }
    public String findId(UserVO vo) {return mapper.findId(vo);}
    public int changePassword(UserVO vo) {return mapper.changePassword(vo);}
}
