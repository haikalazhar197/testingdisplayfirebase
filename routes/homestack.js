import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/homepage";
import Display from "../screens/displaypage";


const screens ={

    Home: {
        screen: Home,
    },

    Display : {
        screen: Display,
    },


};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);