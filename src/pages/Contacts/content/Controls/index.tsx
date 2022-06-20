import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { contactsStore } from 'stores'
import { Ordering } from 'types/core'

import styles from './styles.module.scss'

export const Controls = observer(() => {
    return (
        <div className={styles.container}>
            <Input
                placeholder="Search by names"
                value={contactsStore.filters.pattern}
                onChange={(event) => {
                    contactsStore.setFilters({
                        pattern: event.target.value,
                    })
                }}
            />
            <Button
                isActive={contactsStore.filters.ordering === Ordering.Alphabet}
                onClick={() => {
                    contactsStore.setFilters({
                        ordering: Ordering.Alphabet,
                    })
                }}
            >
                A-Z
            </Button>
            <Button
                isActive={contactsStore.filters.ordering === Ordering.Reverse}
                onClick={() => {
                    contactsStore.setFilters({
                        ordering: Ordering.Reverse,
                    })
                }}
            >
                Z-A
            </Button>
        </div>
    )
})
