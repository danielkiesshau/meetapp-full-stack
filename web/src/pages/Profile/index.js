import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  StyledInput,
  SeperatorLine,
  EmailInput,
  PageContainer,
  BtnUpdateProfile,
  StyledForm
} from './styles';
import { acAuthRequestUpdate } from '../../redux/actions/auth';

const Profile = () => {
  const isLoading = useSelector(({ auth }) => auth.isLoading);
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const initialData = {
    name: user.name,
    email: user.email
  };

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string(),
    oldPassword: Yup.string(),
    password: Yup.string(),
    confirmPassword: Yup.string()
  });

  const handleUpdateProfile = async data => {
    await dispatch(acAuthRequestUpdate(data));
  };

  return (
    <PageContainer>
      <StyledForm
        initialData={initialData}
        schema={schema}
        onSubmit={handleUpdateProfile}
      >
        <StyledInput name="name" />
        <EmailInput name="email" type="email" />
        <SeperatorLine />
        <StyledInput
          name="oldPassword"
          type="password"
          placeholder="Senha atual"
        />
        <StyledInput name="password" type="password" placeholder="Nova senha" />
        <StyledInput
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <BtnUpdateProfile
          isLoading={isLoading}
          label="Salvar perfil"
          type="submit"
        />
      </StyledForm>
    </PageContainer>
  );
};

export default Profile;
