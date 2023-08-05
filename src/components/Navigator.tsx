import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import UserList from '../views/UserList'
import UserForm from '../views/UserForm'
import { Button, Icon } from '@rneui/base'

const Stack = createStackNavigator()

export default function Navigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
	screenOptions={{
	  headerStyle: { backgroundColor: '#f4511f'},
	  headerTintColor: '#fff',
	  headerTitleStyle: { fontWeight: 'bold' },
	}}
      >
	<Stack.Screen
	  name='UserList'
	  component={UserList} 
	  options={({navigation}) => {
	    return {
	      title: 'Lista de Usuários',
	      headerRight: () => (
		<Button type='clear' icon={<Icon name='add' size={25} color="#fff"/>}
		  onPress={() => navigation.navigate('UserForm')}
		/>
	      )
	    }
	  }}
	/>
	<Stack.Screen name='UserForm' component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

