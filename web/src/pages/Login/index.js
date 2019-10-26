import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  StyledLogo,
  StyledInput,
  Form,
  StyledButton,
  StyledLink,
  Container,
  LinkLabel
} from './styles';
import { acAuthRequest } from '~/redux/actions/auth';
import history from '~/services/history';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});
const Login = () => {
  const isQuering = useSelector(({ auth: { isLoading } }) => isLoading);
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(acAuthRequest(data.email, data.password));
  };
  const navigateToRegister = () => {
    history.push('signup');
  };
  return (
    <Container>
      <StyledLogo />
      <Form schema={schema} onSubmit={handleSubmit}>
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
        <StyledButton type="submit" isLoading={isQuering} label="Entrar" />
        <StyledLink onClick={navigateToRegister}>
          <LinkLabel highlight={false}>Criar conta grátis</LinkLabel>
        </StyledLink>
      </Form>
    </Container>
  );
};

export default Login;
