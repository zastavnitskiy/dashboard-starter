FROM node:10.16

WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app/
RUN yarn build
CMD yarn start:prod
