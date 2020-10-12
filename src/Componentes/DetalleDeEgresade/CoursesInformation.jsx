import React from "react";
import { Icon, Grid, Header } from "semantic-ui-react";
import Course from "./Course";

function CoursesInformation({ graduate }) {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as='h3'> <Icon name='graduation' />Cursos Realizados</Header>
        <Grid>
          <Grid.Row>
            <Course graduate={graduate} />
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  );
}

export default CoursesInformation;
