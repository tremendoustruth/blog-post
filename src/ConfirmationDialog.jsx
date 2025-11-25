import React, { useEffect, useRef } from 'react';
import styles from './ConfirmationDialog.module.css';
import { FocusTrap } from 'focus-trap-react';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, closeDialog }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.focus();
            dialogRef.current?.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    closeDialog();
                }
            })
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <FocusTrap>
            <div className={styles.overlay} onClick={onClose}>
                <div
                    className={styles.dialog}
                    role="dialog"
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                    ref={dialogRef}
                    tabIndex="-1"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className={styles.title} id="dialog-title">Confirm Deletion</h2>
                    <p className={styles.description} id="dialog-description">Are you sure you want to delete this post?</p>
                    <div className={styles.buttons}>
                        <button className={styles.cancel} onClick={onClose}>Cancel</button>
                        <button className={styles.delete} onClick={onConfirm}>Delete</button>
                    </div>
                </div>
            </div>
        </FocusTrap>
    );
};

export default ConfirmationDialog;
