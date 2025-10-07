import { Image, useColorScheme } from "react-native";

import DarkLogo from "../assets/img/logo_dark.png";
import LigthLogo from "../assets/img/logo_light.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LigthLogo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
