import { makeAutoObservable } from 'mobx'
import {
    AddingContactData,
    ContactData,
    DataToStore,
    FiltersData,
    ID,
    Ordering,
} from 'types/core'
import { mock } from 'utils/mock'

const CONTACTS_FIELD = 'contacts'

export class ContactsStore {
    private nextId: ID = 1
    public contacts: ContactData[] = []
    public filters: FiltersData = {
        pattern: '',
        ordering: Ordering.Alphabet,
    }
    public isSelectedAdding: boolean = false
    public selectedContact: ID | null = null

    public get displayContacts() {
        let finded = [...this.contacts]

        const pattern = this.filters.pattern
        if (pattern !== '') {
            finded = finded.filter(
                (contact) =>
                    contact.firstName.match(pattern) ||
                    contact.lastName.match(pattern)
            )
        }

        finded = finded.sort((a, b) => {
            const aText = a.firstName + ' ' + a.lastName
            const bText = b.firstName + ' ' + b.lastName

            const compare = aText.localeCompare(bText, undefined)

            return this.filters.ordering === Ordering.Alphabet
                ? compare
                : -compare
        })

        return finded
    }

    constructor() {
        makeAutoObservable(this)
    }

    public init() {
        this.load()
    }

    public clean() {
        this.save()
    }

    public setFilters(filters: Partial<FiltersData>) {
        this.filters = {
            ...this.filters,
            ...filters,
        }
    }

    public selectContact(id: ID) {
        this.isSelectedAdding = false
        this.selectedContact = id
    }

    public unselectContact() {
        this.selectedContact = null
    }

    public selectAdding() {
        this.selectedContact = null
        this.isSelectedAdding = true
    }

    public unselectAdding() {
        this.isSelectedAdding = false
    }

    public addContact(data: AddingContactData) {
        const newContact: ContactData = {
            id: this.nextId,
            ...data,
        }

        this.contacts.push(newContact)
        this.nextId++

        this.save()
    }

    public updateContact(id: ID, data: Partial<AddingContactData>) {
        const findedIndex = this.findContactIndexById(id)

        if (findedIndex !== -1) {
            this.contacts[findedIndex] = {
                ...this.contacts[findedIndex],
                ...data,
            }

            this.save()
        }
    }

    public removeContact(id: ID) {
        const findedIndex = this.findContactIndexById(id)

        if (findedIndex !== -1) {
            this.contacts.splice(findedIndex, 1)

            this.save()
        }
    }

    private findContactIndexById(id: ID) {
        return this.contacts.findIndex((contact) => contact.id === id)
    }

    private save() {
        const saveData: DataToStore = {
            contacts: this.contacts,
            nextId: this.nextId,
        }

        const encoded = JSON.stringify(saveData)

        localStorage.setItem(CONTACTS_FIELD, encoded)
    }

    private load() {
        const encoded = localStorage.getItem(CONTACTS_FIELD)

        if (encoded) {
            try {
                const decoded = JSON.parse(encoded) as DataToStore

                this.contacts = decoded.contacts
                this.nextId = decoded.nextId
            } catch (err) {}
        } else {
            this.contacts = mock.contacts
            this.nextId = mock.nextId

            this.save()
        }
    }
}
