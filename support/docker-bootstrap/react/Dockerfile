FROM node:10.1.0-alpine

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

EXPOSE 9091
EXPOSE 9092
CMD ["yarn", "start"]
