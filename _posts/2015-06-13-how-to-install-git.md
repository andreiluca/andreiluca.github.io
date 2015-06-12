---
layout: post
title: How to install and setup Git on Ubuntu 14.04
---

```
sudo apt-get update
sudo apt-get install git
```

Configure Git

```
git config --global user.name "Your Name"
git config --global user.email "email@domain.com"
```

Set git push to simple

`simple` means `git push` will push only the current branch to the one that `git pull` would pull from, and also checks that their names match

```
git config --global push.default simple
```

Generate SSH key

```
ssh-keygen -t rsa -b 4096 -C "email@domain.com"
ssh-add ~/.ssh/id_rsa
```

Use `gedit` or your favorite editor to check the ssh key and copy it into your eg. GitHub account

```
gedit ~/.ssh/id_rsa.pub
```