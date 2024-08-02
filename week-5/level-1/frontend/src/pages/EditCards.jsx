import '../css/BusinessCards.css'
import { useState, useEffect, useRef } from 'react'
import { EditCard } from '../components/EditCard'
import { defaultHeaders } from '../utils/setHeaders';
import { AddButton } from '../components/AddButton';

export function EditCards({ businessCardsLoad }) {
  const [cards, setCards] = useState([]);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/businesscards/edit", {
      method: "GET",
      headers: {
        username: defaultHeaders.username,
        Authorization: defaultHeaders.Authorization
      }
    }).then(async (res) => {
      const data = await res.json();
      if (res.status == 200) {
        setCards(data.Cards);
        setDisplay(!display);
      } else {
        alert(`Status: ${res.status} ${data.msg}`);
        businessCardsLoad();
      }
    })
  }, []);
  return <> {display && <> <div id='heading'>
    <h1>Edit Cards</h1>
  </div>
    <div id='display-grid'>
      {cards.map(card => {
        return <EditCard key={card._id} identifier={card._id} name={card.name} description={card.description} interests={card.interests} socials={card.socials} />
      })}
    </div>
    <AddButton setCards={setCards} cards={cards} />
  </>
  }
  </>
}
