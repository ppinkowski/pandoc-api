# Simple API on top of Pandoc

## Build
 - Install Dependencies: `npm i`
 - Build docker image: `docker build -t pandoc .`

## Run
`docker run --name pandoc -d --rm -p 8080:8080 pandoc`

The endpoint at `<docker machine ip>/convert` will respond to REST PUSH requests with the given file (as message body) converted to markdown. By default this will accept markdown, but giving it an optional type parameter will convert from other types, e.g. `<docker machine ip>/convert/html`