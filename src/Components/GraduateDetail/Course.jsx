import React from 'react'
import { Icon, Grid } from "semantic-ui-react";

const Course = ({module}) => {
  return (
    <>
      <Grid.Column floated="right" width={11}>
        <Icon color='green' name='check'/>{module.course}
      </Grid.Column>
      <Grid.Column floated="left" width={4}>
        {module.year}
      </Grid.Column>
    </>
  )
}

export default Course
