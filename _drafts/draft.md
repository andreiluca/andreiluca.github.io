IRC client: irssi
http://www.irssi.org/documentation/startup#c3
http://carina.org.uk/screenirssi.shtml#5

Screencloud
Share screenshots, support imgur
shift+alt+3 for active window
https://screencloud.net/

Install Docker

$ wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker andrei

Verifiy if installted correctly
sudo docker run hello-world
This command downloads a test image and runs in its container

Encountered the following error

FATA[0000] Post http:///var/run/docker.sock/v1.18/containers/create: dial unix /var/run/docker.sock: no such file or directory. Are you trying to connect to a TLS-enabled daemon without TLS? 

It seems that a restart fixed this, before trying some other commands found on stackoverflow and similar support groups.

This ubuntu thing is similar to windows. if doesn't work - restart and if you have some serious problem it's easier to reinstall the os than repairing.

Run Wordpresss in docker
 docker run -p 80:80 tutum/wordpress
