---
layout: post
title: Install Spotify on Ubuntu 14.04
---

Spotify is probably the best way to listen music online.

<!--more-->

```
# Add the Spotify repository signing key to be able to verify downloaded packages
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 94558F59 D2C19886

# Add the Spotify repository
echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list

# Update list of available packages
sudo apt update

# Install Spotify
sudo apt install spotify-client
```