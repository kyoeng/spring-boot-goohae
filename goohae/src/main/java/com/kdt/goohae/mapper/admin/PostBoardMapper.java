package com.kdt.goohae.mapper.admin;


import com.kdt.goohae.domain.admin.PostBoardVO;
import com.kdt.goohae.domain.forPaging.SearchCri;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostBoardMapper {

    /* 게시글 등록을 위한 메서드 */
    int regPostBoard(PostBoardVO vo);

    /* 게시글 데이터를 가져오기 위한 메서드 */
    List<PostBoardVO> getPostBoard(SearchCri cri);

    /* 게시글 전체 데이터 갯수 */
    int getTotalData();

    /* 게시글 삭제를 위한 메서드 */
    int delPostBoard(PostBoardVO vo);

    /* 게시글 디테일을 위한 메서드 */
    PostBoardVO postDetail(PostBoardVO vo);

    /* 게시글 수정을 위한 메서드 */
    int updatePost(PostBoardVO vo);

}
