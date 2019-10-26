import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Label } from '../../components';
import {
  StyledLogo,
  StyledInput,
  Form,
  StyledButton,
  StyledLink
} from './styles';
import { acAuthRegister } from '../../redux/actions/auth';

const SignUp = ({ navigation }) => {
  const isQuering = useSelector(({ auth: { isLoading } }) => isLoading);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    if (email === '' || password === '' || password === '') {
      Alert.alert('Informe todos os campos');
    } else {
      dispatch(acAuthRegister(name, email, password));
    }
  };
  const navigateToLogin = () => {
    navigation.navigate('login');
  };
  return (
    <Container>
      <StyledLogo />
      <Form>
        <StyledInput
          autoCorrect={false}
          placeholder="Digite seu nome completo"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <StyledInput
          ref={emailRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <StyledInput
          ref={passwordRef}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        <StyledButton
          isLoading={isQuering}
          label="Criar conta"
          onPress={handleSubmit}
        />
        <StyledLink onPress={navigateToLogin}>
          <Label highlight={false}>Já tenho login</Label>
        </StyledLink>
      </Form>
    </Container>
  );
};

export default SignUp;
