---
layout: post
title: Ubuntu Backup error notice
---

I wanted to try the Ubuntu backup feature and got the following error, although the backup was completed.

<!--more-->

```
Could Not Backup The Following files make sure you are able to open them
/home/username/.dbus
```

It seems to be a known permission bug which can be solved by running the following command

```
sudo chown -R "$USER:$USER" ~/.dbus
```

I've personally set up the backup to run daily.