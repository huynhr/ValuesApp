# Docker Set up

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

- Build your image run: `docker build -t node-web-app`
- Run your image: `docker run -p 49160:8080 -d node-web-app`
- `docker ps`: list the containers
- `docker images`: will list the images
- remove docker container run: `docker rm -f [container id]`
- remove docker image run: `docker rmi -f [image id]`
- to get logs run: `docker logs [container id]`