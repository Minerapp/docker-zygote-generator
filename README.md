PUBLIC REPOSITORY - Absolutely no privileged information. This service should never be edited and should only do one thing. Return the ip of the host it is on.

docker build -t minerapp/docker-zygote-generator --no-cache .
docker run -t -d -e PORT=5000 --expose 5000 --net=host minerapp/docker-zygote-generator /bin/sh -c ./run.sh


Request docker template with
```json
{
  "SERVICE": "search",
  "TAG": ":latest",
  "ENV": "dev",
  "ENV-APP": "dev-search",
  "REPO": "search",
  "BRANCH": "dev",
  "REGURL": "localhost",
  "LABELS": [
    "com.randomkey.random=1031"
  ]
}
```


