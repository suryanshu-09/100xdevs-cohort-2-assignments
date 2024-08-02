import { useState, useRef } from "react";
import { defaultHeaders } from "../utils/setHeaders";
import { EditCard } from "./EditCard";
export function AddCard({ setPressed, setCards, cards }) {
  const [exit, setExit] = useState(true);
  const [getName, setName] = useState();
  const [getDescription, setDescription] = useState();
  const [getInterests, setInterests] = useState();
  const [getSocials, setSocials] = useState();
  const addEntries = (e) => {
    fetch("http://localhost:3000/business-cards/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "username": defaultHeaders.username,
        "Authorization": defaultHeaders.Authorization
      },
      body: JSON.stringify({
        name: getName,
        description: getDescription,
        interests: String(getInterests).split(','),
        socials: String(getSocials).split(','),
      })
    })
      .then(async (res) => {
        const data = await res.json();
        alert(`Status: ${res.status} Msg: ${data.msg}`);
        if (res.status == 201) {
          const id = data.id;
          const name = getName;
          const description = getDescription;
          const interests = getInterests.split(',');
          const socials = getSocials.split(',');
          const card = {
            _id: id,
            name,
            description,
            interests,
            socials
          }
          // e.target.parentElement.parentElement.parentElement.parentElement.children[2].appendChild(<EditCard identifier={data.id} name={getName} description={getDescription} interests={getInterests} socials={getSocials} />);
          setCards([...cards, card])
          setExit(!exit);
        }
      })
  };
  return <>{exit && <div id="screen-overlay">
    <div id="add-form">
      <div id="identifier"><b>Add Card</b></div>
      <div id="name-div">
        <label><b>Name:</b></label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div id="description-div">
        <label><b>Description:</b></label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div id="interests-div">
        <label><b>Interests:</b></label>
        <input type="text" onChange={(e) => setInterests(e.target.value)} />
      </div>
      <div id="socials-div">
        <label><b>Socials:</b></label>
        <input type="text" onChange={(e) => setSocials(e.target.value)} />
      </div>
      <div id="update-form-buttons">
        <button id="update" onClick={(e) => {
          addEntries(e);
        }}>Add</button>
        <button id="delete" onClick={() => {
          setPressed((p) => !p);
          setExit(!exit);
        }}>Cancel</button>
      </div>
    </div>
  </div>
  }</>
}
