import React from 'react';
import { Card, Button, Header, Icon, Modal, Form, TextArea } from 'semantic-ui-react';



const MenuItem = ({ id, name, description, price, deleteItem }) => (
  <Card color='violet'>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta>
        ${price}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Modal trigger={<Button>Edit</Button>} basic size='small'>
        <Header icon='edit' content='Edit Menu Item' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} inverted>
            <Form.Input label='Name' placeholder='Name' />
            <Form.Field control={TextArea} label='Description' placeholder='Description' />
            <Form.Input label='Price' />
            <Button color='green' inverted type='submit'>
              <Icon name='checkmark' /> Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
      <Button basic color="red" onClick={() => deleteItem(id)}>Delete</Button>
    </Card.Content>
  </Card>
)

export default MenuItem;
