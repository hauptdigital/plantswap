import React, { useContext } from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { loginUser } from '../api/users';
import { authContext } from '../contexts/AuthContext';

const Login = ({ title }) => {
    const { setAuthData, auth } = useContext(authContext);

    const [userNameOrEmail, setUserNameOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        const token = await loginUser(user);
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
