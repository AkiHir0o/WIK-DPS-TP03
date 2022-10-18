FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i
RUN npx tsc
RUN useradd -ms /bin/bash firstuser
USER firstuser
CMD node build/index.js