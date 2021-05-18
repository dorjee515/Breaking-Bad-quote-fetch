
const key="5bc832f1c7b257f316732d3f6a639145";
async function fetchapi(){
//const apiurl = `http://api.openweathermap.org/data/2.5/weather?lat=${26.709630}&lon=${88.428620}&appid=${key}`;
const apiurl = `https://breaking-bad-quotes.herokuapp.com/v1/quotes/`;
const response = await fetch(apiurl);
  let data = await response.json();
   console.log(data);
   show(data);
  }
  function show(data){
    for (var  a of data){
    var s="";
    var au=""
     s+=a.quote;
     au+=a.author;
    }
      console.log(s);
  // document.getElementById('d2').innerHTML=c+'* Celsius';
  document.getElementById('d1').innerHTML=s+'<br>-'+au;
  }
  fetchapi();