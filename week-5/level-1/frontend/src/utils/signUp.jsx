export async function signUp(username, password) {
  const usernameVal = username.current.value; 
  const passwordVal = password.current.value;
  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: usernameVal,
      password: passwordVal
    })
  });
  const json = await res.json();


  alert(`${res.status}: ${json.msg}`);
  username.current.value = '';
  password.current.value = '';
}

