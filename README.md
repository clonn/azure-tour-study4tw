#Presetation for Azure

Azure usage for node.js, we focus on socket.io, example are from Azure example. and we collect all different service for it.

Have to read all project and `package.json` and know how to use.

##Slide

[![ScreenShot](https://raw.githubusercontent.com/clonn/azure-tour-study4tw/master/AzureLovesNode.png)](http://www.slideshare.net/clonncd/nodejs-x-azure-cli-website-deployment)


 * [slide](http://www.slideshare.net/clonncd/nodejs-x-azure-cli-website-deployment)

##Examples

Basic http request example

    git clone https://github.com/clonn/azure-tour-study4tw.git
    cd azure-tour-study4tw
    cd basic
    npm i
    node app.js

Chat room example

    git clone https://github.com/clonn/azure-tour-study4tw.git
    cd azure-tour-study4tw
    cd chat-example
    npm i
    node app.js

##Azure deployment

    azure account download
    azure account import $FILES
    cd $FOLDER
    azure site create $PROJECT --git
    azure site deployment user set

Then set azure reps,

    git init
    git remote add azure $AZURE_REPS
    git add .
    git commit -m $COMMENT
    git push azure master

##socket.io

 * [socket.io-servicebus](http://github.com/WindowsAzure/socket.io-servicebus/)

##socket.io-servicebus

 * [socket.io-servicebus](http://github.com/WindowsAzure/socket.io-servicebus/)

##Ref

 * [Build a Node.js Chat Application with Socket.IO on an Azure Cloud Service](http://azure.microsoft.com/en-us/documentation/articles/cloud-services-nodejs-chat-app-socketio/)
 * [What are Service Bus Topics and Subscriptions](http://goo.gl/3xERn4)
##Auth

 * [Caesar Chi](about.me/clonn)
 * [Caesar Chi's Blog](http://blog.caesarchi.com)
