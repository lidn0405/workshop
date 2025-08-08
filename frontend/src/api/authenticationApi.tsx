interface LoginCredentials {
    email: string;
    password: string;
}

const url = "/auth"

async function loginUser(credentials: LoginCredentials) {
    try {
        const res = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })

        if (!res.ok) {
            throw new Error("Login Failed");
        }
        
        return await res.json();

    } catch (error) {
        console.log("Error Loging In")
        throw(error);
    }
}

async function signupUser(credentials: LoginCredentials) {
     try {
        const res = await fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })

        if (!res.ok) {
            throw new Error("Signup Failed");
        }

        return await res.json();

    } catch (error) {
        console.log("Error Signing Up")
        throw(error);
    }
}

export {
    loginUser,
    signupUser,
}