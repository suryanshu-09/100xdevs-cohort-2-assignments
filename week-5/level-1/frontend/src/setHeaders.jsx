import { useRef } from "react";
function useSetHeaders({ username, token) {
  const defaultHeaders = useRef({
    'username': { username },
    'Authorization': `Bearer {token}`
  });
  return defaultHeaders;
}


export { useSetHeaders }
