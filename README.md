#Docker

Docker workshop conducted at NUS-ISS as part of the TFIP fullstack web development program

Here are the instructions to build a docker image, push it to docker hub and run the container on localhost

**build the image**
<br />
docker build -t paddlepop25/fortunecookies:v1 .

**see the image**
<br />
docker images

**run the container**
<br />
docker run -d -p 8080:3000 --name app100 paddlepop25/fortunecookies:v1

**check browser localhost:8080 to see app running**
<br />

**check what containers are currently running**
<br />
docker ps

**see all containers**
<br />
docker ps -a

**run on another port**
<br />
docker run -d -p 8081:3000 --name app101 paddlepop25/fortunecookies:v1

**see browser localhost:8081 to see app running**
<br />

**stop running container**
<br />
docker stop app101

**check what containers are currently running**
<br />
docker ps

**remove container**
<br />
docker rm app101

**see all containers that app101 is not there**
<br />
docker ps -a

**see logs for this container name**
<br />
docker logs app100

**see information like port exposed, etc**
<br />
docker inspect app100

**list files in container app100**
<br />
docker exec -ti app100 ls
_(will show JS files, node_modules, etc)_

**go in to bash mode**
<br />
docker exec -ti app100 bash

- will display as root@5a9fb40f037b:/app#
- can give bash commands like ls, cat main.js etc
- to exit out of shell, type exit

**login to docker hub**
<br />
docker login

**push image to docker hub**
<br />
docker push paddlepop25/fortunecookies:v1

**check created image in https://hub.docker.com/repositories**

**stop container from running**
<br />
docker stop app100

**if want to run container again, must give different name (change app100 to something else. can use same port 8080)**
<br />

**error message:**
<br />
_docker: Error response from daemon: Conflict. The container name "/app100" is already in use by container "long string of alphanumeric characters". You have to remove (or rename) that container to be able to reuse that name._

**pull from chuk’s image and run**
<br />
docker pull chukmunnlee/fortune:v1

**run chuk’s container**
<br />
docker run -d -p 8081:3000 --name app500 chukmunnlee/fortune:v1
