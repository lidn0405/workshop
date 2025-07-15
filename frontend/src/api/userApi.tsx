
const BASE_URL = '/api/users'

async function getUsers() {
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        const json = await res.json();
        console.log(json);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}

export {
    getUsers,
}