import React from 'react'
import { Icon, Grid } from "semantic-ui-react";

const Curso = ({ egresade }) => {
  return (
    <>
      <Grid.Column floated="right" width={11}>
        <Icon color='green' name='check' />{egresade.module}
      </Grid.Column>
      <Grid.Column floated="left" width={4}>
        {egresade.graduationYear}
      </Grid.Column>
    </>
  )
}

export default Curso;
