// 아이콘 참고 https://openweathermap.org/weather-conditions

var cityList = ["seoul","incheon","busan","gwangju","jeju","jeonju"];

$(".temp").each(function(i) {
    var temp = getCurrentTemp(cityList[i]);
    $(this).text(temp.celsius + "˚C");
    var iconURL = "https://openweathermap.org/img/wn/";
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png");
});

$(".location").on ({
    "click" : function() {
        var q = $(this).children(".q").attr("id");

        // get방식으로 전송
        var redirectURL = "./pages/weather_location.html?q=" + q;
        
        // 페이지 이동
        location.href = redirectURL;
    }
});