// Конфигурация: IP-адреса ваших реле (замените на реальные!)
const RELAYS = {
  cooling: 'http://192.168.1.100/cooling',
  system:  'http://192.168.1.101/system',
  laser:   'http://192.168.1.102/laser'
};

// Получаем кнопки
const coolingBtn = document.getElementById('cooling');
const systemBtn  = document.getElementById('system');
const laserBtn   = document.getElementById('laser');

// Функция: отправить команду на реле
async function sendCommand(relayName, state) {
  const url = ${RELAYS[relayName]}?state=${state};
  
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      console.error(`Ошибка при отправке команды на ${relayName}`);
    }
  } catch (error) {
    console.error('Сеть недоступна:', error);
  }
}

// Обработчики кликов
coolingBtn.addEventListener('click', () => {
  coolingBtn.classList.toggle('active');
  const isActive = coolingBtn.classList.contains('active');
  sendCommand('cooling', isActive ? 1 : 0);
});

systemBtn.addEventListener('click', () => {
  systemBtn.classList.toggle('active');
  const isActive = systemBtn.classList.contains('active');
  sendCommand('system', isActive ? 1 : 0);
});

laserBtn.addEventListener('click', () => {
  laserBtn.classList.toggle('active');
  const isActive = laserBtn.classList.contains('active');
  sendCommand('laser', isActive ? 1 : 0);
});