import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView
} from 'react-native';

const CustomHeader = ({ title, studentName }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.studentName}>{studentName}</Text>
    </View>
  );
};

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    console.log('Botón Sign In presionado');
    
    Alert.alert(
      'Alert',
      'User successfully logged in',
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('Usuario autenticado exitosamente');
            setIsAuthenticated(true);
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader 
        title="React Native - User registration"
        studentName="Nombre del alumno"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          editable={!isAuthenticated}
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!isAuthenticated}
        />
        
        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            onPress={handleSignIn}
            disabled={isAuthenticated}
            color="#2e0067ff"
          />
        </View>
        
        {isAuthenticated && (
          <Text style={styles.successText}>
            Usuario autenticado - Botón deshabilitado
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6a0fbbff', 
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  studentName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  successText: {
    textAlign: 'center',
    color: 'green',
    fontWeight: '600',
    marginTop: 10,
    fontSize: 14,
  },
});

export default App;