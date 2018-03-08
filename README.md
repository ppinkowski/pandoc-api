# Simple API on top of Pandoc

## Build
 - Install Dependencies: `npm i`
 - Build docker image: `docker build -t pandoc .`

## Run
`docker run --name pandoc -d --rm -p 8080:8080 pandoc`