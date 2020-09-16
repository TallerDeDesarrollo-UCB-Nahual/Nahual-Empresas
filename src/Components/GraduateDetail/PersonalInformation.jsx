import React from "react";
import { Icon, Item, Header } from "semantic-ui-react";

function PersonalInformation({ graduate }) {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
        />
        <Item.Content verticalAlign='middle'>
          <Header as='h1'> {graduate.name} </Header><br/>
          <Item.Description>
            <p> <Icon name='mail outline'/> <b>Correo: </b>{graduate.email}</p>
            <p> <Icon name='call'/> <b>Teléfono: </b>{graduate.phone}</p>
            <p> <Icon name='calendar outline'/><b>Fecha de nacimiento: </b>{graduate.dateOfBirth}</p>
            <p> <Icon name='level up alternate'/><b>Nivel de inglés: </b>{graduate.englishLevel}</p>
            <p> <Icon name='home'/><b>Sede: </b>{graduate.campus}</p>
            <p> <Icon name='map outline'/><b>Nodo: </b>{graduate.nodo}</p>
          </Item.Description>
          <Item.Extra>
            * Utilizar estos datos solo para fines laborales.
                    </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default PersonalInformation;
