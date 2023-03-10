package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.QnaBoardVO;

import java.util.ArrayList;

public interface QnaBoardService {

    ArrayList<QnaBoardVO> selectlList();
    ArrayList<QnaBoardVO> userList(String loginId);
    QnaBoardVO selectOne(QnaBoardVO vo);
    int insert(QnaBoardVO vo);
    int delete(QnaBoardVO vo);
    int update(QnaBoardVO vo);


}
