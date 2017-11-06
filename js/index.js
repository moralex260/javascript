//alert('hello world')*;
//console.log('hello world');

//var helloWorld = 'hello world';

//document.write('helloWorld');

//let userName = promt('Enter your name');
const userName = prompt('Enter your name');
document.write('<br>');
document.write(userName);
//document.write(helloWorld +'<br>'+userName);
// data types
//const num=42;
//const str = '<p>some text</p>';
let age = Number(prompt('Your age'));
prn('you are:' + checkAge(age));
age = age + 1
prn('next year you will be:' + (age));

function prn(val) {
    document.write('<br>' + val);
}

function checkAge(age) {
    if (age >= 18) && (age <= 60)
} { return 'Adult'; }

}
else if (age < 18) { return 'child'; } {
    return 'old';
}
