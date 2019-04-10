'use strict';
var xml2js = require("xml2js");
const fs = require('fs');


let rawdata = fs.readFileSync('Test.json');
let student = JSON.parse(rawdata);
console.log(student);
var json = student;

json.menu.Name = "Wipro Ltd";

var builder = new xml2js.Builder();
var xml = builder.buildObject(json);

fs.writeFile("edited-test.xml", xml, function(err, data) {
    if (err) console.log(err);

    console.log("successfully written our update xml to file");
});