FROM node:8.11.1-alpine

RUN mkdir /app
WORKDIR /app

COPY \
  package.json yarn.lock \
  /app/

RUN echo \
  && yarn install --pure-lockfile

COPY . /app


# Dev Server
ENV PORT=9091
# Hot Reload
ENV HMR_PORT=9092

CMD ["yarn", "start"]
