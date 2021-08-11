import React from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Form,
  Grid,
  GridColumn,
  Header,
  Icon,
  Item,
  ItemGroup,
  Label,
  List,
  Message,
  Segment,
  SegmentGroup,
  SegmentInline,
  Step,
  StepGroup,
  Table,
  TableHeader,
  TableRow,
} from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        {/* Headings */}
        <Header as="h1">Heading 1</Header>
        <Header as="h2">Heading 2</Header>
        <Header as="h3">Heading 3</Header>
        <Header as="h4">Heading 4</Header>
        <Header as="h5">Heading 5</Header>
        <Header as="h6">Heading 6</Header>

        {/* Buttons */}
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button positive>Button</Button>
        <Button negative>Button</Button>
        <Button color="orange">Button</Button>

        <br />

        <Button disabled={true}>Button</Button>
        <Button loading={true}>Button</Button>

        <br />

        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="big">Big</Button>
        <Button size="huge">Huge</Button>
        <Button size="massive">Massive</Button>

        <br />

        <Button basic color="blue" size="large">
          Blue Basic Button
        </Button>

        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>

        <Button animated="vertical">
          <Button.Content visible>Shopping</Button.Content>
          <Button.Content hidden>
            <Icon name="shop" />
          </Button.Content>
        </Button>

        <Button basic positive>
          <Icon name="pause" />
          Pause
        </Button>

        <Button fluid basic color="purple">
          Purple Fluid Button
        </Button>

        <Label>
          <Icon name="mail" />4 Unread
        </Label>

        <Form>
          <Form.Field inline>
            <input type="text" placeholder="First name" />
            <Label pointing="left">Please enter a name</Label>
          </Form.Field>
        </Form>

        <List>
          <List.Item>Apple</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>

        <List link>
          <List.Item active>Apple</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>

        <List celled horizontal>
          <List.Item>Apple</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>

        <br />

        <Form>
          <Form.Field>
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </Form.Field>
          <Form.Field inline>
            <Checkbox />
            <label>I agree to the terms of service</label>
          </Form.Field>
          <Button basic color="blue" fluid>
            Submit
          </Button>
        </Form>

        <br />

        <Form>
          <Form.Field inline>
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </Form.Field>
          <Form.Field inline>
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </Form.Field>
          <Form.Field inline>
            <Checkbox />
            <label>I agree to the terms of service</label>
          </Form.Field>
          <Button basic color="blue" fluid>
            Submit
          </Button>
        </Form>

        <Segment placeholder>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  placeholder="Password"
                />
                <Button content="Login" primary basic />
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Button icon="signup" content="Sign up" size="big" />
            </Grid.Column>
          </Grid>
        </Segment>

        <Table celled>
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <th>
                <Label>Cell</Label>
              </th>
              <th>Cell</th>
              <th>Cell</th>
            </TableRow>
            <TableRow positive>
              <th>Cell</th>
              <th>Cell</th>
              <th>Cell</th>
            </TableRow>
            <TableRow negative>
              <th>Cell</th>
              <th>Cell</th>
              <th>Cell</th>
            </TableRow>
            <TableRow>
              <th>Cell</th>
              <th>Cell</th>
              <th>Cell</th>
            </TableRow>
          </tbody>
        </Table>

        {/* UI Segment */}
        <Segment>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, nostrum sequi ad perspiciatis expedita facere sunt
            mollitia recusandae velit voluptatem quidem quisquam tenetur
            possimus iure corrupti repudiandae quis? Quisquam, perspiciatis.
          </p>
        </Segment>
        <Segment raised>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, nostrum sequi ad perspiciatis expedita facere sunt
            mollitia recusandae velit voluptatem quidem quisquam tenetur
            possimus iure corrupti repudiandae quis? Quisquam, perspiciatis.
          </p>
        </Segment>
        <Segment stacked>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, nostrum sequi ad perspiciatis expedita facere sunt
            mollitia recusandae velit voluptatem quidem quisquam tenetur
            possimus iure corrupti repudiandae quis? Quisquam, perspiciatis.
          </p>
        </Segment>
        <Segment piled>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, nostrum sequi ad perspiciatis expedita facere sunt
            mollitia recusandae velit voluptatem quidem quisquam tenetur
            possimus iure corrupti repudiandae quis? Quisquam, perspiciatis.
          </p>
        </Segment>

        <SegmentGroup>
          <Segment color="orange">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eaque illo mollitia, delectus eius repellendus asperiores suscipit,
            voluptatibus ullam amet odio, aut blanditiis. Eligendi quidem
            aliquam eum, corporis accusantium maxime.
          </Segment>
          <Segment color="purple" inverted>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eaque illo mollitia, delectus eius repellendus asperiores suscipit,
            voluptatibus ullam amet odio, aut blanditiis. Eligendi quidem
            aliquam eum, corporis accusantium maxime.
          </Segment>
        </SegmentGroup>

        {/* Steps */}
        <StepGroup>
          <Step>
            <Icon name="truck" />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>
                Enter shipping information here
              </Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>
                Enter shipping information here
              </Step.Description>
            </Step.Content>
          </Step>

          <Step disabled>
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>
                Enter shipping information here
              </Step.Description>
            </Step.Content>
          </Step>
        </StepGroup>

        {/* Card */}
        <Card>
          <Card.Content>
            <Card.Header>Shipping</Card.Header>
            <Card.Meta>Choose your shipping options</Card.Meta>
          </Card.Content>
          <Card.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, sit est ratione amet, praesentium quos excepturi
              suscipit eum, assumenda corrupti odit delectus! At mollitia,
              fugiat eius fuga harum vel porro!
            </p>
          </Card.Content>
          <Card.Content>
            <Button basic>Orange</Button>
          </Card.Content>
        </Card>

        {/* Items */}
        <ItemGroup>
          <Item>
            <Item.Image>
              <img src="https://semantic-ui.com/images/wireframe/image.png" />
            </Item.Image>
            <Item.Content>
              <Item.Header>Header</Item.Header>
              <Item.Meta>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                quidem, blanditiis inventore animi consectetur voluptas ducimus
                facere quae nostrum quaerat eligendi facilis officiis iure
                nulla, modi repudiandae ullam ipsam cupiditate.
              </Item.Meta>
              <Item.Description>Description Info</Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image>
              <img src="https://semantic-ui.com/images/wireframe/image.png" />
            </Item.Image>
            <Item.Content>
              <Item.Header>Header</Item.Header>
              <Item.Meta>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                quidem, blanditiis inventore animi consectetur voluptas ducimus
                facere quae nostrum quaerat eligendi facilis officiis iure
                nulla, modi repudiandae ullam ipsam cupiditate.
              </Item.Meta>
              <Item.Description>Description Info</Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image>
              <img src="https://semantic-ui.com/images/wireframe/image.png" />
            </Item.Image>
            <Item.Content>
              <Item.Header>Header</Item.Header>
              <Item.Meta>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                quidem, blanditiis inventore animi consectetur voluptas ducimus
                facere quae nostrum quaerat eligendi facilis officiis iure
                nulla, modi repudiandae ullam ipsam cupiditate.
              </Item.Meta>
              <Item.Description>Description Info</Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </ItemGroup>

        <Grid>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
          <GridColumn>
            <Button basic color="orange" />
          </GridColumn>
        </Grid>

        <Grid columns={4}>
          <GridColumn>
            <Button color="blue" basic fluid />
          </GridColumn>
          <GridColumn>
            <Button color="blue" basic fluid />
          </GridColumn>
          <GridColumn>
            <Button color="blue" basic fluid />
          </GridColumn>
          <GridColumn>
            <Button color="blue" basic fluid />
          </GridColumn>
        </Grid>

        <Grid>
          <GridColumn floated="left">
            <Button color="purple" basic fluid />
          </GridColumn>
          <GridColumn floated="right">
            <Button color="purple" basic fluid />
          </GridColumn>
        </Grid>

        <Container>
          <Header as="h2">Content</Header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            incidunt in voluptatum sequi doloremque at hic. Saepe ratione quas
            laudantium voluptatem, ipsa tenetur tempore, recusandae est deserunt
            dolores iusto doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, velit
            quia! Accusamus, beatae quis. Illo blanditiis iusto soluta excepturi
            sequi, placeat labore quas deserunt quis reprehenderit quod nisi,
            ipsum sint?
          </p>
        </Container>

        <div>
          <Container textAlign="left">
            <Header as="h1">Content Left</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
              id ratione tempore odit neque dicta aperiam, quia alias inventore
              eligendi quasi rerum at accusantium consequuntur quam ducimus
              maiores veniam.
            </p>
          </Container>
          <Container textAlign="center">
            <Header as="h1">Content Center</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
              id ratione tempore odit neque dicta aperiam, quia alias inventore
              eligendi quasi rerum at accusantium consequuntur quam ducimus
              maiores veniam.
            </p>
          </Container>
          <Container textAlign="right">
            <Header as="h1">Content Right</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
              id ratione tempore odit neque dicta aperiam, quia alias inventore
              eligendi quasi rerum at accusantium consequuntur quam ducimus
              maiores veniam.
            </p>
          </Container>

          <Container textAlign="justified">
            <Header as="h1">Content Justified</Header>
            <Divider />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              voluptatum corrupti, obcaecati voluptas laudantium aperiam labore
              exercitationem dignissimos excepturi, quae delectus nesciunt odit
              dolores voluptatem ad expedita! Inventore, ad eveniet.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              totam praesentium dolorum repellendus harum, culpa, voluptates
              doloribus distinctio quae aliquam corporis possimus tempora ea vel
              perspiciatis! Omnis corporis voluptatem iure.
            </p>
          </Container>
        </div>

        <Message>
          <Header>Some message</Header>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            itaque porro enim, laborum repellat inventore dolorem officia
            aspernatur dignissimos modi qui excepturi earum rerum. Voluptatum
            ipsa explicabo nemo veniam sit!
          </p>
        </Message>

        <Message success>
          <Header>Some message</Header>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            itaque porro enim, laborum repellat inventore dolorem officia
            aspernatur dignissimos modi qui excepturi earum rerum. Voluptatum
            ipsa explicabo nemo veniam sit!
          </p>
        </Message>

        <Message error>
          <Header>Some message</Header>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            itaque porro enim, laborum repellat inventore dolorem officia
            aspernatur dignissimos modi qui excepturi earum rerum. Voluptatum
            ipsa explicabo nemo veniam sit!
          </p>
        </Message>

        <Message color="purple">
          <Header>Some message</Header>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            itaque porro enim, laborum repellat inventore dolorem officia
            aspernatur dignissimos modi qui excepturi earum rerum. Voluptatum
            ipsa explicabo nemo veniam sit!
          </p>
        </Message>
      </Container>
    </div>
  );
}

export default App;
