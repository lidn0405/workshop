const url = "/api/topic"

function getTopics() {

}

function getTopic(id: number) {

}

async function getTopicFromWorkshop(id: number) {
    try {
        const res = await fetch(`${url}/${id}/all`)
        if (!res.ok) {
            throw new Error(`Response Status: ${res.status}`)
        }

        const json = await res.json();
        console.log(json);
        return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        } else {
            console.log(String(error))
        }
    }

}

export {
    getTopics,
    getTopic,
    getTopicFromWorkshop
}