// Returns a number
function addTwo(num: number): number {
    return num + 2;
}

addTwo(5);

const newWord: string = "Ayush"

function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    } 
    return "200 OK"
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string) => {
    return `hero is ${hero}`
})

function consoleErro(errmsg: string): void {
    console.log(errmsg);
}