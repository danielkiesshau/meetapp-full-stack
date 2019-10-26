import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../components';
import {
  StyledInput,
  Form,
  SeperatorLine,
  EmailInput,
  PageContainer,
  BtnUpdateProfile,
  BtnLogOut
} from './styles';
import { acAuthReset, acAuthRequestUpdate } from '../../redux/actions/auth';
import api from '../../services/api';

const Profile = () => {
  const isLoading = useSelector(({ auth }) => auth.isLoading);
  console.tron.log('ISLOADING', typeof isLoading);
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const handleUpdateProfile = async () => {
    await dispatch(
      acAuthRequestUpdate({
        name,
        email,
        oldPassword,
        password,
        confirmPassword
      })
    );
    setOldPassword(null);
    setPassword(null);
    setConfirmPassword(null);
  };
  const handleLogOut = () => {
    api.defaults.headers.Authorization = null;
    dispatch(acAuthReset());
  };

  return (
    <PageContainer>
      <Form>
        <StyledInput
          autoCorrect={false}
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <EmailInput
          ref={emailRef}
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => oldPasswordRef.current.focus()}
          onChangeText={setEmail}
        />
      </Form>
      <SeperatorLine />
      <Form>
        <StyledInput
          ref={oldPasswordRef}
          value={oldPassword}
          placeholder="Senha atual"
          secureTextEntry
          onSubmitEditing={() => passwordRef.current.focus()}
          onChangeText={setOldPassword}
        />
        <StyledInput
          value={password}
          placeholder="Nova senha"
          secureTextEntry
          ref={passwordRef}
          onChangeText={setPassword}
          onSubmitEditing={() => confirmPassRef.current.focus()}
        />
        <StyledInput
          ref={confirmPassRef}
          value={confirmPassword}
          placeholder="Confirmação de senha"
          secureTextEntry
          onChangeText={setConfirmPassword}
          onSubmitEditing={handleUpdateProfile}
        />
        <BtnUpdateProfile
          isLoading={isLoading}
          label="Salvar perfil"
          color="#E5556E"
          onPress={handleUpdateProfile}
        />
        <BtnLogOut
          label="Sair do meetapp"
          color="#D44059"
          onPress={handleLogOut}
        />
      </Form>
    </PageContainer>
  );
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => <Icon name="person" color={tintColor} />
};

export default Profile;
