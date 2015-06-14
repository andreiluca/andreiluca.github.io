---
layout: post
title: "Installing Docker on Ubuntu 14.04"
---

Since Docker [is the future](http://blog.circleci.com/its-the-future/) (satire) I decided to try it out.

<!--more-->

If everything is alright you should be able to install the latest version just by running the following, otherwise check the [documentation](https://docs.docker.com/installation/ubuntulinux/).

```
$ wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker username
```

To verify if the installation worked well run

```
sudo docker run hello-world
```

The command above downloads a test image and runs in its container

Personally, I've encountered an error running this command and I had to restart the system to make it work after trying some other commands found on StackOverflow to fix this. 

```
FATA[0000] Post http:///var/run/docker.sock/v1.18/containers/create: dial unix /var/run/docker.sock: no such file or directory. Are you trying to connect to a TLS-enabled daemon without TLS? 
```

> *Ubuntu is like Windows, small problem: restart, serious problem: reinstall* (/s)

Run WordPress in Docker *(WP setup will be available at `127.0.0.1`)*

```
docker pull tutum/wordpress
docker run -p 80:80 tutum/wordpress
```

That's pretty awesome and fast, though don't know yet how to make any changes on it or where are the files actually located.

## Useful Docker commands


Show running containers

```
sudo docker ps
```

Show all images in your local repository

```
sudo docker images
```

Run a container from a specific image

```
sudo docker run -i -t <image_id || repository:tag> -bash
```

Start a existing container

```
sudo docker start -i <image_id>
```

Exit without shutting down a container

```
[Ctrl-p] + [Ctrl-q]
```

Upgrade Docker

```
wget -N https://get.docker.com/ | sh
```

TBC.