import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from "react";
import React from 'react';

export default function App() {

 
    const [name, setName] = React.useState('');
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [idioma, setIdioma] = React.useState('');
    const [showInfo, setShowInfo] = useState(false);

  

  const handleLogin = () =>{
      console.log(name)
      console.log(user)
      console.log(password)
      console.log(email)
      console.log(cpf)
      console.log(idioma)

  };



        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: {name}</Text>
          <Text style={styles.infoText}>Usuário: {user}</Text>
          <Text style={styles.infoText}>Senha: {password}</Text>
          <Text style={styles.infoText}>E-mail: {email}</Text>
          <Text style={styles.infoText}>CPF: {cpf}</Text>
          <Text style={styles.infoText}>Idioma do currículo: {idioma}</Text>
        </View>

    

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold'}}>Cadastro</Text>
      <TextInput placeholder='  Nome' style={styles.input}  value={name} onChangeText={setName}></TextInput>
      <TextInput placeholder='  Sexo' style={styles.input} ></TextInput>
      <TextInput placeholder='  Data de nascimento' style={styles.input}></TextInput>
      <TextInput placeholder='  Usuário' style={styles.input} value={user} onChangeText={setUser}></TextInput>
      <TextInput placeholder='  Senha' textContentType='password' style={styles.input} value={password} onChangeText={setPassword}></TextInput>
      <TextInput placeholder='  E-mail' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='  Confirme seu e-mail' style={styles.input}></TextInput>
      <TextInput placeholder='  CPF' style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
      <TextInput placeholder='  Idioma do currículo' style={styles.input} value={idioma} onChangeText={setIdioma}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textoButton} onPress={() =>{handleLogin(); setShowInfo(true)}}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: {name}</Text>
          <Text style={styles.infoText}>Usuário: {user}</Text>
          <Text style={styles.infoText}>Senha: {password}</Text>
          <Text style={styles.infoText}>E-mail: {email}</Text>
          <Text style={styles.infoText}>CPF: {cpf}</Text>
          <Text style={styles.infoText}>Idioma do currículo: {idioma}</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    width:200,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#9c9c9c',
    borderRadius:3,
    marginBottom:5,
  },

  button:{
    width:200,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#4285f4',
    marginTop:15,
    borderWidth:2,
    borderColor:'#8ecafc'

  },
  textoButton:{
    fontSize:16,
    fontWeight:'bold',
    color:'#FFF'
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
    color:'black',
    display:'flex',
    textAlign:'left'

  },

  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },


});
