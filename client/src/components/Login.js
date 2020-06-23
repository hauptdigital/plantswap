import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

const Login = ({ title }) => (
    <Form>
        {title}
        <Input type="text" placeholder="Mitgliedsname oder E-Mail" />
        <Input type="password" placeholder="Passwort" />
        <Button>Einloggen</Button>
    </Form>
);

export default Login;
