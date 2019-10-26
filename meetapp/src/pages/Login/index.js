import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { Container, Label } from '../../components';
import {
  StyledLogo,
  StyledInput,
  Form,
  StyledButton,
  StyledLink
} from './styles';
import { acAuthRequest } from '../../redux/actions/auth';

const Login = ({ navigation }) => {
  const isQuering = useSelector(({ auth: { isLoading } }) => isLoading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const handleSubmit = () => {
    if (email === '' || password === '') {
      Alert.alert('Informe todos os campos');
    } else {
      dispatch(acAuthRequest(email, password));
    }
  };
  const navigateToRegister = () => {
    navigation.navigate('signUp');
  };
  return (
    <Container>
      <StyledLogo />
      <Form>
        <StyledInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <StyledInput
          placeholder="Digite sua senha"
          secureTextEntry
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        <StyledButton
          isLoading={isQuering}
          label="Entrar"
          onPress={handleSubmit}
        />
        <StyledLink onPress={navigateToRegister}>
          <Label highlight={false}>Criar conta grátis</Label>
        </StyledLink>
      </Form>
    </Container>
  );
};

export default Login;
