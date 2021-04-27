import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Compo from './src/screens/Component1'
import ListScreen from './src/screens/ListComponent'
import ImageScreen from './src/screens/ImageScreen'
import ColourScreen from './src/screens/ColourScreen'
import ColorBox from './src/screens/ColorBox'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : Compo,
    List : ListScreen,
    ImageScreen: ImageScreen,
    ColourScreen: ColourScreen,
    ColorBox:ColorBox
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
