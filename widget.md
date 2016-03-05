---
layout: page
title: Widget
permalink: /widget/
---

You can access the API at `http://blog.andreiluca.com/api.json`

```
<div id="blog--al"></div>
<script>
if (sessionStorage.al) {
        document.getElementById('blog--al').innerHTML = sessionStorage.al;
} else {
	    var api = function(data) {
	    	var dump = '<ul>';
			for (var i=0; i<5; i++) {
				dump += '<li><a target="_blank" href="' + data[i].url + '">' + data[i].title + '</a></li>';
			}
			dump += '</ul>';
	        document.getElementById('blog--al').innerHTML = dump;
	        sessionStorage.al = dump;
	    };

        var alt = document.createElement('script'); alt.type = 'text/javascript'; alt.async = true;
        alt.src = "//blog.andreiluca.com/api.json";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(alt, s);
};
</script>
```