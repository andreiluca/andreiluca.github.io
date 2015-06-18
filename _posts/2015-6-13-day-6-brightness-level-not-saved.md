---
layout: post
title: "Daily commands #6: Brightness level not saved on Ubuntu 14.04"
date: 2015-6-13 08:24:00
---

Open the Terminal and type

```
sudo gedit /etc/rc.local
```

Add the following line before `exit 0` and save

````python
echo 400 > /sys/class/backlight/intel_backlight/brightness
````

In my case the maximum value for brightness seems to be 976 so 400 should be ok.