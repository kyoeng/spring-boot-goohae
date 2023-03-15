$(document).ready(function () {
    const password = $('input[name="password"]');
    const btn = $('#deleteBtn');
    const seq = $('.seq');

    btn.click(() => {
        console.log("click")
        $.ajax({
            url: "/logined-user/qna-board/delete",
            type: "post",
            data: {
                boardSeq: $('.seq').text(),
                boardPassword: password.val()
            }
        })
            .then((data, status) => {
                console.log(data)
                // location.href = '/customer/main';
                console.log(status);
            })
            .fail((err, status) => {
                console.log(err);
                console.log(status)
            })
    })
})