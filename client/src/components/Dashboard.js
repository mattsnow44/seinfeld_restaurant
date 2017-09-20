import React from 'react';
import MenuItem from './MenuItem';
import { Card } from 'semantic-ui-react';
import FormModal from './FormModal';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }))
  }

  deleteItem = (id) => {
  axios.delete(`api/menu_items/${id}`)
    .then( () => {
      const { menu_items } = this.state;
      this.setState({ menu_items: menu_items.filter( m => m.id !== id )})
    })
  }

  addItem = (menu_item) => {
    const { menu_items } = this.state;
    this.setState({ menu_items: [menu_item, ...menu_items] })
  }

  render() {
    const { menu_items } = this.state;
    const menuCards = menu_items.map( m => <MenuItem
                                          key={m.id}
                                          {...m}
                                          deleteItem={this.deleteItem}
                                        /> );
    return (
      <div>
        <h1>Menu</h1>
        <FormModal
          addItem={this.addItem}
        />
        <Card.Group itemsPerRow={4}>
          {menuCards}
        </Card.Group>
      </div>
    )
  }
}

export default Dashboard
