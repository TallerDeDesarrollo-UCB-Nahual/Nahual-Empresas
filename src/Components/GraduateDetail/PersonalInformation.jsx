import React from "react";
import { Icon, Item, Header } from "semantic-ui-react";
import moment from 'moment';
import 'moment/locale/es';
import avatarGenerico from '../../assets/avatar-generico.png'

function capitalize_Words(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase())
}

function PersonalInformation({ graduate }) {
  moment.locale('es');
  const fecha_convertida = moment(graduate.fechaNacimiento).format('LL');
  return (
    <Item.Group>
      <Item>
        <Item.Image style={{ width: "200px", marginRight : "30px" }}
          size='medium'
          src={avatarGenerico}
        />
        <Item.Content verticalAlign='middle'>
            <div style={{ textAlign: "left" }}>
              <Header as='h1'> {capitalize_Words(graduate.nombreCompleto)} </Header><br />
              <Item.Description>
                  <p> <Icon name='mail outline' /> <b>Correo: </b>{graduate.correo}</p>
                  <p> <Icon name='call' /> <b>Teléfono: </b>{graduate.celular}</p>
                  <p> <Icon name='calendar outline' /><b>Fecha de nacimiento: </b>{fecha_convertida}</p>
                  <p> <Icon name='level up alternate' /><b>Nivel de inglés: </b>{graduate.nivelIngles}</p>
                  {/* <p> <Icon name='home' /><b>Sede: </b>{graduate.campus}</p> */}
                  <p> <Icon name='map outline' /><b>Nodo: </b>{graduate.nombreNodo}</p>
              </Item.Description>
            </div>
          <Item.Extra> * Utilizar estos datos solo para fines laborales.</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default PersonalInformation;
