import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { loginUser } from '../api/users';

const Login = ({ title }) => {
    const [userNameOrEmail, setUserNameOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        const isLoggedIn = await loginUser(user);
        console.log(isLoggedIn);
    }

    return (
        <Form>
            {title}
            <Input
                type="text"
                placeholder="Mitgliedsname oder E-Mail"
                value={userNameOrEmail}
                onChange={(event) => setUserNameOrEmail(event.target.value)}
            />
            <Input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={() => handleButtonClick({ userNameOrEmail: userNameOrEmail, password: password })}>
                Einloggen
            </Button>
        </Form>
    );
};

export default Login;
