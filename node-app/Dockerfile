FROM node:alpine
WORKDIR /usr/src/app
COPY ./ /usr/src/app/
RUN npm config set strict-ssl false
RUN npx kill-port 3000
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]