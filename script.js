const ctaBtn = document.getElementById('ctaBtn');
const ctaBtn2 = document.getElementById('ctaBtn2');
const formPopup = document.getElementById('formPopup');
const closeBtn = document.getElementById('closeBtn');

ctaBtn.addEventListener('click', ()=> formPopup.style.display='flex');
ctaBtn2.addEventListener('click', ()=> formPopup.style.display='flex');
closeBtn.addEventListener('click', ()=> formPopup.style.display='none');
window.addEventListener('click', e=> { if(e.target===formPopup) formPopup.style.display='none'; });

// Submit form ke Google Sheets
document.getElementById('ukmForm').addEventListener('submit', function(e){
  e.preventDefault();
  const formData = {
    nama: this.nama.value,
    email: this.email.value,
    alasan: this.alasan.value
  };
  
  fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method:'POST',
    body: JSON.stringify(formData),
    headers:{'Content-Type':'application/json'}
  })
  .then(res=>res.json())
  .then(data=>{
    alert('Form berhasil dikirim!');
    formPopup.style.display='none';
    this.reset();
  })
  .catch(err=> console.log(err));
});
