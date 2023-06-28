import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk('contacts/fetchContacts', async (_, {rejectWithValue}) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({ name, number }, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/contacts', { name, number });
        console.log(data)
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, {rejectWithValue}) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return rejectWithValue(error);
    }
});