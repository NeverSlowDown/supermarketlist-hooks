const getList = () => {
  return JSON.parse(localStorage.getItem('listItems')) || [];
};

export const getListItems = () => {
  return new Promise((resolve) => {
    resolve(getList());
  });
};

export const addItem = (item) => {
  return new Promise((resolve) => {
    const List = getList().concat(item);
    localStorage.setItem('listItems', JSON.stringify(List));
    resolve(item);
  });
};

export const removeItem = (value) => {
  const item = getList().find(i => i.id === value.id);
  return new Promise((resolve) => {
    const newList = getList().filter(i => i.id !== value.id);
    localStorage.setItem('listItems', JSON.stringify(newList));
    resolve(item);
  });
};
