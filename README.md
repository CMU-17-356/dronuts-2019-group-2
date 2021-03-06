# Group 2 Dronut Project # 

[![Build Status](https://travis-ci.com/CMU-17-356/dronuts-2019-group-2.png)](https://travis-ci.com/CMU-17-356/dronuts-2019-group-2)
**Project Contributors are: Eli Bittleston, Tricia Chen, Albert Yuan** <br>
Find our project here: http://104.42.146.209/ <br> 

Welcome to Group 2's Dronut Project. We used Express and MongoDB for the backend and React for the frontend.  

## Running the application locally: ##
To run the application on your local computer, run 
`docker-compose down` <br>
`docker-compose build` <br>
` docker-compose up ` <br>

To run the prod version of this application, add `--file docker-compose.prod.yml` to the above commands or more specifically:
`docker-compose  --file docker-compose.prod.yml build` <br>
`docker-compose  --file docker-compose.prod.yml up` <br>

you can also choose to run npm start in both the client and server folders as an alternative. 


## Difference Between Prod version and Normal ##
Production uses the Dockerfile at the root of the repo and creates a static build of the client. React app and runs Express inside server, which handles both the API and serving of React files. This also directly deploys to the Azure VM. 

## Setting up Azure ##
Please check the link below for more information: 
https://github.com/CMU-17-356/dronut-starter/blob/master/README.md 

## Running Linting ##
We are currently using eslint. To run eslint 
`eslint [directory/filename]`
More information can be found here: https://eslint.org/docs/user-guide/getting-started

