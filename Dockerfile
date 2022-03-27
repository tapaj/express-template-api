FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure that both package.json and package-lock.json files are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run", "start" ]