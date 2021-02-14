import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import * as S from "./styles";

const Home = () => {
  const [search, setSearch] = useState(null);

  return (
    <S.Header>
      <S.HeaderDetail>
        <S.HeaderLeft>
          <S.StoreName>MakeUp</S.StoreName>
        </S.HeaderLeft>
        <S.HeaderRight />
      </S.HeaderDetail>

      <S.InputSearch
        placeholder="Search..."
        value={search}
        onChangeText={(search) => setSearch(search)}
      />
      {/* <SimpleLineIcons name="menu" size={32} color="#232129" /> */}
    </S.Header>
  );
};

export default Home;
