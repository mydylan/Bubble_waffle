 (function() {
  var path = '//easy.myfonts.net/v2/js?sid=241394(font-family=LunchBox)&sid=241395(font-family=LunchBox+Light)&sid=241396(font-family=LunchBox+Bold)&key=2hdCwKPlKC',
      protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
      trial = document.createElement('script');
  trial.type = 'text/javascript';
  trial.async = true;
  trial.src = protocol + path;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(trial);
  })();


