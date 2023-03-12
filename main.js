'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const genereteBtn = wrapper.querySelector('.form button');
  const qrInput = wrapper.querySelector('.form input');
  const qrImage = wrapper.querySelector('.qr-code img');

  genereteBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener('load', () => {
      wrapper.classList.add('active');
      genereteBtn.innerHTML = 'Генерировать QR-код';
    });
  });
  qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
      wrapper.classList.remove('active');
    }
  });
});
