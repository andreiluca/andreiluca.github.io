---
layout: post
title: "Ubuntu LXC Port Forwarding"
tags: container
---

````
sudo iptables -t nat -I PREROUTING -p tcp -d $PUBLICIP --dport 80 -j DNAT --to 10.0.0.1:80
sudo iptables -A FORWARD -p tcp -d 10.0.0.1 --dport 80 -j ACCEPT
````