for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}
for (i = 0; i < 10; i++)
    (function (iValue) {
        setTimeout(function () {
            console.log(j)
        }, 0);
    })(i);



for (var i = 0; i < 10; i++)
    setTimeout(console.log(i), 100);