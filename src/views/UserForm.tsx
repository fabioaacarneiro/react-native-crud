import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/base";

export default function UserForm({route, navigation}: any) {
  const [user, setUser] = useState(route.params ? route.params : {})
  return (
    <View style={styles.form}>
      <Text>Nome:</Text>
      <TextInput
	style={styles.input}
	onChange={name => setUser({...user, name})}
	placeholder="Informe o nome"
 	value={user.name}
      />
      <Text>E-mail:</Text>
      <TextInput
	style={styles.input}
	onChange={email => setUser({...user, email})}
	placeholder="Informe o email"
 	value={user.email}
      />
      <Text>Avatar:</Text>
      <TextInput
	style={styles.input}
	onChange={avatarUrl => setUser({...user, avatarUrl})}
	placeholder="Informe o link do avatar"
 	value={user.avatarUrl}
      />
      <Button
	title="Salvar"
	onPress={() => {navigation.goBack()}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#909090',
    padding: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
});
