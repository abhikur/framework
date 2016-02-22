require('./commands.js');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    until = require('selenium-webdriver').until;
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

counter = 1;
function openPage(taskList){
	driver.get(taskList.url).then(function(){counter++});
	return;
}

function clickAt(taskList){
	var method = taskList.findBy.split('=')[0];
	var element = taskList.findBy.split('=')[1];
	console.log(method,element);
	driver.findElement(By[method](element)).click().then(function(){counter++});
	waitTill(4000);
	return;
}

function setText(taskList) {
	var method = taskList.findBy.split('=')[0];
	var element = taskList.findBy.split('=')[1];
	driver.findElement(By[method](element)).sendKeys(taskList.value);
	return;
}

function waitTill(time) {
	driver.sleep(time);
}

var functions = {get:openPage,click:clickAt,sendKeys:setText,wait:waitTill};

commandsToAutobot.forEach(function(task){
	functions[task.command](task);
})

driver.quit();



process.on('uncaughtException',function(err){
	console.log("Error in "+counter+" command");
	process.exitCode = counter;
	driver.quit();
})