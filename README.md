# pdf-site
COS 498 Assignment

### About:
- This is a website that is held at www.cloverpdfs.org
- This website is about wildlife in Iceland
- You have open PDFs that hold information about different animals in Iceland.

### Run Instructions:

git clone https://github.com/kateamartell/pdf-site.git
cd pdf-site

//run locally
npm install
node server.js

//build docker image
cd ~/pdf-site
docker build -t pdf-site .

//run docker container locally
docker run -p 3000:3000 pdf-site

//deployment 
cd ~/webserver
mkdir -p nginx/data nginx/letsencrypt
docker compose up -d

//Update deployment
cd ~/pdf-site
git pull
docker build -t pdf-site .
cd ~/webserver
docker compose down
docker compose up -d

