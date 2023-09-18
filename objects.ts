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

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true })

// Read-only and Optional in typescript

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCard?: number; // ==> This is optional, it won't cause error even if this is not present
};

let myUser: User = {
  _id: "12345",
  name: "a",
  email: "h@a.com",
  isActive: false,
};

myUser.email = "a@a.com";
// myUser._id = "123;" ==> This will give error as _id is marked as read-only.

type cardNumber = {
    cardnumber: number
}

type cardDate = {
    cardDate: string
}


// cardDetails is of type cardNumber & cardDate
type cardDetails = cardNumber &  cardDate & {
    cvv: number 
}