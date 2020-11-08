FROM node:12.18-alpine
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "run ","startDEV"]
