import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Page } from 'layout/Page'
import { Contact } from './content/Contact'
import { AddButton } from './content/AddButton'
import { Controls } from './content/Controls'
import { contactsStore } from 'stores'

import styles from './styles.module.scss'

export const ContactsPage = observer(() => {
    useEffect(() => {
        document.title = 'Contacts'

        contactsStore.init()
    }, [])

    return (
        <Page>
            <h2 className={styles.title}>Contacts</h2>

            <Controls />

            <AddButton />

            {contactsStore.displayContacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </Page>
    )
})
