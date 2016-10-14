translatedMsg = msg.payload;
//msg.payload = msg.payload1.replace(context.global.originalMsg, translatedMsg);

msg.payload = JSON.parse(msg.payload1);
msg.payload.message = translatedMsg;
msg.payload = JSON.stringify(msg.payload);
delete msg.payload1;

delete msg._session;

return msg;
