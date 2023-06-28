import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';
import { handleFulfilledAdd, handleFulfilledDelete, handleFulfilledGet, handleFulfilledLogOut, handlePending, handleRejected } from './handlers';
import { logOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers:
    builder => {
        builder
        .addCase(getContacts.pending, handlePending)
        .addCase(getContacts.fulfilled, handleFulfilledGet)
        .addCase(getContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleFulfilledDelete)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(logOut.fulfilled, handleFulfilledLogOut)
      }
});

export const contactsReducer = contactSlice.reducer;