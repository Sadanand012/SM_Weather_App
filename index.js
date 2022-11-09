
async function searCh() {
    let city = document.getElementById("city").value;
    console.log(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e049ceb24cb7fa38c97e41fbbab8bb2a&units=metric`
    try {
        let res = await fetch(url)
        let data = await res.json();
        console.log(data);
        getAppend(data)
        getdatanextday(data.name)
    }
    catch(err){
        console.log(err);
    }
}
let main = document.getElementById("main");
let map = document.getElementById("gmap_canvas");

let date = new Date();
let year = date.getTime();
let month = date.getMonth() + 1;
let day = date.getHours();
let time = new Date(day*1000)
// console.log(day,year);

function getAppend(data){

    main.innerHTML = null;
    let dat_e = document.createElement("p");
    dat_e.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/512/648/648198.png"> <br> ${new Date()}`
    let city = document.createElement("h1");
    city.innerHTML =`<img src="https://cdn-icons.flaticon.com/png/512/2222/premium/2222222.png?token=exp=1659637348~hmac=f75170332c4f3e6ccaf8020853f476df"> ${data.name}` ;
    let temp = document.createElement("p");
    temp.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/869/869869.png"> Temp:- ${data.main.temp} °C`;
    let min_temp =document.createElement("p");
    min_temp.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"> min_temp:- ${data.main.temp_min} °C`
    let max_temp =document.createElement("p");
    max_temp.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png"> max_temp:- ${data.main.temp_max} °C`    
    let wind =document.createElement("p");
    wind.innerHTML =`<img src="https://cdn-icons.flaticon.com/png/512/2480/premium/2480660.png?token=exp=1659637749~hmac=99be3a191096b72276178608ed5f4169"> deg:- ${data.wind.deg} gust:- ${data.wind.gust} speed:- ${data.wind.speed}`
    let clouds = document.createElement("p");
    clouds.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png"> ${data.clouds.all}` ;
    let sunrise = document.createElement("p");
    let x =new Date(data.sys.sunrise * 1000);
    sunrise.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/7774/7774377.png"> Sunrise at${x.getHours() +":"+ x.getMinutes() +":"+ x.getSeconds()}`
    let sunset = document.createElement("p");
    let y = new Date(data.sys.sunset * 1000);
    sunset.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/128/7774/7774377.png"> Sunset at${y.getHours() +":"+ y.getMinutes() +":"+ y.getSeconds()}`

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
    main.append(dat_e,city,temp,min_temp,max_temp,wind,clouds,sunrise,sunset)

}

function getLocation(){
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getdataWeatherandLocation(crd.latitude,crd.longitude)
      }
      
}

function getdataWeatherandLocation(lat,lon){
    // console.log(lat,lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e049ceb24cb7fa38c97e41fbbab8bb2a`

    fetch(url).then(function (res) {
        return res.json();
    }).then(function (res) {
        // console.log(res)
        getAppend(res)
    }).catch(function (err) {
        console.log(err)
    })
}

function getdatanextday(n){
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${n}&appid=e049ceb24cb7fa38c97e41fbbab8bb2a&units=metric`
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (res) {
        // console.log(res)
        console.log(res);
        getday(res.list)
    }).catch(function (err) {
        console.log(err)
    })
}
let container2 = document.getElementById("day");

function getday(list){

    get1day(list[0])
    get2day(list[7])
    get3day(list[14])
    get4day(list[21])
    get5day(list[28])
    get6day(list[35])
    get7day(list[40])
}
let day1 = document.getElementById("day_1");
function get1day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day1.append(div)
}
let day2 = document.getElementById("day_2");
function get2day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day2.append(div)
}

let day3 = document.getElementById("day_3");
function get3day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day3.append(div)
}

let day4 = document.getElementById("day_4");
function get4day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day4.append(div)
}

let day5 = document.getElementById("day_5");
function get5day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day5.append(div)
}

let day6 = document.getElementById("day_6");
function get6day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day6.append(div)
}

let day7 = document.getElementById("day_7");
function get7day(a){
    let date = document.createElement("p");
    date.innerText = a.dt_txt;
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png"
    let max = document.createElement("p");
    max.innerHTML =` ${a.main.temp_max} °C`
    let min = document.createElement("p");
    min.innerHTML =`${a.main.temp_min} °C`
    let div = document.createElement("div")
    div.append(date,img,max,min)
    day7.append(div)
}