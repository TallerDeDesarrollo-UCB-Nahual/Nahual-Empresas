import React from 'react'
import PersonalInformation from "./PersonalInformation";
import { Button, Icon, Modal, Grid, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import LogoNahual from '../../assets/logo-proyecto-nahual.webp'

const GraduateDetail = ({ graduate }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size="small"
            closeIcon
            trigger={<Button icon='eye' />}
        >
            {graduate ?
                <>
                    <Modal.Header >
                        <Image src={LogoNahual} size='small' />
                    </Modal.Header>
                    <Modal.Content scrolling>
                        <Grid divided='vertically'>
                            <PersonalInformation graduate={graduate} />
                        </Grid>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen(false)} basic >
                            Atras
                        </Button>
                        {graduate.Linkedin ?
                            <Button color='linkedin'>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                            :
                            <Button disabled color='linkedin'>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                        }
                    </Modal.Actions>
                </>
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
