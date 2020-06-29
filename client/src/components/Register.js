import React, { useContext } from 'react';
import Form from './elements/Form';
import Input from './elements/Input';
import Button from './elements/Button';
import { registerUser, loginUser } from '../api/users';
import { authContext } from '../contexts/AuthContext';

const Register = ({ title }) => {
    const { setAuthData } = useContext(authContext);
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        await registerUser(user);
        const token = await loginUser({ userNameOrEmail: userName, password: password });
        if (token) {
            setAuthData(token);
        } else {
            setAuthData(null);
        }
    }

    return (
        <Form>
            {title}
            <Input
                type="text"
                name="Name"
                placeholder="Mitgliedsname"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <Input
                type="mail"
                name="email"
                placeholder="E-Mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                type="password"
                name="password"
                placeholder="Passwort"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={() => handleButtonClick({ userName: userName, email: email, password: password })}>
                Registrieren
            </Button>
        </Form>
    );
};

export default Register;
