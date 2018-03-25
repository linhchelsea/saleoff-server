const request = require('request');
const Env = use('Env');
const serverKey = Env.get('FCM_SERVER_KEY');
/**
 * sendNotificationToAndroid
 * @param deviceToken, data, cb
 * @param data
 * @return {Promise}
 */
const sendNotificationToAndroid = (deviceToken, data) => {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`,
    },
    body: JSON.stringify({
      data,
      priority: 'high',
      to: deviceToken,
    }),
  }, (error, response, body) => {
    if (error) {
      throw error;
    } else if (response.statusCode >= 400) {
      console.error(`HTTP Error: ${response.statusCode} - ${response.statusMessage}`);
    } else {
      console.log('android: ', body);
    }
  });
};

module.exports = {
  sendNotificationToAndroid,
};

