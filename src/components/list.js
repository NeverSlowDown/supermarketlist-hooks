import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`;

const ListHeader = styled.header`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListTitle = styled.h1`
  color: #404040;
  font-weight: bold;
  font-size: 32px;
  flex: 1 1 100%;
  text-align: center;
`;

const ListSubtitle = styled.h2`
  color: #929292;
  text-transform: uppercase;
  margin-top: 10px;
`;

const ListButton = styled.button`
  background: #1da5fc;
  color: white;
  border: 1px solid #1783c8;
  border-radius: 5px;
  flex: 1 1 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 40px;
  &:hover{
    background: #1783c8;
  }
`;

const ListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  font-size: 18px;
  align-items: center;
  &:not(:first-of-type){
    margin-top: 15px;
  };
  transition: 0.3s ease;
  &:hover{
    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
  }
`;

const ListItemDelete = styled.button`
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  padding: 0;
  svg{
    fill: #bebebe;
  }
`;


const List = () => (
  <ListContainer>
    <ListHeader>
      <ListTitle>
          Supermarket List
      </ListTitle>
      <ListSubtitle>
        3 items
      </ListSubtitle>
    </ListHeader>

    <ListItemsContainer>
      <ListItem>
        Beer
        <ListItemDelete>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
          </svg>
        </ListItemDelete>
      </ListItem>

      <ListItem>
        Beer
        <ListItemDelete>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
          </svg>
        </ListItemDelete>
      </ListItem>
      

    </ListItemsContainer>

    <ListButton>
      Add item
    </ListButton>
  </ListContainer>
);

export default List;
