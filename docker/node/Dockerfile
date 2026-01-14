FROM node:20

Label maintainer="marek w"

WORKDIR app

COPY config/node/frontend/package.json .
RUN npm install

COPY config/node/frontend .

ENV CI=false

CMD ["npm", "start"]


