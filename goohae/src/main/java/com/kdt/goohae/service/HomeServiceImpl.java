package com.kdt.goohae.service;


import com.kdt.goohae.controller.HomeController;
import com.kdt.goohae.domain.admin.CategoryVO;
import com.kdt.goohae.mapper.HomeMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {

    // 필드
    private final HomeMapper mapper;

    // 생성자
    public HomeServiceImpl(HomeMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * 해당 카테고리 가져오기 위한 메서드
     * @param categoryCode 카테고리 코드
     * @return CategoryVO List
     */
    @Override
    public List<CategoryVO> selectList(Integer categoryCode) {
        return mapper.selectList(categoryCode);
    }
}
