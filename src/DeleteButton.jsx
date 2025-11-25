import React from 'react';
import styles from './DeleteButton.module.css';

const DeleteButton = ({ onClick }) => {
    return (
        <button className={styles.delete} onClick={onClick}>
            Delete
        </button>
    );
};
export default DeleteButton;
