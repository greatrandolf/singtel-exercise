# Singtel-Exercise-Card-Game

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up

Mobile App React Native Typescript Setup using React Redux

* Configuration (configured by Randolf Dini-ay as Boilerplate)

Development OS (mac OS)
Target OS (Android / iOS)

* Dependencies

Installing dependencies
You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

Node & Watchman
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

    brew install node
    brew install watchman

(ANDROID) Java Development Kit 
We recommend installing the OpenJDK distribution called Azul Zulu using Homebrew. Run the following commands in a Terminal after installing Homebrew:

    brew tap homebrew/cask-versions
    brew install --cask zulu11

(iOS) Xcode installation then install specific cocoapods version

    sudo gem install cocoapods -v 1.11.2

Install via npm
It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

Once you have npm installed you can run the following both to install and upgrade Yarn:

    npm install --global yarn

* How to run app (for the first time)

    ```
    iOS 
        cd singtel-exercise
        yarn
        cd ios && pod install && cd ..
        yarn start --reset-cache
        npx react-native run-ios
    Android 
        cd singtel-exercise
        yarn
        cd android && ./gradlew clean && cd ..
        adb -s <adbDeviceId> reverse tcp:8081 tcp:8081
        yarn start --reset-cache
        npx react-native run-android
    ```
    
* Deployment instructions

TODO

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
