export const handlePending = state => {
    state.isLoading = true;
  };
  
  export const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
  };
  
  export const handleFulfilledGet = (state, {payload}) => {
    state.isLoading = false;
    state.items = payload;
    state.error = null;
  };
  
  export const handleFulfilledAdd = (state, {payload}) => {
    state.isLoading = false;
    state.items.push(payload);
    state.error = null;
  };
  
  export const handleFulfilledDelete = (state, {payload}) => {
    state.isLoading = false;
    const index = state.items.findIndex(contact => contact.id === payload);
    state.items.splice(index, 1);
    state.error = null;
  };

  export const handleFulfilledLogOut = (state) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
  };