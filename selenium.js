var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    chrome = require('selenium-webdriver/chrome'),
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var file = require('./commands.js');
console.log(file);

file.commands.forEach(function(command){
	driver[command]()
})