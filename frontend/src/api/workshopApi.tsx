const url = 'api/workshops'

async function getWorkshops() {
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

async function getWorkshop(id : number) {
    try {
        const res = await fetch(`${url}/${id}`);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        
        const json = await res.json();
        console.log(json)
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