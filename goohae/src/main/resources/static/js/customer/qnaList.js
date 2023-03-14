$('tr[id^="qnaRow"]').click(function () {
    let boardSeq = $(this).attr('id').replace('qnaRow', '');

    location.href = `/qna-board/detail/boardSeq=${boardSeq}`
})
