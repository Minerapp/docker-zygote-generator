FROM minerapp/docker-base
ADD ./generator-service ./
CMD ./run.sh
