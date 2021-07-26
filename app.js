// get http module & port no, server url 

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('this is a simple node js app')
// })

// server.listen(port, hostname, () => {
//     console.log(`Listening to port ${port}`)
// })

const express = require('express')

const app = express()

// const fs = require('fs');

const port = 3000

// const newData = "Hello this is the new text data"

// fs.writeFile('after.txt', newData, 'utf8', () => {
//    console.log('file updated successfully')
//  });

// fs.readFile('after.txt', {encoding: 'utf-8'}, (err, data) => {
//     console.log('data', data)
// })

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyDAF1F6nY4OfHEMZhplmQM9Z4x4tKb_hoQ",
    authDomain: "covidcases-ef607.firebaseapp.com",
    projectId: "covidcases-ef607",
    storageBucket: "covidcases-ef607.appspot.com",
    messagingSenderId: "861806800509",
    appId: "1:861806800509:web:450e5b1506106d1ff7cb14"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

app.set('view engine', 'ejs')

app.use(express.static('public'))

/* to add a new data to a collection */

// db.collection("patients").add({
//    name: 'Raja',
//    age: 12,
//    place: 'chennai'
// })
// .then((docRef) => {
//     // console.log("Document ref: ", docRef);
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });


/* to get the values from the collection */

db.collection("patients").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().name)
        // console.log(doc.data().age)
    });
});

// Create a reference to the cities collection
var patientRef = db.collection("patients");

// Create a query against the collection.
var query = patientRef.where("name", "==", "arun");

query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data().name)
        console.log(doc.data().age)
    });
})

app.get('/', (req, res) => {
    const authorName = 'hari'

    const books = [
        {
            name: 'a1',
            price: '200',
        },
        {
            name: 'a2',
            price: '300',
        }
    ]
    res.render('pages/home.ejs', {
        author: authorName,
        books: books
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/career', (req, res) => {
    res.render('pages/career')
})

app.get('/products/:name', (req, res) => {
    const persons = [
        'hari',
        'abu',
        'vinoth'
    ]
    let data 
    console.log(req.params)
    if(req.params.name == 'hari') {
        data = {name: 'hari', age: 22}
    } else {
        data = {name: 'nodata'}
    }
    res.json(data)
})

app.get('/api/patients', (req, res) => {
     const patients = [
        { id: 1, name: 'Ragu', age: 32 },
        { id: 2, name: 'Raj', age: 16 },
        { id:3, name: 'Geetha', age: 23 },
    ]
    res.json(patients)
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});