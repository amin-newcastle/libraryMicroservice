# Uses the Node 17 image as the base image
FROM node:17-alpine3.14

# Set your working directory
WORKDIR /app

COPY package.json server.js ./
RUN chown -R node:node package.json server.js

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]
