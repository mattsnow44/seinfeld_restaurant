import React from 'react';
import { Card, Button, Header, Icon, Modal, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';

class FormModal extends React.Component {
  state = { name: '', description: '', price: '' }

  setValue = (e) => {
  const { id, value } = e.target;
  this.setState({[id]: value})
}

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price } = this.state
    axios.post('/api/menu_items', { menu_item: {name, description, price}})
      .then( res => {
        this.props.addItem(res.data)
        this.setState({ name: '', description: '', price: '' })
      })
  }

  render() {
    const { name, description, price } = this.state
    return(
      <Modal trigger={<Button>New Item</Button>} basic size='small'>
        <Header icon='write' content='New Menu Item' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} inverted>
            <Form.Input
              label='Name'
              value={name}
              id='name'
              placeholder='Name'
              onChange={this.setValue}
            />
            <Form.Field
              control={TextArea}
              value={description}
              id='description'
              label='Description'
              placeholder='Description'
              onChange={this.setValue}
            />
            <Form.Input
              label='Price'
              value={price}
              id='price'
              onChange={this.setValue}
            />
            <Button color='green' inverted type='submit'>
              <Icon name='checkmark' /> Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default FormModal;
