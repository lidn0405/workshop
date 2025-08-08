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
        console.log(`${url}/${id}`)
        const res = await fetch(`${url}/${id}`);

        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        // console.log(res);
        // const text = await res.text();
        // console.log(text);
        const json = await res.json();
        console.log(json);
        return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error: " + error.message);
        } else {
            console.log("Error: " + String(error));
        }
    }
}

async function getUserFromEmail(email: string) {
    try {
        const res = await fetch(`${url}/email/${email}`);
        if (!res.ok) {
            throw new Error("Could not fetch from email");
        }

        const json = await res.json();
        return json
    } catch (error) {
        console.log("Error: could not fetch from email")
        throw error;
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
    getWorkshopsFromUser,
    getUserFromEmail
}