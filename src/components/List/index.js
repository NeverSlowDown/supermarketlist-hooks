import React, { useState, useEffect, useRef } from 'react';
import ListItem from './item';
import * as myApi from '../../api';
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

  // this only happens the first time
  useEffect(() => {
    myApi.getListItems().then((myList) => {
      setBasketItem(myList);
      setCount(myList.length);
    });
  }, []);

  const handlerAddValidation = (e) => {
    setValid(e.target.value !== '');
  };

  const handlerAddItem = () => {
    const newItem = {
      id: count + 1,
      name: inputEl.current.value,
    };
    return valid && myApi.addItem(newItem).then((item) => {
      setBasketItem([...basketItem, item]);
      inputEl.current.value = '';
    });
  };

  const handlerDelete = (value) => {
    return myApi.removeItem(value).then((item) => {
      setBasketItem(basketItem.filter(i => i.id !== parseInt(item.id, 10)));
    });
  };

  const handleModal = () => {
    return modal ? setModal(false) : setModal(true);
  };

  useEffect(() => {
    setValid(false);
  }, [modal, basketItem]);

  useEffect(() => {
    setCount(count + basketItem.length);
  }, [basketItem]);

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
