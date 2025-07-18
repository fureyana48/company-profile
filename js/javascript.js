document.addEventListener('DOMContentLoaded', function () {
  let nama = localStorage.getItem('namaUser');
  if (!nama) {
    nama = prompt('Masukkan nama Anda:');
    if (nama) localStorage.setItem('namaUser', nama);
  }
  if (document.getElementById('user-name')) {
    document.getElementById('user-name').textContent = nama || 'Pengunjung';
  }

  const form = document.getElementById('message-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name-input').value.trim();
      const email = document.getElementById('email-input').value.trim();
      const phone = document.getElementById('phone-input').value.trim();
      const message = document.getElementById('message-input').value.trim();

      let valid = true;
      let errors = [];
      if (name.length < 3) {
        valid = false; errors.push('Name minimal 3 karakter');
      }
      if (!(/\S+@\S+\.\S+/.test(email))) {
        valid = false; errors.push('Email tidak valid');
      }
      if (!(/^[0-9]{8,15}$/.test(phone))) {
        valid = false; errors.push('Phone Number harus angka 8-15 digit');
      }
      if (message.length < 5) {
        valid = false; errors.push('Pesan minimal 5 karakter');
      }

      const result = document.getElementById('message-result');
      if (valid) {
        result.innerHTML = `
        <strong>Data Berhasil Dikirim:</strong><br>
        Name: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Message: ${message}`;
        form.reset();
      } else {
        result.innerHTML = `<span style="color:red;">${errors.join('<br>')}</span>`;
      }
    });
  }
});