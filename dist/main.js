var Client;(()=>{"use strict";var t={d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{handleSubmit:()=>a,resetTrip:()=>c});async function a(t){t.preventDefault();const e=document.getElementById("city").value,a=document.getElementById("startDate").valueAsDate,c=document.getElementById("endDate").valueAsDate,l=function(t){var e=new Date(t).getTime(),a=(new Date).getTime(),n=e-a,o=Math.floor(n/864e5),r=Math.floor(n%864e5/36e5),s=Math.floor(n%36e5/6e4);return` ${o} days-${r}hrs-${s}minutes`}(a),d=function(t,e){const a=t.getTime()-e.getTime();return a/864e5}(a,c),m=await n("http://api.geonames.org/searchJSON?q=","jairajpuri",e),h=await o(" http://api.weatherbit.io/v2.0/forecast/daily?","53b6663fdf6843b48fd4ff977c42fc89",m.geonames[0].lat,m.geonames[0].lng),p=await r("https://pixabay.com/api/?key=","29924781-a1dda297e68a17dd8e7fbf1d3",e);await s("http://localhost:3000/postData",{cityRes:e,startDate:a,endDate:c,weatherData:h,time:l,tripLength:d,image:p}),i(p.hits[0].webformatURL)}document.getElementById("submit").addEventListener("click",a);const n=async(t,e,a)=>{const n=await fetch(`${t}${a}&maxRows=1&username=${e}`);try{const t=await n.json();return console.log(t),t}catch(t){console.log("error",t)}},o=async(t,e,a,n)=>{const o=await fetch(t+"lat="+a+"&lon="+n+"&key="+e);try{const t=await o.json();return console.log(t),t}catch(t){console.log("error",t)}},r=async(t,e,a)=>{const n=await fetch(t+e+"&q="+a+" city&image_type=photo");try{const t=await n.json();return console.log(t),t}catch(t){console.log("error",t)}};const s=async(t="",e={})=>{console.log(e);const a=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{const t=await a.json();return console.log(t),t}catch(t){console.log("error",t)}},i=async t=>{const e=await fetch("http://localhost:8081/getData");try{const a=await e.json();document.querySelector(".result").innerHTML=`\n            <div class="info">\n            <h2 class="place">City:<span class="bold">${a.cityRes}</span></h2>\n            <img src="https://www.weatherbit.io/static/img/icons/${a.weatherData.data[0].weather.icon}.png " >\n            <h5 class="time-left"> Your Trip Start in <span class="bold"> ${a.time}</span>. </h5>\n            <p class="trip">Your Trip length is <span class="bold"> ${a.tripLength}</span> days</p>\n            <h6> Temprature of ${a.cityRes} is: <span class="bold">${a.weatherData.data[0].temp}</span>&#176;</h6>\n            </div>\n            <div class="pic"><img src =${t} alt= ${a.cityRes}></div> `;for(let t=0;t<5;t++)document.getElementById("day"+(t+1)+"Min").innerHTML="Min: "+Number(a.weatherData.data[t].low_temp).toFixed(1)+"°";for(let t=0;t<5;t++)document.getElementById("day"+(t+1)+"Max").innerHTML="Max: "+Number(a.weatherData.data[t].high_temp).toFixed(2)+"°";for(let t=0;t<5;t++)document.getElementById("img"+(t+1)).src="https://www.weatherbit.io/static/img/icons/"+a.weatherData.data[0].weather.icon+".png";for(let t=0;t<5;t++)document.getElementById("day"+(t+1)).innerHTML=a.weatherData.data[t].datetime}catch(t){console.log("error",t)}};function c(){document.getElementById("tripForm").reset()}document.getElementById("remove").addEventListener("click",c),Client=e})();