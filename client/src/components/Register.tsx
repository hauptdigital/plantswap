import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

type RegisterProps = {
    title: string;
};

const Register: React.FunctionComponent<RegisterProps> = ({ title }) => (
    <Form>
        {title}
        <Input type="text" placeholder="Mitgliedsname" />
        <Input type="mail" placeholder="E-Mail" />
        <Input type="password" placeholder="Passwort" />
        <Button>Registrieren</Button>
    </Form>
);

export default Register;
