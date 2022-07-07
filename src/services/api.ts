import axios from "axios";

const EXPO_SERVER_URL = "https://api.expo.dev/v2/push/send";

export const sendPushNotification = async (
  token: string,
  title: string,
  body: string
) => {
  const message = {
    to: token,
    title: title,
    body: body,
    sound: "default",
  };
  const response = await axios.post(EXPO_SERVER_URL, message);
  alert("done!");
  return response.data;
};
// Language: typescript
// Path: src\services\api.ts
