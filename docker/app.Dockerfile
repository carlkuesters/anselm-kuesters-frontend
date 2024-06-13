FROM nginx:1.27.0-alpine
COPY dist/anselm-kuesters ./
COPY proxy.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
