// Night mode
var d = document.documentElement,
    t = document.querySelectorAll(".js-toggle-lights")[0],
    l = document.querySelectorAll(".site-description")[0],
    m = localStorage.getItem("nightmode");

if(m == "true") {
  d.classList.add("night-mode");
  l.textContent = "Ubuntu experience. Sleep mode.";
}

t.addEventListener("click", function(){
  if(d.classList.contains("night-mode")) {
    d.classList.remove("night-mode");
    localStorage.setItem("nightmode", "false");
  } else {
    d.classList.add("night-mode");
    localStorage.setItem("nightmode", "true");
  }
});

function timeAgo(n){var i=[{name:"second",limit:60,in_seconds:1},{name:"minute",limit:3600,in_seconds:60},{name:"hour",limit:86400,in_seconds:3600},{name:"day",limit:604800,in_seconds:86400},{name:"week",limit:2629743,in_seconds:604800},{name:"month",limit:31556926,in_seconds:2629743},{name:"year",limit:null,in_seconds:31556926}],e=(new Date-new Date(1e3*n))/1e3;if(5>e)return"now";for(var m=0,o=null;null!==(o=i[m++]);)if(e<o.limit||!o.limit)return e=Math.floor(e/o.in_seconds),e+" "+o.name+(e>1?"s":"")+" ago"}

if (sessionStorage.irl) {
            document.getElementById('irl').innerHTML = sessionStorage.irl;
} else {
        var al = function(data) {
            var steps = parseInt(data.googlefit.steps);
            if(steps == 0) steps = 'a lot of';
            var irl = "I've made " + steps.toLocaleString() + " steps today and I've spent " + data.health.age.days.toLocaleString() + " days on Earth. Also, my heart beat rate is " + data.googlefit.heartRate.bpm + " bpm measured " + timeAgo(data.googlefit.heartRate.timestamp) + ".";
            document.getElementById('irl').innerHTML = irl;
            sessionStorage.irl = irl;
      };

        var alt = document.createElement('script'); alt.type = 'text/javascript'; alt.async = true;
        alt.src = "http://track.andreiluca.com/api/?callback=al";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(alt, s);
} // e.ss