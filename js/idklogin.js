const userDatabase = [
  {
    "username": "admin",
    "passwordHash": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    "token": "gfdg53bfd435sd4f3vg6534v65g4v56scx"
  },
  {
    "username": "lukino",
    "passwordHash": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    "token": "gsdg5f4sdf5sd4g684vsd564sdg5ds4gf5"
  }

];


function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}


document.querySelector("input[type='submit']").addEventListener('click', async () => {
  // Tu si predstavime komunikaciu zo serverom ktora neexistuje\
  var username = document.querySelector("input[name='username']").value;
  var password = document.querySelector("input[name='password']").value;
  var hashedPassword = await hash(password);

  var user = userDatabase.find(user => user.username === username&&user.passwordHash === hashedPassword)||null;
  if(!user) {
    document.getElementById("errorMessage").innerHTML = "Invalid username or password";
    document.querySelector("input[name='password']").value = "";
  } else {
    window.location.href = "/human%20anatomy2%20(1)/index.html?token="+user.token;
  }
})
