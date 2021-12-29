let url = "https://api.openweathermap.org/data/2.5/weather"
    url += "?appid=3e3765f2f4549e7d0adac7fbd7602cc5";
    url += "&units=metric";
    url += "&lang=kr";
    url += "&q=";

// 현재 날씨 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openweatherAPI = url;
    
    $.ajax({
        type: "GET",
        url: openweatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            dataObj = data;
            // console.log("result:" + JSON.stringify(dataObj));
            // console.log(dataObj.main.temp);
            // console.log(dataObj.weather[0].main);
            // console.log(dataObj.wind.speed);
            // console.log(dataObj.sys.country);
            // console.log(dataObj.sys.sunset);
            // console.log(dataObj.name);


        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);

        }
    });

    return dataObj;
}

// 현재 날씨 온도 얻어오기
function getCurrentTemp(city) {
    var temp = {};
    var openweatherAPI = url;
    
    $.ajax({
        type: "GET",
        url: openweatherAPI += city,
        dataType: "json",
        async: false,
        success: function(data) {
            temp.celsius = Math.floor(data.main.temp);
            temp.icon = data.weather[0].icon;
        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);

        }
    });

    return temp;
}
