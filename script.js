const ctaBtn = document.getElementById('ctaBtn');
const formPopup = document.getElementById('formPopup');
const closeBtn = document.getElementById('closeBtn');

ctaBtn.addEventListener('click', () => formPopup.style.display = 'flex');
closeBtn.addEventListener('click', () => formPopup.style.display = 'none');
window.addEventListener('click', e => { if(e.target === formPopup) formPopup.style.display = 'none'; });

// Submit handler
document.getElementById('ukmForm').addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(this);
  console.log('Nama:', formData.get('nama'));
  console.log('Email:', formData.get('email'));
  console.log('Alasan:', formData.get('alasan'));
  alert('Form berhasil dikirim!');
  formPopup.style.display = 'none';
  this.reset();
});
