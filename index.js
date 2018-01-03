var mqtt = require('mqtt')
//var client  = mqtt.connect('mqtt://test.mosquitto.org')
var client  = mqtt.connect('mqtt://127.0.0.1');

client.subscribe('presence');
 
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})