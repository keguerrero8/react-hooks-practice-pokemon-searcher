import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [ toggle, setToggle ] = useState(true)

  function handleClickCard () {
    setToggle((toggle) => !toggle)
  }

  return (
    <Card onClick={handleClickCard}>
      <div>
        <div className="image">
          {toggle ? <img alt="oh no!" src={pokemon.sprites.front} /> : <img alt="oh no!" src={pokemon.sprites.back} />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
