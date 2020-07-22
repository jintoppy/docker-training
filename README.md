# docker-training

docker run <image_name>  -> container

host
  container

docker build -t <image_name> .

docker run <image_name>

docker ps


docker logs -f <container_name>

docker exec -it <container_name>  /bin/bash


docker network ls
docker network inspect <network_name>

docker run --network custom_network --name c1 <image_name>
docker run --network custom_network --name c2 <image_name>


http://c1

https://docs.docker.com/compose/compose-file/

