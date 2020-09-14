import React from "react";
import { Icon, Grid, Header } from "semantic-ui-react";

function CoursesInformation({ graduate }) {
    return (
        <Grid.Row >
            <Grid.Column>
                <Header as='h3'> <Icon name='graduation' />Cursos Realizados</Header>
                <Grid >
                    <Grid.Row  >
                        {graduate.moduleCompleted && graduate.moduleCompleted.map(
                            (module, index) => (
                                <React.Fragment key={index}>
                                    <Grid.Column floated="right" width={11} >
                                        <Icon color='green' name='check' />{module.course}
                                    </Grid.Column>
                                    <Grid.Column floated="left" width={4} >
                                        {module.year}
                                    </Grid.Column>
                                </React.Fragment>
                            )
                        )}
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    );
}

export default CoursesInformation;
