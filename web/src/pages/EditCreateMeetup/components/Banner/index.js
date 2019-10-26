import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { Container, StyledIcon, StyledLabel } from './style';
import api from '~/services/api';

export default function Banner() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
    return () => {};
  }, []); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="banner-img" />
        ) : (
          <>
            <StyledIcon />
            <StyledLabel>Selecionar imagem</StyledLabel>
          </>
        )}
        <input
          ref={ref}
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
