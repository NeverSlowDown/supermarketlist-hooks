import React, { useState } from 'react';
import ListItem from './item';
import {
  ListContainer,
  ListHeader,
  ListTitle,
  ListSubtitle,
  ListButton,
  ListItemsContainer,
  AddItemContainer,
  AddItemInput,
  AddItemCancel,
  AddItemTitle,
  AddItemConfirm,
  AddItemButtons,
} from './styled';

const List = () => {
  const [count, setCount] = useState(0);
  const [basketItem, setBasketItem] = useState([
    {
      name: 'beer',
      id: count
    },
    {
      name: 'hola',
      id: count
    },
  ]);

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>
            Supermarket List
        </ListTitle>
        <ListSubtitle>
          {basketItem.length} items
          {/* 3 items */}
        </ListSubtitle>
      </ListHeader>

      <ListItemsContainer>
        {Object.keys(basketItem).map(key => (
          <ListItem
            key={basketItem[key].id}
            name={basketItem[key].name}
          />
        ))}

      </ListItemsContainer>

      <ListButton>
        Add item
      </ListButton>


      <AddItemContainer>
        <AddItemTitle>
          Add Item
        </AddItemTitle>
        <AddItemInput type="text" />
        <AddItemButtons>
          <AddItemCancel>
            Cancel
          </AddItemCancel>
          <AddItemConfirm>
            Add
          </AddItemConfirm>
        </AddItemButtons>
        
      </AddItemContainer>
    </ListContainer>
  );
};

export default List;
