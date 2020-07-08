import React, { useContext } from 'react';
import Button from './elements/Button';
import { authContext } from '../contexts/AuthContext';
import Form from './elements/Form';
import { logoutUser } from '../api/users';

function Logout() {
    const { setAuthData } = useContext(authContext);
    function handleButtonClick() {
        setAuthData(null);
        logoutUser();
    }
    return (
        <Form>
            <Button onClick={() => handleButtonClick()}>Ausloggen</Button>
        </Form>
    );
}

export default Logout;
