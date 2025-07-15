const BASE_URL = 'api/workshops'

async function getWorkshops() {
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

async function getWorkshop(id : number) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        
        const json = await res.json();
        return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}

export {
    getWorkshops,
    getWorkshop,
}