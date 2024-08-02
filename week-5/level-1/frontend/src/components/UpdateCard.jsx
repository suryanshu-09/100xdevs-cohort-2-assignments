import { useCallback, useState } from "react"
import { defaultHeaders } from "../utils/setHeaders";
function UpdateCard({ setUpdate, updateEntries, identifier, name, description, interests, socials }) {
  const [getName, setName] = useState(name);
  const [getDescription, setDescription] = useState(description);
  const [getInterests, setInterests] = useState(interests);
  const [getSocials, setSocials] = useState(socials);
  const [exit, setExit] = useState(true);

  const saveEntries = () => {
    fetch("http://localhost:3000/business-cards/edit", {
      method: "PUT",
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
        id: identifier
      })
    })
      .then(async (res) => {
        const data = await res.json();
        alert(`Status: ${res.status} Msg: ${data.msg}`);
        if (res.status == 200) {
          setUpdate((update) => !update);
          updateEntries();
          setExit(!exit);
        }
      })
  };
  return <>{exit && <div id="screen-overlay">
    <div id="update-form">
      <div id="identifier"><b>Update id:</b> &emsp; <i>{identifier}</i></div>
      <div id="name-div">
        <label><b>Name:</b></label>
        <input type="text" defaultValue={getName} onChange={(e) => setName(e.target.value)} />
      </div>
      <div id="description-div">
        <label><b>Description:</b></label>
        <input type="text" defaultValue={getDescription} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div id="interests-div">
        <label><b>Interests:</b></label>
        <input type="text" defaultValue={getInterests} onChange={(e) => setInterests(e.target.value)} />
      </div>
      <div id="socials-div">
        <label><b>Socials:</b></label>
        <input type="text" defaultValue={getSocials} onChange={(e) => setSocials(e.target.value)} />
      </div>
      <div id="update-form-buttons">
        <button id="update" onClick={() => {
          saveEntries();
        }}>Save</button>
        <button id="delete" onClick={() => {
          updateEntries();
          setExit(!exit);
        }}>Cancel</button>
      </div>
    </div>
  </div>}
  </>
}

export {
  UpdateCard
}
