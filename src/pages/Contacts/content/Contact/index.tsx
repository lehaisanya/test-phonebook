import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Collapsed } from 'components/Collapsed'
import { Avatar } from 'components/Avatar'
import { EditForm } from './EditForm'
import { contactsStore } from 'stores'
import { ContactData } from 'types/core'
import { ReactComponent as EditIcon } from 'icons/Edit.svg'
import { ReactComponent as UserIcon } from 'icons/User.svg'

import styles from './styles.module.scss'

interface ContactProps {
    contact: ContactData
}

export const Contact: FC<ContactProps> = observer(({ contact }) => {
    const expanded = contactsStore.selectedContact === contact.id

    const onClick = () => {
        if (expanded) {
            contactsStore.unselectContact()
        } else {
            contactsStore.selectContact(contact.id)
        }
    }

    return (
        <div>
            <div className={styles.container}>
                {contact.photo ? (
                    <Avatar className={styles.avatar} src={contact.photo} />
                ) : (
                    <Avatar className={styles.avatar}>
                        <UserIcon className={styles.icon} />
                    </Avatar>
                )}
                <div>
                    <div className={styles.contactData}>
                        {contact.firstName} {contact.lastName}
                    </div>
                    <div className={styles.phoneNumber}>
                        {contact.phoneNumber}
                    </div>
                </div>
                <div className={styles.spacer} />
                <div
                    role="button"
                    className={styles.editIconContainer}
                    onClick={onClick}
                >
                    <EditIcon className={styles.editIcon} />
                </div>
            </div>

            <Collapsed isOpen={expanded}>
                <EditForm contact={contact} />
            </Collapsed>
        </div>
    )
})
