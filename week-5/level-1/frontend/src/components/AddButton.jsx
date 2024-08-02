import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AddCard } from './AddCard';
export function AddButton({ setCards, cards }) {
  const [pressed, setPressed] = useState(false);
  return <>
    <button id="add-button" onClick={() => setPressed(!pressed)}>
      <FontAwesomeIcon icon={faPlus} id="faIcon"></FontAwesomeIcon>
    </button>
    {pressed && <AddCard setPressed={setPressed} setCards={setCards} cards={cards} />}
  </>
}
