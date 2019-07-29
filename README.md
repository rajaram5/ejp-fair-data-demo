# ejp-fair-data-demo
An example web app to demonstrate the use of FAIR (meta)data. The app is configured to query 
the content of this triple store (http://training.fairdata.solutions/sparql) 

### Installation
The app can be easily installed in any web servers simply follow the application deployment
instructions of your chosen web server.

If you wish to install this app as a docker container then create a docker image based on
`Dockerfile` in this directory. The base image of dockerfile is `nginx` thus the app can be 
access via port `80` of docker container. 

##### Example build command
`docker build -t <IMAGE_NAME> -f  <PATH_OF_THIS_GIT_REPO>Dockerfile`

##### Example run command

`docker run --name <CONTAINER_NAME> -p <PORT_OF_CHOOSE_AT_HOST>:80 -d <IMAGE_NAME>`
