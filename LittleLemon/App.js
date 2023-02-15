import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeWindow from './src/screens/Welcome';
import LoginScreen from './src/screens/LoginScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route })  => ({
        tabBarIcon: ({focused, color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = focused
            ? 'login'
            : 'logout';
          }
          else if (route.name === 'Welcome') {
            iconName = 'home-outline';
          }
          return <MaterialCommunityIcons name =  {iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Welcome" component={WelcomeWindow} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}