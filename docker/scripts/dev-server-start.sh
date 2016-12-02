#!/bin/bash
docker network create wa
docker run --rm --net=wa --name weatherapp -v $(pwd):/usr/app -v /usr/app/node_modules -it -p 8080:8080 -p 4443:4443 cbengtson85/weatherapp-server
