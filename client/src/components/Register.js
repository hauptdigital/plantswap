import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

const Register = ({ title }) => {
    const [accountData, setAccountData] = React.useState({ accountName: '', email: '', password: '' });

    function handleChange(event) {
        accountData[event.target.name] = event.target.value;
        setAccountData(accountData);
    }

    return (
        <Form>
            {title}
            <Input
                type="text"
                name="accountName"
                placeholder="Mitgliedsname"
                value={accountData.accountName}
                onChange={handleChange}
            />
            <Input type="mail" name="email" placeholder="E-Mail" value={accountData.email} onChange={handleChange} />
            <Input
                type="password"
                name="password"
                placeholder="Passwort"
                value={accountData.password}
                onChange={handleChange}
            />
            <Button>Registrieren</Button>
        </Form>
    );
};

export default Register;
