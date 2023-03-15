$(document).ready(function () {
    const password = $('input[name="password"]');
    const btn = $('#deleteBtn');
    const seq = $('.seq');

    btn.click(() => {
        $.ajax({
            url: "/logined-user/qna-board/delete",
            type: "post",
            data: {
                boardPassword: password.val(),
                boardSeq: $('.seq').text()
            }
        })
            .then((data, status) => {
                console.log(status);

            })
            .fail((err, status) => {
                console.log(err);
            })
    })
})