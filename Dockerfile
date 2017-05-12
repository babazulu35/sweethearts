FROM node:7

ENV HOME=/usr/src

WORKDIR ${HOME}

COPY package.json ${HOME}


RUN npm install -g angular-cli && npm install && npm cache clean && rm -rf ~/.npm