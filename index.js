const express = require('express');
const faker = require('faker');

const app = express();

app.get('/',(req,res) =>{
    const address = faker.address;
    let data = {
        "name": faker.name.findName(),
        "email" : faker.internet.email(),
        "address1": address.streetAddress(),
        "address2" : address.secondaryAddress(),
        "zipcode": address.zipCode(),
        "city": address.city(),
        "dob": faker.date.past()
    };
    res.send(data);
});

app.listen(3000, (req,res) =>{
    console.log('App is running on port 3000');
});