import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const MenuItem = ({ id, name, description, price }) => (
  <Card>
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
  </Card>
)

export default MenuItem;
