// challenge 1:
function ageindays(){
    var birthyear = prompt('what year were you born...Good friend?');
    var ageindayss = (2022 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode(' You Are ' + ageindayss + ' Days Old. ');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}
