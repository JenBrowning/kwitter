import "../styles/MainPage.css";
import React from "react";
import { Grid, Container, Icon, Image, Card, Sticky } from "semantic-ui-react";

//changed file name and component name from messagefeed to mainfeed
class MainPage extends React.Component {
  render() {
    return (
      <Container className="container">
        <Grid className="grid" centered>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <Sticky offset={75}>
                <Card className="userprofile">
                  <Image src="./jen.jpeg" />
                  <Card.Content>
                    <Card.Header>Jen</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Hello my name is Jen</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Sticky>
            </Grid.Column>

            <Grid.Column width={8}>
              <Container className="messagefeed" />
              {/* feedgoeshere */}
            </Grid.Column>
            <Grid.Column width={3}>
              <Sticky offset={75}>{/* <CustomFooter /> */}</Sticky>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default MainPage;
