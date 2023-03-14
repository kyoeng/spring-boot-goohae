$('document').ready(function () {
    const tbody = $('#tableBody');

    $.ajax({
        type: 'get',
        url: '/qna-board/list',
        async: true
    })
        .done(function (data, status) {
            console.log(data.qnaList);
            // for (let i = 0; i < data.length; i++) {
            //     const $tr = $('<tr></tr>');
            //     tbody.append($tr)
            //     let $td1 = $('<td></td>');
            //     let $td2 = $('<td></td>');
            //     let $td3 = $('<td></td>');
            //     let $td4 = $('<td></td>');
            //     $tr.append($td1);
            //     $td1.append(document.createTextNode(data[i].number));
            //     $tr.append($td2);
            //     $td2.append(document.createTextNode(data[i].name));
            //     $tr.append($td3);
            //     $td3.append(document.createTextNode(data[i].title));
            //     $tr.append($td4);
            //     $td4.append(document.createTextNode(data[i].date));
            // }
        })
        .fail(function (err, status) {
            console.log(err);
        })
})
