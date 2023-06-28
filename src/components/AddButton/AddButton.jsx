import { BsPersonFillAdd } from 'react-icons/bs';
import css from './AddButton.module.css'

const AddButton = ({onClick}) => {
    return (
        <button className={css.button} 
            type="button" 
            onClick={onClick} 
            aria-label="Add contact">
                <BsPersonFillAdd fill='white' />
        </button>
    )
};

export default AddButton;