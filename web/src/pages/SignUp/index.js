import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  StyledLogo,
  StyledInput,
  Form,
  StyledButton,
  StyledLink,
  Container
} from './styles';
import { acAuthRegister } from '../../redux/actions/auth';
import { LinkLabel } from '../Login/styles';
import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

const SignUp = () => {
  const isQuering = useSelector(({ auth: { isLoading } }) => isLoading);
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(acAuthRegister(data.name, data.email, data.password));
  };
  const navigateToLogin = () => {
    history.push('/');
  };
  return (
    <Container>
      <StyledLogo />
      <Form schema={schema} onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          type="text"
          placeholder="Digite seu nome completo"
        />
        <StyledInput
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <StyledInput
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <StyledButton type="submit" isLoading={isQuering} label="Criar conta" />
        <StyledLink onClick={navigateToLogin}>
          <LinkLabel highlight={false}>Já tenho login</LinkLabel>
        </StyledLink>
      </Form>
    </Container>
  );
};

export default SignUp;
