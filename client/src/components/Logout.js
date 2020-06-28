import React, { useContext } from 'react';
import Button from './Button';
import { authContext } from '../contexts/AuthContext';
import Form from './Form';

function Logout() {
    const { setAuthData } = useContext(authContext);
    function handleButtonClick() {
        setAuthData(null);
    }
    return (
        <Form>
            <Button onClick={() => handleButtonClick()}>Ausloggen</Button>
        </Form>
    );
}

export default Logout;
