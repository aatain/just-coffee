#Just Coffee 
A place to find other and connect over a cup of coffee. Maybe you'll meet a mentor, maybe you'll meet a new lifelong friend, or maybe you'll part ways after a first meeting. No worries, it's just coffee!

##Facebook API
In order to run this application, you must create a Facebook App and insert the correct appID in the App.js file. See below: 
``
window.fbAsyncInit = function () {
      window.FB.init({
        appId: appID,
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
    };
``

## Local Development
### Install the API Server Dependencies
In a new terminal, run the following command at the root-level:
```
#Initial setup   
npm install
```

### Install the React UI dependencies
Install the dependencies for the React UI:
```
#Change directory, first via
cd react-ui/

#Initial setup
npm install
```

### Run the React UI and API Server 
At the root-level run the following command to concurrently run the client and server:
```
npm run dev
```
