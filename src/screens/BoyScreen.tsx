import * as React from "react";
import * as Notifications from "expo-notifications";
import { Text, View } from "react-native";
import { Button, Header, Input } from "react-native-elements";
import styled from "styled-components";

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

const getNotificationToken = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("No notification permissions!");
      return;
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;
  console.log(token);
  return token;
};

const BoyScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: "For Boy", style: { color: "#fff" } }} />
      <Page>
        <View>
          <Input label="code" placeholder="Code" autoCompleteType={undefined} />
          <Button title={"Get code"} onPress={getNotificationToken} />
        </View>
        <View>
          <Heading>Check tu cach</Heading>
        </View>
      </Page>
    </View>
  );
};
export default BoyScreen;
