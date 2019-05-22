FROM nginx:1.15.8

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/

RUN rm /etc/nginx/conf.d/default.conf
COPY project.conf /etc/nginx/conf.d/

RUN mkdir -p /etc/letsencrypt
COPY privkey.pem /etc/letsencrypt/
COPY fullchain.pem /etc/letsencrypt/
