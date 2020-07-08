import React, { useContext } from 'react';
import Form from './elements/Form';
import Input from './elements/Input';
import Button from './elements/Button';
import { loginUser } from '../api/users';
import { authContext } from '../contexts/AuthContext';

const Login = ({ title }) => {
    const { setAuthData } = useContext(authContext);

    const [userNameOrEmail, setUserNameOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleButtonClick(user) {
        const userName = await loginUser(user);
        if (userName) {
            setAuthData(userName);
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
