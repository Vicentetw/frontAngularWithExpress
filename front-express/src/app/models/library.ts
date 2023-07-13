export class Library {

    id: number;
    name: string;
    location: string;
    telefono: string;
    deleted: boolean;
    constructor(
        id: number,
        name: string,
        location: string,
        telefono: string,
        deleted: boolean
    ) {
        this.id = id
        this.name = name
        this.location = location
        this.telefono = telefono
        this.deleted = deleted
    }
}


