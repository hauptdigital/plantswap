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

export function logoutUser() {
    return fetch(`/api/users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    }).then((response) => response);
}

export function getAuthenticatedUser() {
    return fetch(`/api/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
}

export function verifyUser() {
    return fetch(`/api/auth/verify`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
}
