function setHeaders(username, token) {
  defaultHeaders.username = username;
  defaultHeaders.Authorization = 'Bearer ' + token;
  localStorage.setItem("headers", defaultHeaders);
}

let defaultHeaders = {
  'username': '',
  'Authorization': ''
};

export { defaultHeaders, setHeaders }
