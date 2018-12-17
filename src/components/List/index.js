import React, { useState, useEffect, useRef } from 'react';
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
  const [basketItem, setBasketItem] = useState([]);
  const [valid, setValid] = useState(false);
  const inputEl = useRef(null);

  const handlerAddValidation = (e) => {
    setValid(e.target.value !== '');
  };

  const handlerAddItem = () => {
    setCount(count + 1);
    const newItem = {
      id: count,
      name: inputEl.current.value,
    };
    valid && setBasketItem([...basketItem, newItem]);
    inputEl.current.value = '';
    setValid(false);
    console.log(basketItem);
  };

  const handlerDelete = (e) => {
    setBasketItem(basketItem.filter(item => item.id != e.target.value));
  }



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
            number={basketItem[key].id}
            name={basketItem[key].name}
            handlerDelete={handlerDelete}
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
        <AddItemInput type="text" ref={inputEl} onChange={handlerAddValidation} />
        <AddItemButtons>
          <AddItemCancel>
            Cancel
          </AddItemCancel>
          <AddItemConfirm onClick={handlerAddItem} active={valid}>
            Add
          </AddItemConfirm>
        </AddItemButtons>
        
      </AddItemContainer>
    </ListContainer>
  );
};

export default List;
