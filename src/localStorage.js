export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState).tasks;
  } catch (err) { return undefined; }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
    // eslint-disable-next-line no-console
  } catch (err) { console.log(err); }
};
