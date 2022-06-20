const namePattern = /^(\w| )*$/
const phonePattern = /^\+?(\d)*$/
const phoneSubmitPattern = /^(\+\d\d)?\d{10}$/

export function validateName(name: string): boolean {
    return name.match(namePattern) ? true : false
}

export function validatePhone(phone: string): boolean {
    return phone.match(phonePattern) ? true : false
}

export function submitValidateName(name: string): boolean {
    return name.trim().length !== 0 && validateName(name)
}

export function submitVaidatePhone(phone: string): boolean {
    return phone.match(phoneSubmitPattern) ? true : false
}
