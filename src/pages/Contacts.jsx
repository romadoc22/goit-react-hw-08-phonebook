import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Modal from "components/Modal/Modal";
import AddButton from "components/AddButton/AddButton";
import { getContacts } from "redux/contacts/operations";

const Contacts = () => {

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])

    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <AddButton onClick={toggleModal} />
            <Filter />
            {contacts.items.length > 0 ? <ContactList /> : <div>There are no contacts...</div>}
            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <ContactForm onSave={toggleModal} />
                </Modal>
            )}
        </>
    )
};

export default Contacts;