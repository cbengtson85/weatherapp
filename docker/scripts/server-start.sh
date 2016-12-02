#!/bin/bash
docker network create wa
docker run --rm --net=wa --name weatherapp -it -p 8080:8080 -p 4443:4443 cbengtson85/weatherapp-server
