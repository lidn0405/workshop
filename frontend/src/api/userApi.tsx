
const url = '/api/users'

async function getUsers() {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        const json = await res.json();
        console.log(json);
        // return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}

async function getUser(id: number) {
    try {
        // console.log(`${url}/${id}`)
        const res = await fetch(`${url}/${id}`);

        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        const json = await res.json();
        // console.log(json);
        return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}

async function getWorkshopsFromUser(id: number) {
    try {
        const res = await fetch(`${url}/${id}/workshops`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`)
        }
        
        const json = await res.json();
        console.log(json);
        // return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        } else {
            console.log(String(error));
        }
    }
}

export {
    getUsers,
    getUser,
    getWorkshopsFromUser
}