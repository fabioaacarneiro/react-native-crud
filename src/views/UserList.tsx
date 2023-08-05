import { Alert, FlatList, View } from "react-native";
import { Avatar, Button, ListItem, Icon } from "@rneui/base";

import users from '../data/users'
import { Fragment, useContext } from "react";
import UsersContext from "../context/UsersContext";

type User = {
  id: number
  name: string
  email: string
  avatarUrl: string
}

export default function UserList({navigation}: any) {

  const ctx = useContext(UsersContext)
  console.warn(Object.keys(ctx))

  const confirmUserDeletion = ({user}: {user: User}) => {
    Alert.alert('Excluir usuário', 'Deseja exluir o usuário?', [{
      text: 'Sim',
      onPress: () => {
	console.warn(`Usuário ${user.name} deletado`)
      }
    },
    {
      text: 'Não'
    }
    ])}

  const GetAction = ({user}: {user: User}) => (
    <Fragment>
      <Button 
        onPress={() => navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
      <Button 
        onPress={() => confirmUserDeletion({user})}
        type="clear"
        icon={<Icon name="delete" size={25} color="red" />}
      />
    </Fragment>
  )

  const GetUserItem = (user: User) => (
    <View style={{
	marginVertical: 5,
	marginHorizontal: 10,
	overflow: 'hidden',
	shadowOffset: {
	  width: 2,
	  height: 2,
	},
	shadowRadius: 5,
	shadowOpacity: 20,
	shadowColor: '#000',
	borderRadius: 20,
    }}>
	<ListItem onPress={() => navigation.navigate('UserForm')}>
      	  <Avatar key={user.id} rounded source={{uri: user.avatarUrl}} />
      	  <ListItem.Content>
      	    <ListItem.Title>{user.name}</ListItem.Title>
      	    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      	  </ListItem.Content>
	  <GetAction user={user} />
      	</ListItem>
    </View>
  )

  return (
    <View>
      <FlatList
	keyExtractor={user => user.id.toString()}
	data={users}
	renderItem={({item}) => <GetUserItem id={item.id} name={item.name} email={item.email} avatarUrl={item.avatarUrl} />}
      />
    </View>
  )
}
