interface Workshop {
    id: number;
    name: string;
    subject: string;
    description: string;
    leadId: number;
}

interface User {
    id: number;
    username: String;
    email: String;
    password: String;
}

interface Topic {
    id: number;
    name: String;
}

export type {
    Workshop,
    User,
    Topic,
}