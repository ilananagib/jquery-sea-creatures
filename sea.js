console.log('Javascript is ready');

$(document).ready(readyNow);

let clickCount = 0;

function readyNow(){
    console.log('JQ has been loaded');
$('#counterButton').on('click', clickHandler );
updateDomCount();

function clickHandler(){
//$('#counterInput').val(parseInt($('#counterInput').val()) + 1);
console.log('Button works');
clickCount++;
console.log(clickCount);
//$('#counterInput').val(clickCount);
updateDomCount();
addNewCreature();
}

function updateDomCount(){
    $('#totalCount').text(clickCount);
    //$('#totalCount').html(clickCount);
    
}

function addNewCreature(){
$('#creatureList').append(
    '<tr>' +
        '<td>' + $('#newCreatureName').val() + '</td>' +
        '<td>' + $('#newCreatureSize').val() + 'ft</td>' +
        '<td>' + $('#newCreatureType').val() + '</td>' +
        '<td>' + $('#newCreatureSpeed').val() + 'mph</td>' +
    '</tr>'
);
}


}