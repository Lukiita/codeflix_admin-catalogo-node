FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

RUN apt update && apt install --no-install-recommends -y git gpg gnupg gpg-agent socat

CMD ["tail", "-f", "/dev/null"]