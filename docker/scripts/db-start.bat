docker network create wa
docker run --rm --net=wa --name weatherappdb -it -p 27017:27017 cbengtson85/weatherapp-db
