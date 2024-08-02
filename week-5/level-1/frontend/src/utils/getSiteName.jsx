export function getSiteName(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)\.com/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
