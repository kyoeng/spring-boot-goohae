package com.kdt.goohae.mapper;


import com.kdt.goohae.domain.admin.CategoryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HomeMapper {

    /* 카테고리 메뉴 가져오기 위한 메서드 */
    List<CategoryVO> selectList(Integer categoryCode);

}
