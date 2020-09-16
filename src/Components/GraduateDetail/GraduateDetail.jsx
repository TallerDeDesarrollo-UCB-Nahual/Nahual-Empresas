import React from 'react'
import { Button, Modal, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import BodyModal from './BodyModal';

const GraduateDetail = ({ graduate }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="small"
      closeIcon
      trigger={<Button icon='eye'/>}
    >
      {
        graduate ?
          <BodyModal graduate={graduate} closeModal = {()=> (setOpen(false))}/>
          :
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Cargando</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
      }
    </Modal>
  )
}

export default GraduateDetail
