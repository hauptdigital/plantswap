import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

const Register = ({ title }) => {
    const [accountName, setAccountName] = React.useState('');
    const [accountEmail, setAccountEmail] = React.useState('');
    const [accountPassword, setAccountPassword] = React.useState('');

    return (
        <Form>
            {title}
            <Input
                type="text"
                name="accountName"
                placeholder="Mitgliedsname"
                value={accountName}
                onChange={(event) => setAccountName(event.target.value)}
            />
            <Input
                type="mail"
                name="email"
                placeholder="E-Mail"
                value={accountEmail}
                onChange={(event) => setAccountEmail(event.target.value)}
            />
            <Input
                type="password"
                name="password"
                placeholder="Passwort"
                value={accountPassword}
                onChange={(event) => setAccountPassword(event.target.value)}
            />
            <Button>Registrieren</Button>
        </Form>
    );
};

export default Register;
