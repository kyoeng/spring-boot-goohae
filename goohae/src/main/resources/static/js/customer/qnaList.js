let boardSeq;

$('tr[id^="qnaRow"]').click(function () {
    $('.modal').show();
    let boardSeq = $(this).attr('id').replace('qnaRow', '');

    let boardPassword = $('#password').val();

    $('.passwordBtn').click(() => {
        if ($('#password').val() == '') {
            boardPassword = null;
        }
        location.href = `/qna-board/detail?boardSeq=${boardSeq}&boardPassword=${boardPassword}`

        // $.ajax({
        //     url: '/qna-board/detail',
        //     type: 'post',
        //     data: {
        //         boardSeq: boardSeq,
        //         boardPassword: boardPassword
        //     },
        // })
        //     .done((data, status) => {
        //     })
        //     .fail((err, status) => {
        //         console.log(err);
        //         console.log(status);
        //     })
    })
})

$('.modalCancel').click(function () {
    $('.modal').hide();
})