
#!/bin/sh

echo 'Building'

# 测试部署说明
# 此脚本将自动构建镜像，并推送镜像，rancher直接升级即可

# 版本为测试的版本号，可以任意修改，无需和package.json的version保持一致
VERSION='0.1.1-beta.2'
# git checkout form

git pull

yarn stage

cd dist
pwd

docker build -t registry.cqxndb.com/xndb/main-web:${VERSION} .

echo 'Push Docker Image'

# docker push registry.cqxndb.com/xndb/main-web:${VERSION}
#docker rmi registry.cqxndb.com/xndb/main-web:${VERSION}

echo 'done'