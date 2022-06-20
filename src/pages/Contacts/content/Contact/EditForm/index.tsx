import React, { ChangeEventHandler, FC, useRef, useState } from 'react'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { contactsStore } from 'stores'
import { ContactData } from 'types/core'
import {
    submitVaidatePhone,
    submitValidateName,
    validateName,
    validatePhone,
} from 'utils/validation'

import styles from './styles.module.scss'

interface EditFormProps {
    contact: ContactData
}

export const EditForm: FC<EditFormProps> = ({ contact }) => {
    const [newFirstName, setNewFirstName] = useState(contact.firstName)
    const [newLastName, setNewLastName] = useState(contact.lastName)
    const [newPhoneNumber, setNewPhoneNumber] = useState(contact.phoneNumber)

    const fileInputRef = useRef<HTMLInputElement>(null)

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

    const onClickLoadImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const onSave = () => {
        if (
            submitValidateName(newFirstName) &&
            submitValidateName(newLastName) &&
            submitVaidatePhone(newPhoneNumber)
        ) {
            contactsStore.updateContact(contact.id, {
                firstName: newFirstName,
                lastName: newLastName,
                phoneNumber: newPhoneNumber,
            })

            contactsStore.unselectContact()
        }
    }

    return (
        <div className={styles.editForm}>
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
            <div className={styles.buttons}>
                <input
                    type="file"
                    className={styles.fileInput}
                    ref={fileInputRef}
                    onChange={(event) => {
                        const files = event.target.files

                        if (files) {
                            const image = files[0]

                            const fileReader = new FileReader()

                            fileReader.onloadend = () => {
                                const result = fileReader.result as string

                                contactsStore.updateContact(contact.id, {
                                    photo: result,
                                })

                                contactsStore.unselectContact()
                            }

                            fileReader.readAsDataURL(image)
                        }
                        console.log(event.target.files)
                    }}
                />
                <Button onClick={() => contactsStore.removeContact(contact.id)}>
                    Remove
                </Button>
                <Button onClick={onClickLoadImage}>Load avatar</Button>
                <Button onClick={onSave}>Save</Button>
            </div>
        </div>
    )
}
