import styled from "styled-components/native";

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 200px;
  align-items: center;
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
  color: #232129; //312e38
`;

export const HeaderRight = styled.View`
  width: 50%;
  background: #f6f7fa;
`;

export const InputSearch = styled.TextInput`
  position: absolute;
  width: 80%;
  height: 45px;
  padding-left: 10px;
  margin-top: 120px;
  background: #fff;
  color: #bac7d3;
  border: 1px;
  border-color: #f6f7fa;
  border-radius: 5px;
`;
