interface Workshop {
    id: number;
    name: string;
    subject: string;
    description: string;
    lead: User;
}

interface User {
    id: number;
    name: String;
    email: String;
    password: String;
}

export type {
    Workshop,
    User
}