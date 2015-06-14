---
layout: post
title: "Installing Docker on Ubuntu 14.04"
---

Since Docker [is the future](http://blog.circleci.com/its-the-future/) (satire) I decided to try it out.

<!--more-->

If everything is alright you should be able to installing just by running the following

```
$ wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker username
```

To verify if is installed correctly run

```
sudo docker run hello-world
```

The command above downloads a test image and runs in its container

Personally I've encountered an error and I had to restart the system to make it work.

```
FATA[0000] Post http:///var/run/docker.sock/v1.18/containers/create: dial unix /var/run/docker.sock: no such file or directory. Are you trying to connect to a TLS-enabled daemon without TLS? 
```

TBC.