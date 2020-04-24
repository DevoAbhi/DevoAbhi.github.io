
    $("#htmlInfo").show();
    $("#cssInfo").hide();
    $("#phpInfo").hide();
    
$("#html").click(function () {
        $("#htmlInfo").show("slow");
        $("#cssInfo").hide();
        $("#phpInfo").hide();
})   

$("#css").click(function () {
    $("#cssInfo").show("slow");
    $("#htmlInfo").hide();
    $("#phpInfo").hide();
})
$("#php").click(function () {
    $("#phpInfo").show("slow");
    $("#cssInfo").hide();
    $("#htmlInfo").hide();
})
