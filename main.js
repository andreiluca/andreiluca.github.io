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
    l.textContent = "Ubuntu experience.";
  } else {
    d.classList.add("night-mode");
    localStorage.setItem("nightmode", "true");
    l.textContent = "Ubuntu experience. Sleep mode.";
  }
});

function timeAgo(n){var i=[{name:"second",limit:60,in_seconds:1},{name:"minute",limit:3600,in_seconds:60},{name:"hour",limit:86400,in_seconds:3600},{name:"day",limit:604800,in_seconds:86400},{name:"week",limit:2629743,in_seconds:604800},{name:"month",limit:31556926,in_seconds:2629743},{name:"year",limit:null,in_seconds:31556926}],e=(new Date-new Date(1e3*n))/1e3;if(5>e)return"now";for(var m=0,o=null;null!==(o=i[m++]);)if(e<o.limit||!o.limit)return e=Math.floor(e/o.in_seconds),e+" "+o.name+(e>1?"s":"")+" ago"}

if (sessionStorage.irl) {
            document.getElementById('irl').innerHTML = sessionStorage.irl;
} else {
        var al = function(data) {
            var activity = parseInt(data.googlefit.steps);
            if(activity > 10) activity = "I've made " + activity.toLocaleString() + " steps today and"; else activity = "I'm either sleeping or working. Most likely sleeping.";
            var irl = activity + " I spent over " + data.health.age.days.toLocaleString() + " days on Earth, my heart beat rate is " + data.googlefit.heartRate.bpm + " bpm measured " + timeAgo(data.googlefit.heartRate.timestamp) + ".";
            document.getElementById('irl').innerHTML = irl;
            sessionStorage.irl = irl;
      };

        var alt = document.createElement('script'); alt.type = 'text/javascript'; alt.async = true;
        alt.src = "http://track.andreiluca.com/api/?callback=al";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(alt, s);
}; // e.ss


// Jekyll search
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){module.exports=function(){function receivedResponse(xhr){return 200==xhr.status&&4==xhr.readyState}function handleResponse(xhr,callback){xhr.onreadystatechange=function(){if(receivedResponse(xhr))try{callback(null,JSON.parse(xhr.responseText))}catch(err){callback(err,null)}}}var self=this;self.load=function(location,callback){var xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");xhr.open("GET",location,!0),handleResponse(xhr,callback),xhr.send()}}},{}],2:[function(require,module,exports){function FuzzySearchStrategy(){function createFuzzyRegExpFromString(string){return new RegExp(string.split("").join(".*?"),"gi")}var self=this;self.matches=function(string,crit){return"string"!=typeof string?!1:(string=string.trim(),!!string.match(createFuzzyRegExpFromString(crit)))}}module.exports=new FuzzySearchStrategy},{}],3:[function(require,module,exports){function LiteralSearchStrategy(){function doMatch(string,crit){return string.toLowerCase().indexOf(crit.toLowerCase())>=0}var self=this;self.matches=function(string,crit){return"string"!=typeof string?!1:(string=string.trim(),doMatch(string,crit))}}module.exports=new LiteralSearchStrategy},{}],4:[function(require,module,exports){module.exports=function(){function findMatches(store,crit,strategy){for(var data=store.get(),i=0;i<data.length&&matches.length<limit;i++)findMatchesInObject(data[i],crit,strategy);return matches}function findMatchesInObject(obj,crit,strategy){for(var key in obj)if(strategy.matches(obj[key],crit)){matches.push(obj);break}}function getSearchStrategy(){return fuzzy?fuzzySearchStrategy:literalSearchStrategy}var self=this,matches=[],fuzzy=!1,limit=10,fuzzySearchStrategy=require("./SearchStrategies/fuzzy"),literalSearchStrategy=require("./SearchStrategies/literal");self.setFuzzy=function(_fuzzy){fuzzy=!!_fuzzy},self.setLimit=function(_limit){limit=parseInt(_limit,10)||limit},self.search=function(data,crit){return crit?(matches.length=0,findMatches(data,crit,getSearchStrategy())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(require,module,exports){module.exports=function(_store){function isObject(obj){return!!obj&&"[object Object]"==Object.prototype.toString.call(obj)}function isArray(obj){return!!obj&&"[object Array]"==Object.prototype.toString.call(obj)}function addObject(data){return store.push(data),data}function addArray(data){for(var added=[],i=0;i<data.length;i++)isObject(data[i])&&added.push(addObject(data[i]));return added}var self=this,store=[];isArray(_store)&&addArray(_store),self.clear=function(){return store.length=0,store},self.get=function(){return store},self.put=function(data){return isObject(data)?addObject(data):isArray(data)?addArray(data):void 0}}},{}],6:[function(require,module,exports){module.exports=function(){var self=this,templatePattern=/\{(.*?)\}/g;self.setTemplatePattern=function(newTemplatePattern){templatePattern=newTemplatePattern},self.render=function(t,data){return t.replace(templatePattern,function(match,prop){return data[prop]||match})}}},{}],7:[function(require,module,exports){!function(window,document,undefined){"use strict";function initWithJSON(json){store.put(opt.json),registerInput()}function initWithURL(url){jsonLoader.load(url,function(err,json){err?throwError("failed to get JSON ("+url+")"):(store.put(json),registerInput())})}function throwError(message){throw new Error("SimpleJekyllSearch --- "+message)}function validateOptions(_opt){for(var i=0;i<requiredOptions.length;i++){var req=requiredOptions[i];_opt[req]||throwError("You must specify a "+req)}}function assignOptions(_opt){for(var option in opt)opt[option]=_opt[option]||opt[option]}function isJSON(json){try{return json instanceof Object&&JSON.parse(JSON.stringify(json))}catch(e){return!1}}function emptyResultsContainer(){opt.resultsContainer.innerHTML=""}function appendToResultsContainer(text){opt.resultsContainer.innerHTML+=text}function registerInput(){opt.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void emptyResultsContainer():void render(searcher.search(store,e.target.value))})}function render(results){if(emptyResultsContainer(),0==results.length)return appendToResultsContainer(opt.noResultsText);for(var i=0;i<results.length;i++)appendToResultsContainer(templater.render(opt.searchResultTemplate,results[i]))}var Searcher=require("./Searcher"),Templater=require("./Templater"),Store=require("./Store"),JSONLoader=require("./JSONLoader"),searcher=new Searcher,templater=new Templater,store=new Store,jsonLoader=new JSONLoader,requiredOptions=["searchInput","resultsContainer","json"],opt={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};window.SimpleJekyllSearch=function(_opt){validateOptions(_opt),assignOptions(_opt),isJSON(opt.json)?initWithJSON(opt.json):initWithURL(opt.json)}}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]);

SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('search-results'),
        json: '/search.json',
        searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
        noResultsText: '<li><img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Wait for it &hellip;"></li>',
        limit: 5,
        fuzzy: true,
});

function changePlaceholder() {
    var placeHolders = new Array();
        placeHolders[0] = "You can type here ...";
          var x = 0;
          document.getElementById('search-input').placeholder = placeHolders[x];
          x++;
          if(x >= placeHolders.length) {
               x = 0;
          }
          setTimeout('changePlaceholder()', 3000);
}
t = setTimeout('changePlaceholder()', 3000);