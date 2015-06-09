---
layout: post
title: Slow startup
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
-- GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi=off"
++ GRUB_CMDLINE_LINUX_DEFAULT=""
sudo update-grub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clean things up:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sudo apt-get clean
sudo apt-get autoclean
sudo apt-get autoremove
sudo apt-get install gtkorphan
sudo gtkorphan
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
