import * as React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, Header, Input } from "react-native-elements";

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`;

const Heading = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
  text-align: center;
`;

const ButonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CutomButton = styled(TouchableOpacity)<{ color?: string }>`
  background-color: ${(props) => props.color || "red"};
  flex: 48% 0 0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const CustomText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header
        centerComponent={{ text: "For Girl", style: { color: "#fff" } }}
      />
      <Page>
        <View>
          <Input label="code" placeholder="Code" autoCompleteType={undefined} />
          <Button title={"Ok"} />
        </View>
        <View>
          <Heading>Check tu cach</Heading>
          <ButonContainer>
            <CutomButton color="#e74c3c">
              <CustomText>option 1</CustomText>
            </CutomButton>
            <CutomButton color="#2980b9">
              <CustomText>option 2</CustomText>
            </CutomButton>
            <CutomButton color="#2ecc71">
              <CustomText>option 3</CustomText>
            </CutomButton>
            <CutomButton color="#f1c40f">
              <CustomText>option 4</CustomText>
            </CutomButton>
          </ButonContainer>
        </View>
      </Page>
    </View>
  );
};
export default GirlScreen;
