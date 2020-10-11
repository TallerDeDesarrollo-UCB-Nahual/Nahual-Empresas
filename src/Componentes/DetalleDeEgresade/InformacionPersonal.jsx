import React from "react";
import { Icon, Item, Header } from "semantic-ui-react";
import moment from 'moment';
import 'moment/locale/es';

function convertirAMayusculas(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase())
}

function InformacionPersonal({ egresade }) {
  moment.locale('es');
  const fechaConvertida = moment(egresade.birthDate).format('LL');
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
        />
        <Item.Content verticalAlign='middle'>
          <Header as='h1'> {convertirAMayusculas(egresade.fullName)} </Header><br />
          <Item.Description>
            <p> <Icon name='mail outline' /> <b>Correo: </b>{egresade.mail}</p>
            <p> <Icon name='call' /> <b>Teléfono: </b>{egresade.cellphone}</p>
            <p> <Icon name='calendar outline' /><b>Fecha de nacimiento: </b>{fechaConvertida}</p>
            <p> <Icon name='level up alternate' /><b>Nivel de inglés: </b>{egresade.englishLevel}</p>
            {/* <p> <Icon name='home' /><b>Sede: </b>{egresade.campus}</p> */}
            <p> <Icon name='map outline' /><b>Nodo: </b>{egresade.nodeName}</p>
          </Item.Description>
          <Item.Extra> * Utilizar estos datos solo para fines laborales.</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default InformacionPersonal;
