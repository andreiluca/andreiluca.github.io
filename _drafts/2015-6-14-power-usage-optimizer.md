---
layout: post
title: "Power usage optimizer"
...

What could have caused it? I do not know. But I was easily able to fix it by installing the awesome ‘TLP’ (power usage optimizer) utility. As you can see in the below screenshot, it reduced the total power consumption by around 17%!.

Power usage decreased after using 'tlp' (Ubuntu 15.04 Unity)

You can install TLP by using the below three commands:
```
sudo apt-add-repository ppa:linrunner/tlp
sudo apt-get update
sudo apt-get install tlp
```

http://refugeeks.com/use-tlp-to-optimize-the-power-consumption-in-ubuntu/