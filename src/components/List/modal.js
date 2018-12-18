import React from 'react';
import PropTypes from 'prop-types';

import {
  AddItemContainer,
  AddItemInput,
  AddItemCancel,
  AddItemTitle,
  AddItemConfirm,
  AddItemButtons,
  AddItemModal,
} from './styled';

const Modal = ({
  inputEl,
  handleAddValidation,
  handleModal,
  handleAddItem,
  valid,
}) => {
  return (
    <AddItemModal>
      <AddItemContainer>
        <AddItemTitle>
          Add Item
        </AddItemTitle>
        <AddItemInput type="text" ref={inputEl} onChange={handleAddValidation} />
        <AddItemButtons>
          <AddItemCancel onClick={handleModal}>
            Cancel
          </AddItemCancel>
          <AddItemConfirm onClick={handleAddItem} active={valid}>
            Add
          </AddItemConfirm>
        </AddItemButtons>
      </AddItemContainer>
    </AddItemModal>
  );
};


Modal.propTypes = {
  inputEl: PropTypes.object,
  handleAddValidation: PropTypes.func,
  handleModal: PropTypes.func,
  handleAddItem: PropTypes.func,
  valid: PropTypes.bool,
};

Modal.defaultProps = {
  inputEl: null,
  handleAddValidation: null,
  handleModal: null,
  handleAddItem: null,
  valid: false,
};

export default Modal;
