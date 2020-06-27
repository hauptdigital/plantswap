import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { checkUserCredentials } from '../api/users';

const Login = ({ title }) => {
    const [userNameOrEmail, setUserNameOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        const loginCredentialsAreCorrect = await checkUserCredentials(user);
        if (loginCredentialsAreCorrect) {
            alert('correct');
        } else {
            alert('fail');
        }
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
