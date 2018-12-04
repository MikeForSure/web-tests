function test() {
    alert("test");
}

$(document).ready(function() {
    $("#btnClickMe").click(function() {
        getNumbers();
    });

});

function getNumbers() {
    $.getJSON('./random.php', {get_param: 'value'}, function(data) {
        $("#resultarea").empty();
        $.each(data, function(index,element) {
            $("#resultarea").append("Randomnumer: "+element.randomnumber+"<br>");
        });
    });

}
