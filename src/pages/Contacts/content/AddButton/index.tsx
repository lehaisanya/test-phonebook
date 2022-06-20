import React from 'react'
import { observer } from 'mobx-react-lite'
import { Collapsed } from 'components/Collapsed'
import { Avatar } from 'components/Avatar'
import { AddingForm } from './AddingForm'
import { contactsStore } from 'stores'
import { PlusIcon } from 'icons/Plus'

import styles from './styles.module.scss'

export const AddButton = observer(() => {
    const expanded = contactsStore.isSelectedAdding

    const onClickHandler = () => {
        if (expanded) {
            contactsStore.unselectAdding()
        } else {
            contactsStore.selectAdding()
        }
    }

    return (
        <div className={styles.container}>
            <div
                role="button"
                className={styles.button}
                onClick={onClickHandler}
            >
                <Avatar className={styles.iconContainer}>
                    <PlusIcon className={styles.icon} />
                </Avatar>
                <div className={styles.buttonText}>Add new contact</div>
            </div>
            <Collapsed isOpen={expanded}>
                <AddingForm />
            </Collapsed>
        </div>
    )
})
