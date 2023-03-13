const tbody = $('tbody');

let data = [
    {
        boardSeq: '1',
        userId: 'kim',
        title: 'hello',
        refDate: '2023.03.13'
    },

    {
        boardSeq: '2',
        userId: 'park',
        title: 'hi!',
        refDate: '2023.03.13'
    },

    {
        boardSeq: '3',
        userId: 'lee',
        title: 'good',
        refDate: '2023.03.13'
    }
]



for (let i = 0; i < data.length; i++) {
    const $tr = $('<tr></tr>');
    tbody.append($tr)
    let $td1 = $('<td></td>');
    let $td2 = $('<td></td>');
    let $td3 = $('<td></td>');
    let $td4 = $('<td></td>');
    $tr.append($td1);
    $td1.append(document.createTextNode(data[i].boardSeq));
    $tr.append($td2);
    $td2.append(document.createTextNode(data[i].title));
    $tr.append($td3);
    $td3.append(document.createTextNode(data[i].userId));
    $tr.append($td4);
    $td4.append(document.createTextNode(data[i].refDate));
}