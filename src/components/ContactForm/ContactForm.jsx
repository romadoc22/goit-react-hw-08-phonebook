import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = ({onSave}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSabmit = (e) => {
      e.preventDefault();
      
      const form = e.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      
      if (contacts.items.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
          return;
    };

  dispatch(addContact({ name, number: number }));
      form.reset();
      onSave()
    };  

    return (
        <form className={css.form} onSubmit={handleSabmit}>
          <h2 className={css.title}>Add new contact!</h2>
            <label className={css.label}>
              Name
            <input className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            </label>
            
           
            <label className={css.label}>
              Number
              <input className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </label>
            
            
            <button className={css.button} type='submit'>Add contact</button>
          </form>
    )
};

export default ContactForm;