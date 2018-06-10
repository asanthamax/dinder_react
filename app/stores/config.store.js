/**
 * Created by asantha on 6/8/2018.
 */
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB3pr0z0whH5ewPllvjHib4e5lJdIRgem4",
    authDomain: "testreact-eb5bd.firebaseapp.com",
    databaseURL: "https://testreact-eb5bd.firebaseio.com",
    projectId: "testreact-eb5bd",
    storageBucket: "testreact-eb5bd.appspot.com",
    messagingSenderId: "641638658210"
};

export default class ConfigStore{

    constructor(){

        firebase.initializeApp(config)
        this.splashTime = 1000;
        this.splashImg = require('../../images/splash_screen.jpg');
        this.loginBG = require('../../images/login_background.jpg');
    }

    get SplashImg(){

        return this.splashImg
    }

    get SplashTime(){

        return this.splashTime
    }

    get LoginBG(){

        return this.loginBG
    }
}