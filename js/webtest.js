function test() {
    alert("test");
}

function getNumbers() {
    $.getJSON('./random.php', {get_param: 'value'}, function(data) {
        $("#resultarea").empty();
        $.each(data, function(index,element) {
            //alert("test00");

            $("#resultarea").append("Randomnumer: "+element.randomnumber+"<br>");
        });
    });

}
