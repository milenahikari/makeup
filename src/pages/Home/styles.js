import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1;
`;

export const Header = styled.View`
  width: 100%;
  height: 220px;
`;

export const HeaderDetail = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const HeaderLeft = styled.View`
  width: 50%;
  padding-left: 20px;
  padding-top: 50px;
`;

export const StoreName = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 25px;
  color: #333344;
`;

export const HeaderRight = styled.View`
  width: 50%;
  background:#F7F7FB;
`;

export const WrapperInput = styled.View`
  position: absolute;
  width: 100%;
  height: 45px;
  top: 120px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  background: #fff;
  color: #B6C3D0;
  border: 1px;
  border-color: #f6f7fa;
  border-radius: 5px;
`;

export const WrapperListCategories = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  top: 180px;
`;

export const ListCategories = styled.FlatList``;

export const ButtonCategory = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const ButtonCategoryText = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 15px;
  color: #ACACB3;
`;

export const WrapperListProductsCurrentCategory = styled.View``;

export const ListProductsCurrentCategory = styled.FlatList``;

export const CardProduct = styled.View`
  margin: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  border-radius: 5px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const CardProductDetail = styled.View`
  margin-left: 10px;
  justify-content: space-around;
`;

export const ProductName = styled.Text`
  font-family: "Roboto_300Light";
  font-size: 15px;
  color: #333344;
`;

export const Price = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 15px;
  color: #333344;
  flex-direction: row;
`;