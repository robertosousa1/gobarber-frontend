import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
        <Input placeholder="Nome completo" />
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui conta?</Link>
      </Form>
    </>
  );
}
