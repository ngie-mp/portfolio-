export default function sw() {

  const token = 'BDo6btp0LW7-5yYv3Fw917Bqw7nLmcs2sKMx0BUWAd7YUXH7U2oFAnllNDvZ5URV4sWZT2T8qFTYrmGxQRuJSeQ'

  if ('serviceWorker' in navigator  && 'PushManager' in window) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {

        function initUI() {
          registration.pushManager.getSubscription()
          .then(function(subscription) {
            if(subscription) {
              console.log('User is subscribed to notifications');
            }else {
              console.log('User is not subscribed :(');
              //subscribeUser(registration);
            }
          });
        }
        // Registration was successful
        console.log('ServiceWorker registration successful', registration);
        initUI();
      }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}
