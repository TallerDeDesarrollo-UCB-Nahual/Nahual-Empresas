import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

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
            <h1>Esto es un modal, y el graduado es {graduate.name}</h1>
        </Modal>
    )
}

export default GraduateDetail
