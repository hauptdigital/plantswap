export function registerUser(user) {
    return fetch(`/api/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => response.json());
}

export function checkUserCredentials(user) {
    return fetch(`/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => response.json());
}
