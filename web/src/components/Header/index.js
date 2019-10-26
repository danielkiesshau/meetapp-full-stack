import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  StyledLogo,
  Content,
  LinkLabel,
  StyledButton
} from './styles';
import api from '~/services/api';
import { acAuthReset } from '~/redux/actions/auth';
import history from '~/services/history';

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    api.defaults.headers.Authorization = null;
    dispatch(acAuthReset());
  };
  const user = useSelector(({ auth }) => auth.user);
  return (
    <Container>
      <Content>
        <StyledLogo
          onClick={() => {
            history.push('dashboard');
          }}
        />
        <aside>
          <div>
            <strong>{user.name}</strong>
            <LinkLabel to="/profile">Meu perfil</LinkLabel>
          </div>
          <StyledButton label="Sair" color="#D44059" onClick={handleLogout} />
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
