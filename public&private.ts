class User {
    public email: string
    name: string
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name 
        this.city = "kanpur"
    }
}

const hitesh = new User("agc@email.com", "hitesh")
