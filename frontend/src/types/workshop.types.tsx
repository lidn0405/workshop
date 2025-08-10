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
    workshopId: number;
    parentId: number;
}

export type {
    Workshop,
    User,
    Topic,
}