import '../css/BusinessCards.css'
import { Cards } from '../components/Cards'
import { useState, useEffect } from 'react'

export function BusinessCards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/business-cards")
      .then(res => res.json())
      .then(data => {
        setCards(data.Cards);
      })
  }, []);
  return <>
    <div id='heading'>
      <h1>Business Cards</h1>
    </div >
    <div id='display-grid'>
      {cards.map(card => {
        return <Cards key={card._id} name={card.name} description={card.description} interests={card.interests} socials={card.socials} />
      })}
    </div>
  </>
}
