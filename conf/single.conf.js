LT_USERNAME = "username";
LT_ACCESS_KEY = "accesskey";

exports.capabilities = {
  'build': 'Mocha-Selenium-Sample', //Build name
  'name': 'Your Test Name', // Test name
  'platform':'Windows 10', // OS name
  'browserName': 'chrome', // Browser name
  'version': 'latest', // Browser version
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };