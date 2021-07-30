$("#one").click(function () {
    $('h1').append("1");
});
$("#two").click(function () {
    $('h1').append("2");
});
$("#three").click(function () {
    $('h1').append("3");
});
$("#four").click(function () {
    $('h1').append("4");
});
$("#five").click(function () {
    $('h1').append("5");
});
$("#six").click(function () {
    $('h1').append("6");
});
$("#seven").click(function () {
    $('h1').append("7");
});
$("#eight").click(function () {
    $('h1').append("8");
});
$("#nine").click(function () {
    $('h1').append("9");
});
$("#zero").click(function () {
    $('h1').append("0");
});



$("#add").click(function () {
    $('h1').append(" + ");
});
$("#sub").click(function () {
    $('h1').append(" - ");
});
$("#mul").click(function () {
    $('h1').append(" * ");
});
$("#div").click(function () {
    $('h1').append(" / ");
});

$("#eql").click(function () {
    $('h2').text(eval($('h1').text()));
});

$("#ac").click(function () {
    $('h1').text("");
    $('h2').text("");
});

