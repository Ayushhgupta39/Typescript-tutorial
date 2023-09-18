let score: number | string | boolean = 33;

score = "Thirty";

score = true;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string
    id: number
}

let ayush: User | Admin = { name: "Ayush", id: 334 }

ayush = { username: "hc", id: 334 }

function getDbId (id: number | string) {
    console.log(`DB id is: ${id}`);
    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        id + 2;
    }
}

const data: number[] = [1, 2, 3]
const data2: string[] | number[] = ["1", "2", "3"]

const data3: (string | number)[] = ["1", 2, "3"];

// pi is strictly assigned to 3.14 and can never be changed
let pi:3.14 = 3.14;

