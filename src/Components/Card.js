import React, { useState } from "react";
import "../Styles/cards.css";
import TinderCard from "react-tinder-card";
function Card() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(direction);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tindercards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            Key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
