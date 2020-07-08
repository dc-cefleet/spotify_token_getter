import authenticate from "../libs/authenticate.js";


let token = localStorage.getItem('access_token');
let expires_on = localStorage.getItem('expires_on');//expires on is when the token expires as a timestamp

//User is not logged in
if(!token || token === 'undefined' || expires_on === 'NaN' || Number(expires_on) < new Date().getTime()){
    //creates a login button
    let root = document.querySelector('#content');
    let loginButton = document.createElement('button');
    loginButton.innerHTML ='Click Here to Login into Spotify';
    loginButton.addEventListener('click', authenticate);
    root.append(loginButton);

} else {
    //user is logged in to your app
    //Here you can start you app with fetch and all that using the token etc
    fetch(`https://api.spotify.com/v1/me`, {
      headers:{
          'Authorization':`Bearer ${token}`
      }  
    })
    .then(resp=>resp.json())
    .then(json=>console.log(json))
    .catch(error=>console.log(error))

}
