# weatherapp

1)	Uninstall Node(if installed)

		1	go to /usr/local/lib and delete any node and node_modules

		2	go to /usr/local/include and delete any node and node_modules directory

		3	if you installed with brew install node, then run brew uninstall node in your terminal

		4	check your Home directory for any local or lib or include folders, and delete any node or node_modules from there

		5	go to /usr/local/bin and delete any node executable

		6	remove /usr/local/share/doc/node/

		7 	remove /usr/local/share/systemtap/tapset/node.stp

		sudo rm /usr/local/bin/npm
		sudo rm /usr/local/share/man/man1/node.1
		sudo rm /usr/local/lib/dtrace/node.d
		sudo rm -rf ~/.npm
		sudo rm -rf ~/.node-gyp
		sudo rm /opt/local/bin/node
		sudo rm /opt/local/include/node
		sudo rm -rf /opt/local/lib/node_modules
		sudo rm -rf /usr/local/include/node/

2)	install homebrew (MAC OS X)

		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

3)	install node (from projects root directory)

		sudo chmod 777 /usr/local/share/systemtap/tapset
		brew install node
		npm init

4) install packages from package.json  

		npm install     //this will install packages from package.json


5) install mongo db using homebrew

		brew update
		brew install mongodb --with-openssl
		//create directory for mongo DB (default /data/db)
		mongod //to start DB
		//open new terminal window and run 'mongo'
		//create db 'weatherapp'
		use weatherapp


BUILD APP & RUN NODE SERVER using nodemon for hot deploying

	from terminal in project's root directory run:
	npm run devbuild
	npm run devstart

	with debugging
	npm run devdebug
