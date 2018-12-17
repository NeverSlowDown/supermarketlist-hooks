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
  AddItemModal,
} from './styled';

const List = () => {
  const [count, setCount] = useState(0);
  const [basketItem, setBasketItem] = useState([]);
  const [valid, setValid] = useState(false);
  const inputEl = useRef(null);
  const [modal, setModal] = useState(false);

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
  };

  const handlerDelete = (e) => {
    setBasketItem(basketItem.filter(item => item.id != e.target.value));
  };

  const handleModal = () => {
    return modal ? setModal(false) : setModal(true);
  };

  useEffect(() => {
    setValid(false);
  }, [modal, basketItem]);

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>
            Supermarket List
        </ListTitle>
        <ListSubtitle>
          {basketItem.length} items
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

      <ListButton onClick={handleModal}>
        Add item
      </ListButton>

      {modal && (
        <AddItemModal>
          <AddItemContainer>
            <AddItemTitle>
              Add Item
            </AddItemTitle>
            <AddItemInput type="text" ref={inputEl} onChange={handlerAddValidation} />
            <AddItemButtons>
              <AddItemCancel onClick={handleModal}>
                Cancel
              </AddItemCancel>
              <AddItemConfirm onClick={handlerAddItem} active={valid}>
                Add
              </AddItemConfirm>
            </AddItemButtons>
          </AddItemContainer>
        </AddItemModal>
      )}
    </ListContainer>
  );
};

export default List;
