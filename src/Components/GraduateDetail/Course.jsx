import React from 'react'
import { Icon, Grid } from "semantic-ui-react";

const Course = ({ graduate }) => {
  return (
    <>
      <Grid.Column floated="right" width={11}>
        <Icon color='green' name='check' />{graduate.modulo}
      </Grid.Column>
      <Grid.Column floated="left" width={4}>
        {graduate.añoGraduacion}
      </Grid.Column>
    </>
  )
}

export default Course
