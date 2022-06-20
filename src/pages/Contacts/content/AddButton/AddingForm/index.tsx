import React, { ChangeEventHandler, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { contactsStore } from 'stores'
import {
    submitVaidatePhone,
    submitValidateName,
    validateName,
    validatePhone,
} from 'utils/validation'

import styles from './styles.module.scss'

export const AddingForm = observer(() => {
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')

    const onChangeFirstName: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newName = event.target.value

        if (validateName(newName)) {
            setNewFirstName(newName)
        }
    }

    const onChangeLastName: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newName = event.target.value

        if (validateName(newName)) {
            setNewLastName(newName)
        }
    }

    const onChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const newPhone = event.target.value

        if (validatePhone(newPhone)) {
            setNewPhoneNumber(newPhone)
        }
    }

    const onAdd = () => {
        if (
            submitValidateName(newFirstName) &&
            submitValidateName(newLastName) &&
            submitVaidatePhone(newPhoneNumber)
        ) {
            contactsStore.addContact({
                firstName: newFirstName,
                lastName: newLastName,
                phoneNumber: newPhoneNumber,
            })

            contactsStore.unselectAdding()

            setNewFirstName('')
            setNewLastName('')
            setNewPhoneNumber('')
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <Input
                    placeholder="First name"
                    type="text"
                    value={newFirstName}
                    onChange={onChangeFirstName}
                />
            </div>
            <div>
                <Input
                    placeholder="Last name"
                    type="text"
                    value={newLastName}
                    onChange={onChangeLastName}
                />
            </div>
            <div>
                <Input
                    placeholder="Phone number"
                    type="text"
                    value={newPhoneNumber}
                    onChange={onChangePhoneNumber}
                />
            </div>

            <Button onClick={onAdd}>Add</Button>
        </div>
    )
})
