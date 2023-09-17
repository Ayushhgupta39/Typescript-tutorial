// const User = {
//     name: "hitesh",
//     email: "abc@gmail.com",
//     isActive: true,
// }

// function createUser ({ name: string, isActive: boolean }) {}

// let newUser = { name: "ayush", isActive: true, email: "abc@xyz.com" };

// createUser(newUser);

// function createCourse():{} {
//     return {}
// }

// ***** Type Aliases in Typescript *****

type User = {
    name: string,
    email: string,
    isActive: boolean,
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true })