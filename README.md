# typescript-rest-api

1. Add the following env variables to a ".env" file for example 
PORT=3000 // establish port when running locally
SIMPLE_ARRAY=["test"] // establish the default values for the array used in the "append" endpoint

2. Run on the root folder the following command:
```
    npm run start
```

To run the tests run the following command:
```
    npm run test
```

3. Run on a docker container:
```
    docker build -t ts-rest-api .  
    docker run -dp 3000:3000 ts-rest-api
```
