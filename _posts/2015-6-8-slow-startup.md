---
layout: post
title: Slow startup on Ubuntu 15.04
...

It takes 20 seconds until the Ubuntu logo appears and another 25 until the login
dialog.


What I've tried:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sudo vi /etc/default/grub
-- GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
++ GRUB_CMDLINE_LINUX_DEFAULT=""
sudo update-grub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sudo vi /etc/default/grub
-- GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
++ GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi=off"
sudo update-grub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!--more-->
Clean things up:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sudo apt-get clean
sudo apt-get autoclean
sudo apt-get autoremove
sudo apt-get install gtkorphan
sudo gtkorphan
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

I've recently read that Ubuntu 15.04 has slower booting times than previous
versions.

Note added on June 13, 2015:

After having [some serious issues](/things-gone-wrong-after-update/) with my recent installation of Ubuntu 15.04 I decided to move back to 14.04 which as I learned is a LTS version which stands for Long Term Support. More support. Awesome. 

My startup times seems to be cut in half now, booting in around 27 seconds instead of 50 with the newer version.