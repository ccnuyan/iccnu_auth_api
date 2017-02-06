https://dev.aliyun.com/search.html

https://dev.aliyun.com/detail.html?spm=5176.1972343.2.6.pkar6D&repoId=1237

### start mongo
    docker run --name docker-mongo -p 27017:27017 -d mongo

### start dev
    docker run -it -p 4041:4041 --env-file ./dev.list -v d:\iccnu_auth_api:/workdir --link docker-mongo:docker-mongo --name docker_iccnu_auth_api node:6 bash
    cd workdir 
    npm run start-api-dev

### remove the dev container
    docker rm -f docker-iccnu_auth_api