export type ID = number
export type PhoneNumber = string

export interface ContactData {
    id: ID
    firstName: string
    lastName: string
    phoneNumber: PhoneNumber
    photo?: string
}

export type AddingContactData = Omit<ContactData, 'id'>

export interface DataToStore {
    contacts: ContactData[]
    nextId: ID
}

export enum Ordering {
    Alphabet,
    Reverse,
}

export interface FiltersData {
    pattern: string
    ordering: Ordering
}
