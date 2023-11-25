FROM node:20

WORKDIR /app

COPY build build 
RUN npm install -g serve
CMD ["serve", "-s", "build"]

