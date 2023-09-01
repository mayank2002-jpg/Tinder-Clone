import React, { useEffect, useState } from "react";
import "./cards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function Cardz() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get("http://localhost:8001/tinder/cards");
        setPeople(req.data);
      } catch (error) {
        // Handle the error here (e.g., log it, display an error message)
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <>
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cardz;
