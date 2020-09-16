import React from 'react'
import PersonalInformation from "./PersonalInformation";
import CoursesInformation from "./CoursesInformation";
import LogoNahual from '../../assets/logo-proyecto-nahual.webp'
import { Button, Modal, Image,Icon, Grid } from 'semantic-ui-react'

const BodyModal = ({graduate, closeModal}) => {
  return (
    <>
      <Modal.Header >
        <Image src={LogoNahual} size='small' />
      </Modal.Header>
      <Modal.Content scrolling>
        <Grid divided='vertically'>
          <PersonalInformation graduate={graduate} />
          <CoursesInformation graduate={graduate} />
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal} basic>
          Atrás
          </Button>
        {graduate.Linkedin ?
          <a
            href={`https://www.linkedin.com${graduate.Linkedin}`}
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

export default BodyModal
