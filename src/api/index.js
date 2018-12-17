const getList = () => {
  return JSON.parse(localStorage.getItem('listItems'));
};

export const getListItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => (
      resolve(getList())
    ), 2500);
  });
};

export const addItem = (item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const List = getList().concat(item);
      localStorage.setItem('listItems', JSON.stringify(List));
      resolve(item);
    }, 2500);
  });
};

export const removeItem = (itemId) => {
  const item = getList().find(i => i.id === itemId);
  return new Promise((resolve) => {
    setTimeout(() => {
      const newList = getList().filter(i => i.id !== itemId);
      localStorage.setItem('listItems', JSON.stringify(newList));
      resolve(item);
    }, 2500);
  });
};
