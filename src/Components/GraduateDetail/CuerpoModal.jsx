import React from 'react'
import PersonalInformation from "./InformacionPersonal";
import CoursesInformation from "./InformacionDeCursos";
import LogoNahual from '../../assets/logo-proyecto-nahual.webp'
import { Button, Modal, Image, Icon, Grid } from 'semantic-ui-react'

const CuerpoModal = ({ egresade, cerrarModal }) => {
  return (
    <>
      <Modal.Header >
        <Image src={LogoNahual} size='small' />
      </Modal.Header>
      <Modal.Content scrolling>
        <Grid divided='vertically'>
          <PersonalInformation egresade={egresade} />
          <CoursesInformation egresade={egresade} />
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={cerrarModal} >
          Cerrar
        </Button>
        {egresade.linkedin ?
          <a
            href={egresade.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color='linkedin'>
              <Icon name='linkedin' />
                LinkedIn
            </Button>
          </a>
          :
          <Button disabled color='linkedin'>
            <Icon name='linkedin' /> LinkedIn
          </Button>
        }
      </Modal.Actions>
    </>
  )
}

export default CuerpoModal;
