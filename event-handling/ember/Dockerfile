FROM node:8.11.1-alpine

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
CMD ["yarn", "start"]
