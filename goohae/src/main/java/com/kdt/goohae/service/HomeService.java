package com.kdt.goohae.service;

import com.kdt.goohae.domain.admin.CategoryVO;

import java.util.List;

public interface HomeService {

    /* 카테고리 메뉴 가져오기 위한 메서드 */
    List<CategoryVO> selectList(Integer categoryCode);

}
