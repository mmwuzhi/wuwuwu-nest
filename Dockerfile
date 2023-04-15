ARG SERVICE_NAME
FROM node:alpine as development
ARG SERVICE_NAME

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm run build ${SERVICE_NAME}

FROM node:alpine as production
ARG SERVICE_NAME

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package.json ./

RUN npm install --omit=dev --ignore-scripts

COPY --from=development /usr/app/dist/apps/${SERVICE_NAME} ./dist

CMD ["node", "dist/main"]