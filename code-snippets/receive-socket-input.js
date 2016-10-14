msg.payload1 = msg.payload;
context.global.originalMsg = JSON.parse(msg.payload).message;
msg.payload = context.global.originalMsg;

return msg;
