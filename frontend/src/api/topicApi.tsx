const url = "/api/topic"

function getTopics() {

}

function getTopic(id: number) {

}

async function getTopicFromWorkshop(id: number) {
    try {
        const res = await fetch(`${url}/${id}/all`)
        if (!res.ok) {
            throw new Error(`Could not get topics from workshop`)
        }

        const json = await res.json();
        return json;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        } else {
            console.log(String(error))
        }
        throw error;
    }
}

async function getSubtopics(id: number) {
    try {
        const res = await fetch(`${url}/${id}/subtopics`);
        if (!res.ok) {
            throw new Error("Could not fetch subtopics")
        }

        const json = await res.json();
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
    getTopicFromWorkshop,
    getSubtopics
}