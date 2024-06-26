FROM nginx:1.27.0-alpine
COPY app.conf /etc/nginx/conf.d/default.conf
COPY dist/anselm-kuesters /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
