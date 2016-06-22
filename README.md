# weatherapp

-Node 6.2, Mongo 3.2.4, Express, React, Redux, Webpack

1)	clone repository

		git clone https://<username>@bitbucket.org/cbengtson85/weatherapp.git

2)	install homebrew (MAC OS X) (optional to install node and mongo)

		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

3)	install node (from projects root directory)

		brew update
		sudo chmod 777 /usr/local/share/systemtap/tapset
		brew install node

4) install packages from package.json  

		npm install     //this will install packages from package.json


5) install mongo db using homebrew (optional)

		brew update
		brew install mongodb --with-openssl
		//create directory for mongo DB (default /data/db)
		mongod //to start DB
		//open new terminal window and run 'mongo'
		//create db 'weatherapp'
		use weatherapp


BUILD APP & RUN NODE SERVER using nodemon for hot deploying

	start DB
	mongod

	from terminal in project's root directory run:
	npm run devbuild
	npm run devstart

	with debugging
	npm run devdebug

	CSS build, wepack build (with auto build on change), node server start
	npm run devwatch
