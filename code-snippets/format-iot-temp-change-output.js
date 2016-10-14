msg.payload.message = "The temperature is now " + msg.payload.d.temp + " degrees Celsius.";
msg.payload.user = "IoT";
msg.payload.ts = "";
msg.payload = JSON.stringify(msg.payload);
return msg;
