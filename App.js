import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, Alert, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationCount, setRegistrationCount] = useState(0);

  const handleSubmit = () => {
    setRegistrationCount(registrationCount + 1);
    Alert.alert('Registro Completado', `Nombre: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <ImageBackground 
      source={{ uri: './assets/logo.png' }} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
        <Text style={styles.header}>Bienvenido Aprendiz</Text>
          <Text style={styles.header}>Registro</Text>
          
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Ingresa tu nombre"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Ingresa tu email"
          />

          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Ingresa tu contraseña"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Total Registros: {registrationCount}</Text>
          <Text>Desarrollado por: Ferney Ortiz</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // La imagen de fondo para toda la pantalla
    width: '100%', 
    height: '100%' 
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo transparente
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333333'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  counterContainer: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 16,
    color: '#FFFFFF',
  }
});