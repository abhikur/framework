require('./commands.js');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    chrome = require('selenium-webdriver/chrome'),
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

counter = 1;
function openPage(url){
	driver.get(url).then(function(){counter++})
}

function clickAt(){

}

function setText() {

}

function waitTill() {

}

var functions = {get:openPage,click:clickAt,sendKeys:setText,wait:waitTill};

commandsToAutobot.forEach(function(task){
	functions[task.command](task.value);
})

driver.quit();



process.on('uncaughtException',function(err){
	console.log("Error in "+counter+" command");
	process.exitCode = counter;
	driver.quit();
})