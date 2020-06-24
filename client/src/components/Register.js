import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { registerUser } from '../api/users';

const Register = ({ title }) => {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        const newUserId = await registerUser(user);
        console.log(newUserId);
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
