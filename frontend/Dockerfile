

# build app
FROM node:14.9-slim as build

COPY . /frontend
WORKDIR /frontend
RUN npm install .
RUN npm run build .


# serve app
FROM node:14.9-slim as run

COPY --from=build /frontend/build /frontend
RUN npm install serve

ENV PORT 80
CMD /node_modules/serve/bin/serve.js -l tcp://0.0.0.0:${PORT} /frontend
