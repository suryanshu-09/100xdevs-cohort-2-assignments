import { getSiteName } from '../utils/getSiteName';
export const Socials = function Socials({ socials }) {
  return <div id='socials'><b>Socials:</b> {socials.map(social => {
    const site = getSiteName(social);
    return <div key={site}>
      <div><b>{site}:</b> {social}</div>
    </div>
  })}</div>
}
