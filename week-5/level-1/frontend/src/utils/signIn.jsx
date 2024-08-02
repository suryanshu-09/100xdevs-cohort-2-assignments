import { setHeaders } from "./setHeaders";
export async function signIn(username, password) {
  const usernameVal = username.current.value;
  const passwordVal = password.current.value;
  const res = await fetch("http://localhost:3000/signin", {
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
  if (res.status === 200) {
    setHeaders(json.username, json.token);
    alert(`${res.status}: ${json.msg}`);
    return true;
  }
  alert(`${res.status}: ${json.msg}`);
  username.current.value = '';
  password.current.value = '';
  return false;
}
