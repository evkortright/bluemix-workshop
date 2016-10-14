msg.tempChange = 0;
if (context.global.temp != msg.payload.d.temp) {
    context.global.temp = msg.payload.d.temp;
    msg.tempChange = 1;
}

return msg;