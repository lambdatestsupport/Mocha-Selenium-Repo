LT_USERNAME = "your_userName";
LT_ACCESS_KEY = "your_Accesskey";

var config = {
  commanCapabilities: {
    build: "Mocha-Selenium-Sample", //Build name
    tunnel: false // Make it true to run the localhost through tunnel
  },
  multiCapabilities: [
    {
      // Desired capabilities
      "name": "Mocha Sample", // Test name
      "platform": "Windows 10", // OS name
      "browserName": "chrome",
      "version": "latest",
      // visual: true, // To take step by step screenshot
      "network": true, // To capture network Logs
      "console": true // To capture console logs.
    },
    {
      "name": "Mocha Sample 1", // Test name
      "platform": "Windows 11", // OS name
      "browserName": "firefox",
      "version": "latest",
      // visual: true, // To take step by step screenshot
      "network": true, // To capture network Logs
      "console": true // To capture console logs.
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});
