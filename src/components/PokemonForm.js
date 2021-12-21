import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  //here we have state to manage the input fields and to create the object for POST request
  //name, hp, from image url, back url state
  const [ name, setName ] = useState("")
  const [ hp, setHp ] = useState(null)
  const [ frontUrl, setFrontUrl ] = useState("")
  const [ backUrl, setBackUrl ] = useState("")

  function handleSubmit (event) {
    event.preventDefault()
    const newPokemon = {
      name : name,
      hp : hp,
      sprites : {front : frontUrl, back : backUrl}
    }
    fetch("http://localhost:3001/pokemon", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(newPokemon => addPokemon(newPokemon))

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(event) => setName(event.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(event) => setHp(parseInt(event.target.value, 10))}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(event) => setFrontUrl(event.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(event) => setBackUrl(event.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
