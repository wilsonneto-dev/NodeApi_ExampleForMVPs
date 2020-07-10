FROM node:12
WORKDIR /opt/api
COPY ./package.json .
RUN yarn
CMD ["yarn", "dev"]
EXPOSE 3333
