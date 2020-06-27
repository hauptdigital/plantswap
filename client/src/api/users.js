export function registerUser(user) {
    return fetch(`/api/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => response.json());
}

export function loginUser(user) {
    return fetch(`/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => response.json());
}

export function getAuthenticatedUser() {
    return fetch(`/api/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
}
