import React from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }))
  }

  render() {
    const { menu_items } = this.state;
    const menuCards = menu_items.map( m => <MenuItem
                                          key={m.id}
                                          {...m}
                                        /> );
    return (
      <div>
        {menuCards}
      </div>
    )
  }
}

export default Dashboard
