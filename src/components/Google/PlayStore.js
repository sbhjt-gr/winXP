import React from 'react';
import styled from 'styled-components';
import Main from './Main';
import Search from './Search';

function PlayStore({
  className,
  route = 'main',
  query = '',
  onSearch,
  goMain,
}) {
  if (route === 'main') return <Main onSearch={onSearch} />;
  else return <Search goMain={goMain} onSearch={onSearch} query={query} />;
}

export default styled(PlayStore)`
  height: 100%;
  width: 100%;
`; 