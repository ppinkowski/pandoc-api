FROM dalibo/pandocker

RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y gnupg && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs

ADD node_modules /server/node_modules
ADD server.js /server/

WORKDIR /server

ENTRYPOINT []
CMD [ "node", "server.js" ]