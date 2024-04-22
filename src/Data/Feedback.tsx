class Feedback {
    public Id: number;
    public name: string;
    public email: string;
    public message: string;
    public Rating: number;
    constructor(id: number, name: string, email: string, message: string, Rating: number) {
        this.Id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.Rating = Rating;
    }
}

export { Feedback }