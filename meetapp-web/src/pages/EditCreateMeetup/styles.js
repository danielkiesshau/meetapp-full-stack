import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { Input, TextArea, Button } from '~/components';

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const StyledTextArea = styled(TextArea)`
  height: 200px;
  margin-bottom: 10px;
  resize: vertical;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledButton = styled(Button)`
  width: 180px;
  align-self: flex-end;
`;
