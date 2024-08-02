export const Interests = function Interests({ interests }) {
  return <div id='interests'><b>Interests:</b> {interests.map(interest => <div id='interest' key={interest}>{interest}</div>)}</div>
}
