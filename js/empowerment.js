//////////////////////////////////////////////////
$("#empowerment_1").click(function () {
    //animate html body and use jQuery scrollTop
    $('html, body').animate({
        scrollTop: $("#empowerment_11").offset().top
    }, 1000);
});

$("#empowerment_2").click(function () {
    //animate html body and use jQuery scrollTop
    $('html, body').animate({
        scrollTop: $("#empowerment_22").offset().top -20
    }, 1000);
});
$("#empowerment_3").click(function () {
    //animate html body and use jQuery scrollTop
    $('html, body').animate({
        scrollTop: $("#empowerment_33").offset().top -20
    }, 1000);
});
$("#empowerment_4").click(function () {
    //animate html body and use jQuery scrollTop
    $('html, body').animate({
        scrollTop: $("#empowerment_44").offset().top -20
    }, 1000);
});




//////////////////////////////////////////////////
$(function(){
    $("#home_1").on("click",function(){
        window.location = "index-main.html#home_11";
    });
});
$(function(){
    $("#home_2").on("click",function(){
        window.location = "index-main.html#home_22";
    });
});
$(function(){
    $("#home_3").on("click",function(){
        window.location = "index-main.html#home_33";
    });
});
$(function(){
    $("#home_4").on("click",function(){
        window.location = "index-main.html#home_44";
    });
});


$(function(){
    $("#Areas_of_research_1").on("click",function(){
        window.location = "index-Areas_of_research.html#Areas_research_11";
    });
});

$(function(){
    $("#Areas_of_research_2").on("click",function(){
        window.location = "index-Areas_of_research.html#Areas_research_22";
    });
});
$(function(){
    $("#Areas_of_research_3").on("click",function(){
        window.location = "index-Areas_of_research.html#Areas_research_33";
    });
});
$(function(){
    $("#Areas_of_research_4").on("click",function(){
        window.location = "index-Areas_of_research.html#Areas_research_44";
    });
});

///////////////////////////////////////////////////////////////////////////

// $(function(){
//     $("#empowerment_1").on("click",function(){
//         window.location = "index.empowerment.html#empowerment_11";
//     });
// });

// $(function(){
//     $("#empowerment_2").on("click",function(){
//         window.location = "index.empowerment.html#empowerment_22";
//     });
// });
// $(function(){
//     $("#empowerment_3").on("click",function(){
//         window.location = "index.empowerment.html#empowerment_33";
//     });
// });
// $(function(){
//     $("#empowerment_4").on("click",function(){
//         window.location = "index.empowerment.html#empowerment_44";
//     });
// });