import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

type LoginProps = {
    title: string;
};

const Login: React.FunctionComponent<LoginProps> = ({ title }) => (
    <Form>
        {title}
        <Input type="text" placeholder="Mitgliedsname oder E-Mail" />
        <Input type="password" placeholder="Passwort" />
        <Button>Einloggen</Button>
    </Form>
);

export default Login;
