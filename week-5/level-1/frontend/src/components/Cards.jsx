import { memo } from 'react'
import '../css/BusinessCards.css'
import { Name } from './Name'
import { Description } from './Description'
import { Interests } from './Interests'
import { Socials } from './Socials'


export const Cards = memo(function Cards({ name, description, interests, socials }) {
  return <div id='card'>
    <Name name={name} />
    <Description description={description} />
    <Interests interests={interests} />
    <Socials socials={socials} />
  </div>
})

