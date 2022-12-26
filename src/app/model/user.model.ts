export class user {
    id?: number;
    name: String;
    surname: String;
    img: String;

    constructor(name: String, surname: String, img: String) {
        this.name = name;
        this.surname = surname;
        this.img = img;
    }
}