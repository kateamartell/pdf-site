# pdf-site
COS 498 Assignment

### About:
- This is a website that is held at www.cloverpdfs.org
- This website is about wildlife in Iceland
- You have open PDFs that hold information about different animals in Iceland.

### Run Instructions:

git clone https://github.com/kateamartell/pdf-site.git <br>
cd pdf-site <br>

<br>//run locally <br>
npm install <br>
node server.js <br>

//build docker image <br>
cd ~/pdf-site <br>
docker build -t pdf-site . <br>

//run docker container locally<br>
docker run -p 3000:3000 pdf-site<br>

//deployment <br>
cd ~/webserver<br>
mkdir -p nginx/data nginx/letsencrypt <br>
docker compose up -d <br>

//Update deployment <br>
cd ~/pdf-site <br>
git pull <br>
docker build -t pdf-site . <br>
cd ~/webserver <br>
docker compose down <br>
docker compose up -d <br>

