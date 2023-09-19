FROM node:20.5.1-slim

RUN apt update && apt install --no-install-recommends -y \
  git gpg gnupg gpg-agent socat

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]