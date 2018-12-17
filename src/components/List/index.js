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
  EmptyCart,
  EmptyCartContainer,
  EmptyCartTitle,
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

  const handlerDelete = (value) => {
    setBasketItem(basketItem.filter(item => item.id !== parseInt(value.id, 10)));
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
        {
          basketItem.length > 0
            ? Object.keys(basketItem).map(key => (
              <ListItem
                key={basketItem[key].id}
                number={basketItem[key].id}
                name={basketItem[key].name}
                handlerDelete={() => handlerDelete(basketItem[key])}
              />
            ))
            : (
              <EmptyCartContainer>
                <EmptyCartTitle>
                  Your cart is empty, try adding new items!
                </EmptyCartTitle>
                <EmptyCart alt="empty" src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" />
              </EmptyCartContainer>
            )
        }

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
