import '../css/BusinessCards.css';
import { defaultHeaders, setHeaders } from '../utils/setHeaders';
import { useEffect, useState, useRef } from 'react';
import { UpdateCard } from './UpdateCard';
export function EditButtons({ setUpdate, identifier, name, description, interests, socials }) {
  const [updateButtonPress, setUpdateButtonPress] = useState(false);
  function deleteEntry(e) {
    fetch(`http://localhost:3000/business-cards/${identifier}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "username": defaultHeaders.username,
        "Authorization": defaultHeaders.Authorization
      }
    })
      .then(async (res) => {
        const data = await res.json()
        alert(`${res.status}: ${data.msg}`)
        if (res.status == 200) {
          e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
        }
      })
  }

  const updateEntries = () => {
    setUpdateButtonPress(!updateButtonPress);
  }

  return <div id="edit-buttons">
    <button id="update" onClick={updateEntries}>Update</button>
    <button id="delete" onClick={(e) => {
      deleteEntry(e);
    }}>Delete</button>
    {updateButtonPress && <UpdateCard setUpdate={setUpdate} updateEntries={updateEntries} identifier={identifier} name={name} description={description} interests={interests} socials={socials} />}
  </div>
}

