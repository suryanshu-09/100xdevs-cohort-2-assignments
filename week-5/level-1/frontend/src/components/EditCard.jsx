import { useState, useEffect, memo, useCallback, useRef } from 'react';
import '../css/BusinessCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Name } from './Name';
import { Description } from './Description';
import { Interests } from './Interests';
import { Socials } from './Socials';
import { EditButtons } from './EditButtons'
import { defaultHeaders } from '../utils/setHeaders';

export const EditCard = memo(function EditCard({ identifier, name, description, interests, socials }) {
  const [editButtonPress, setEditButtonPress] = useState(false);
  const card = useRef();
  const [update, setUpdate] = useState(false);
  const firstRender = useRef(true);
  const [getName, setName] = useState(name);
  const [getDescription, setDescription] = useState(description);
  const [getInterests, setInterests] = useState(interests);
  const [getSocials, setSocials] = useState(socials);
  const toggleEdit = () => {
    setEditButtonPress(!editButtonPress);
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetch(`http://localhost:3000/business-cards/${identifier}`, {
      headers: {
        "Content-Type": "application/json",
        "username": defaultHeaders.username,
        "Authorization": defaultHeaders.Authorization
      }
    }
    ).then(async (res) => {
      const data = await res.json();
      if (res.status == 200) {
        const card = data.card;
        setName(card.name);
        setDescription(card.description);
        setInterests(card.interests);
        setSocials(card.socials);
      }
    })
  }, [update])
  return <div id='card' ref={card}>
    <div id="top-table">
      <Name name={getName}></Name>
      <FontAwesomeIcon icon={faEdit} onClick={toggleEdit}></FontAwesomeIcon>
    </div>
    <Description description={getDescription}></Description>
    <Interests interests={getInterests}></Interests>
    <Socials socials={getSocials}></Socials>
    {editButtonPress && <EditButtons setUpdate={setUpdate} identifier={identifier} name={getName} description={getDescription} interests={getInterests} socials={getSocials}></EditButtons>}
  </div >
});

