FROM arm32v7/node:8.9
COPY index.js ./
COPY package.json ./
COPY package-lock.json ./
RUN npm i
EXPOSE 8000
ENV REDIS_HOST="127.0.0.1" \
    REDIS_PORT=6379
ENTRYPOINT [ "npm", "start" ]