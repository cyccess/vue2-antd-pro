FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d/

#设置本地时间
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
