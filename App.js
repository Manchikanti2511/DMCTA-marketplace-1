import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import HomeScreen from './src/screens/home'
import styles from './src/screens/home/styles'
import MyTabs from './src/screens/Bottom_Tab'
 



function LandingScreen({navigation}) {
  return (
    <View>
      
      <Button styles={styles.notif} title="Go to notifications" onPress={()=>navigation.navigate('Notifications')}></Button>
      <HomeScreen></HomeScreen>
      <MyTabs></MyTabs>
    </View>
  );
}
function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

export default App;