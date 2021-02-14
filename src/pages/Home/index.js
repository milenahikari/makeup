import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import * as S from './styles';

const Home = () => {
  return <S.Header>
    <S.HeaderLeft>
      <S.StoreName>MakeUp</S.StoreName>
    </S.HeaderLeft>
    <S.HeaderRight>

    </S.HeaderRight>

    {/* <SimpleLineIcons name="menu" size={32} color="#232129" /> */}
  </S.Header>;
}

export default Home;