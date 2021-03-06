import config from './config';
import nexmo from './nexmo';
import callBot from './callBot';
import db from './db';

export default (no) => {
  if (no == 'bot') {
    callBot();
    return;
  }

  nexmo.calls.create({
    from: {
      type: 'phone',
      number: config.FROM_NUMBER
    },
    to: [{
      type: 'phone',
      number: no
    }],
    answer_url: [config.HOST + '/answer']
  }, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(response);
      if (response.uuid) {
        db.callId = response.uuid;
        console.log('Call ID set', response.uuid);
      }
    }
  });
};
