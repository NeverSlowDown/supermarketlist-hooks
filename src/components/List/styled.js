import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
`;

export const ListHeader = styled.header`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListTitle = styled.h1`
  color: #404040;
  font-weight: bold;
  font-size: 32px;
  flex: 1 1 100%;
  text-align: center;
`;

export const ListSubtitle = styled.h2`
  color: #929292;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const ListButton = styled.button`
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

export const ListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

export const ListItem = styled.li`
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

export const ListItemDelete = styled.button`
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  padding: 0;
  svg{
    fill: #bebebe;
  }
`;

export const AddItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  width: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  margin: 20px 0;  
`;

export const AddItemTitle = styled.div`
  flex: 1 1 100%;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
`;
export const AddItemInput = styled.input`
  display: flex;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  min-height: 50px;
  flex: 1 1 100%;
  padding: 10px;
  box-sizing: border-box;
`;
export const AddItemCancel = styled.div`
  display: flex;
  border: 1px solid #cbcbcb;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: #404040;
  flex: 1;
  max-width: 125px;
  border-radius: 5px;
`;
export const AddItemConfirm = styled.div`
  display: flex;
  transition: 0.3s ease;
  background: ${props => (props.active ? '#1da5fc' : '#cbcbcb')};
  border: none;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: white;
  flex: 1;
  max-width: 125px;
  border-radius: 5px;
`;

export const AddItemButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 100%;
  margin-top: 20px;
`;