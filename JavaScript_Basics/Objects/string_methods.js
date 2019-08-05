let name = 'Prashant Brahmbhatt'

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('acsdasd123445ads'))
console.log(isValidPassword('abcjpasswordlkigur'))
