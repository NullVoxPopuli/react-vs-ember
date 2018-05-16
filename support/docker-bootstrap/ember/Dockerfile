FROM node:10.1.0-alpine

RUN mkdir /app
WORKDIR /app

COPY \
  package.json yarn.lock \
  /app/

RUN echo \
  && yarn install --pure-lockfile

COPY . /app

# Ports
# 4200 - Dev Server
# 7020 - Hot Reload
EXPOSE 4200
CMD ["yarn", "start"]
