FROM nginx:1.10.1-alpine
# COPY src/html /user/share/nginx/html
COPY . /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html
# RUN date +%x_%H:%M:%S:%N >> ./index.html
RUN ./index.html
## Documentation
# EXPOSE 80

# CMD [ "nginx", "-g", "daemon off;" ]