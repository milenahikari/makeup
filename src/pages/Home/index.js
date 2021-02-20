import React, { useState, useEffect, useCallback } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import categories from '../../services/categories';
import api from '../../services/api';

import * as S from "./styles";

const Home = () => {
  const [search, setSearch] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('foundation');
  const [productsCurrentCategory, setProductsCurrentCategory] = useState([]);

  useEffect(() => {
    async function getProductsForCategory() {
      const response = await api.get(`?product_type=${currentCategory}`);
      const { data } = response;
      setProductsCurrentCategory(data);
    }
    getProductsForCategory();
  }, [currentCategory]);

  const handleToggleCategory = useCallback((hashCategory) => {
    setCurrentCategory(hashCategory);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderDetail>
          <S.HeaderLeft>
            <S.StoreName>MakeUp</S.StoreName>
          </S.HeaderLeft>

          <S.HeaderRight />
        </S.HeaderDetail>

        <S.WrapperInput>
          <S.InputSearch
            placeholder="Search..."
            returnKeyType="search"
            value={search}
            onChangeText={(search) => setSearch(search)}
          />

          <SimpleLineIcons name="magnifier" color="#ACACB3" size={20} style={{ left: -40 }} />
        </S.WrapperInput>
      </S.Header>

      <S.WrapperListCategories>
        <S.ListCategories
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={category => category.id.toString()}
          renderItem={({ item: category }) => (
            <S.ButtonCategory onPress={() => handleToggleCategory(category.hash)}>
              <S.ButtonCategoryText>{category.name}</S.ButtonCategoryText>
            </S.ButtonCategory>
          )}
        />
      </S.WrapperListCategories>

      <S.WrapperListProductsCurrentCategory>
        <S.ListProductsCurrentCategory
          data={productsCurrentCategory}
          showsVerticalScrollIndicator={false}
          keyExtractor={product => product.id.toString()}
          renderItem={({ item: product }) => (
            <S.CardProduct>
              <S.ProductImage source={{ uri: product.image_link }} />
              <S.CardProductDetail>
                <S.ProductName>{product.name}</S.ProductName>
                <S.Price>{product.price_sign + product.price}</S.Price>
              </S.CardProductDetail>
            </S.CardProduct>
          )}
        />
      </S.WrapperListProductsCurrentCategory>

    </S.Container>
  );
};

export default Home;
