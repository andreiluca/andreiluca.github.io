---
layout: page
title: Widget
permalink: /widget/
---

You can access the API at `http://ubuntu.andreiluca.com/api` 

```
<div id="ubuntu--al"></div>
<script>
if (sessionStorage.al) {
        document.getElementById('ubuntu--al').innerHTML = sessionStorage.al;
} else {
	    var api = function(data) {
	    	var dump = '<ul>';
			for (var i=0; i<5; i++) {
				dump += '<li><a target="_blank" href="' + data[i].url + '">' + data[i].title + '</a></li>';
			}
			dump += '</ul>';
	        document.getElementById('ubuntu--al').innerHTML = dump;
	        sessionStorage.al = dump;
	    };

        var alt = document.createElement('script'); alt.type = 'text/javascript'; alt.async = true;
        alt.src = "http://ubuntu.andreiluca.com/api";
        var s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(alt, s);
};
</script>
```