# weatherapp

-Node, Mongo, Express, React, Redux, Webpack

1)	clone repository

        git clone https://<username>@bitbucket.org/cbengtson85/weatherapp.git

2)	install homebrew (MAC OS X) (optional to install node and mongo)

        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

3)	install node (from projects root directory)

        brew update
            sudo chmod 777 /usr/local/share/systemtap/tapset
                brew install node

4) install dependencies and devDependencies from package.json  

        npm install


5) install mongo db using homebrew (optional)

        brew update
        brew install mongodb --with-openssl
        //create directory for mongo DB (default /data/db)
        mongod //to start DB


BUILD APP & RUN NODE SERVER using nodemon for hot deploying

        start DB(optional)
        mongod

        from terminal in project's root directory run:

        to build app:
        npm run devbuild

        to start nodemon/node server:
        npm run devstart

        OR start server with debugging
        npm run devdebug


        OR  wepack build with file watching, nodemon server start
        npm run devwatch


-------------------------DOCKER to build and deploy app--------------------------------------------

INSTALL DOCKER and DOCKER-COMPOSE

        run from project root
        #this will start up Node and mongo DB with shared volume to the code base
        docker-compose -f docker/docker-compose.dev.yml up


        NOTE: run any scripts in /docker/scripts from the project root.
