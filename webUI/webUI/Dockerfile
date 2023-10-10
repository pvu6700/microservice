FROM node:18
RUN mkdir /project
WORKDIR /project
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0" ]