export const requiredField = value => {
    if (value) return undefined
    return "field is required"
}
// export const maxLength100 = value => {
//     if (value && value.length > 10)  return "max length 100"
//     return undefined
// }
export const maxLengthCreator = (maxLength) => (value) => {
    if ( value.length > maxLength)  return `max length is ${maxLength}`
    return undefined
}