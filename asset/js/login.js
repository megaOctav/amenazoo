document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();
  
    const correctUsername = "amena";
    const correctPassword = "52032";
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
  
    if (username === correctUsername && password === correctPassword){
      alert('BERHASIL');
      window.location.href = 'index.html';
    }else{
      alert('Username atau password salah')
    }
  });