export function classes(classNames: (string | null | undefined)[]): string {
    return classNames.filter((className) => !!className).join(' ')
}
