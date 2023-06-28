import { useSelector } from "react-redux";
import ContactListItem from "components/ContactListItem/ContactListItem";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import css from './ContactList.module.css'

const getFilteredContacts = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact => 
      contact.name.toLowerCase().includes(normilizedFilter));
    };

const ContactList = () => {    
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
  
    const visibleContacts = getFilteredContacts(contacts, filter);
    
    return (
        <ul className={css.list}>
            {visibleContacts.map(({ name, number, id }) => (
              <li key={id}>
                <ContactListItem 
                name={name}
                number={number}
                id={id}
                 />
              </li>
            ))}
        </ul>
    )
};

export default ContactList;
