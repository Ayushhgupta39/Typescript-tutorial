class user {
    protected _courseCount = 1;
    
    public email: string
    name: string
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name 
        this.city = "kanpur"
    }

    getAppleEmail(): string {
        return `apple${this.email}`
    }

    setcourseCount (courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends user {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4;
    }
}
