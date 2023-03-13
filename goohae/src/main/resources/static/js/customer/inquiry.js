const form = document.querySelector('#etcForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const payLoad = new FormData(form);

    fetch('/logined-user/qna-board/insert', {
        method: 'Post',
        header: {
            'Content-Type': 'json',
            'sameSite': "None",
            'Secure': 'true'
        },
        body: payLoad
    })
        .catch(err => console.log(err))
})