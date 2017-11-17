FROM node:8

# npm install
ADD package.json /tmp/package.json

RUN cd /tmp && npm install
RUN rm -f /tmp/.npmrc


RUN mkdir -p /opt/app-root && cp -a /tmp/node_modules /opt/app-root/

WORKDIR /opt/app-root/
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]
