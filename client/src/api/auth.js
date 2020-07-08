// Authentication

export function getAuthenticatedUser() {
    return fetch(`/api/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
}
