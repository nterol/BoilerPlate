import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBAK0GD9OUpcuXrEL3OBV9yazamf-MiXZc",
    authDomain: "test-59dfb.firebaseapp.com",
    databaseURL: "https://test-59dfb.firebaseio.com",
    projectId: "test-59dfb",
    storageBucket: "test-59dfb.appspot.com",
    messagingSenderId: "635347935597"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Le Nicot',
});