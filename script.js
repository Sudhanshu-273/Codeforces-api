const user = document.querySelector("#username");
const calc = document.querySelector("#searchbtn");
const uname = document.querySelector("#name");
const rank = document.querySelector("#rank");
const rating = document.querySelector("#rating");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const maxRank = document.querySelector("#maxRank");
const maxRating = document.querySelector("#maxRating");
const visit = document.querySelector("#visit");
const fou = document.querySelector("#friendOfCount");


function func() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://codeforces.com/api/user.info?handles=${user.value}`, true);
    xhr.send();
    xhr.onload = function () {
        var res = JSON.parse(xhr.response);
        var data = res.result[0];
        console.log(data);
        document.querySelector(".disp").style.display = "block";
        document.getElementById("image").src = `${data.avatar}`;
        visit.setAttribute("href", `https://codeforces.com/profile/${user.value}`);
        user.value = "";
        uname.innerHTML = `${data.handle}`;
        rank.innerHTML = data.rank.toUpperCase();
        rating.innerHTML = `${data.rating}`;
        if (data.country != "undefined")
            country.innerHTML = `${data.country}`;
        if (data.city != "undefined")
            city.innerHTML = `${data.city}`;
        maxRank.innerHTML = `${data.maxRank.toUpperCase()}`;
        maxRating.innerHTML = `${data.maxRating}`;
        fou.innerHTML = `${data.friendOfCount}`;
    }
}

calc.addEventListener('click', func);

user.addEventListener('keydown', function (event){
    if (event.keyCode === 13)
    {
        func();
    }
});