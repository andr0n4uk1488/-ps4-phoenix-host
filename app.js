(function () {
  'use strict';
  var logBox = document.getElementById('log');
  function log(message) {
    var line = document.createElement('div');
    line.className = 'logline';
    var time = document.createElement('time');
    time.textContent = new Date().toLocaleTimeString();
    line.appendChild(time);
    line.appendChild(document.createTextNode(message));
    logBox.appendChild(line);
    logBox.scrollTop = logBox.scrollHeight;
  }

  document.getElementById('jsStatus').textContent = 'ACTIVE';
  try {
    localStorage.setItem('phoenix-host-check', 'ok');
    document.getElementById('storageStatus').textContent = 'AVAILABLE';
    document.getElementById('storageStatus').className = 'good';
    log('Local storage: available');
  } catch (e) {
    document.getElementById('storageStatus').textContent = 'UNAVAILABLE';
    log('Local storage: unavailable');
  }

  function updateNetwork() {
    var online = navigator.onLine;
    document.getElementById('networkStatus').textContent = online ? 'ONLINE' : 'OFFLINE';
    document.getElementById('networkStatus').className = online ? 'good' : 'muted';
    log('Network state: ' + (online ? 'online' : 'offline'));
  }
  updateNetwork();
  window.addEventListener('online', updateNetwork);
  window.addEventListener('offline', updateNetwork);

  document.getElementById('compatBtn').addEventListener('click', function () {
    document.getElementById('compatResult').textContent =
      'Профіль FW 11.00 вибрано. Експлойт-модуль не встановлено; запуск заблоковано до додавання та перевірки сумісного ланцюжка.';
    log('Compatibility profile checked: PS4 / FW 11.00. No exploit module loaded.');
  });
  document.getElementById('clearLog').addEventListener('click', function () {
    logBox.textContent = '';
    log('Log cleared');
  });
  log('Phoenix Host UI initialized');
  log('Target profile: PS4 Pro / firmware 11.00');
  log('BD-JB integration: intentionally excluded');
}());
