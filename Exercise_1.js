let result = +prompt ('Enter value');

if (result) {
    if (typeof(result) === 'number' && !Number.isNaN(result)) {
        if (result % 2 === 0) {
            alert ('Even');
        } else {
            alert ('Odd');
        }
    } else {
        alert ('Sorry, you are wrong!')
    }
} else {
    alert ('Sorry, You may not have entered enything');
}