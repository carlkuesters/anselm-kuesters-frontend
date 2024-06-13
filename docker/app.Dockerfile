FROM nginx:1.27.0-alpine
COPY dist/anselm-kuesters  /usr/share/nginx/html/
COPY app.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
