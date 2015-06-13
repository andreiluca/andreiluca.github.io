---
layout: post
title: Ubuntu backup error notice
---

I wanted to try the Ubuntu backup feature and got the following error, altough the backup was completed.

```
Could Not Backup The Following files make sure you are able to open them
/home/username/.dbus
```

It seems to be a known permission bug which can be solved by running the following command

```
sudo chown -R "$USER:$USER" ~/.dbus
```

I've personally set up the backup run daily as I've got a lot of space I'm not planning to use.