/**En esta sección se importan los componentes de React Native que se utilizarán en este componente: 
 * View, Text y TextInput, así como el módulo StyleSheet para aplicar estilos a los componentes. */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

/**En esta sección se define el componente Bienvenida. 
 * Este componente es una función de flecha que devuelve una vista que contiene un cuadro 
 * y dos cuadros de entrada de texto para el usuario y la contraseña. Se utiliza el hook 
 * useState para definir el estado del usuario y la contraseña. */
const Bienvenida = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    /**Aquí se definen los estados del usuario y la contraseña utilizando 
     * el hook useState. El valor inicial de cada uno es una cadena vacía. */
    <View style={styles.contenedor}>
      <View style={styles.cuadro}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            secureTextEntry={true}
            value={contrasena}
            onChangeText={setContrasena}
          />
        </View>
      </View>
    </View>
  );
};

/**En esta sección se devuelve la vista del componente Bienvenida. 
 * La vista contiene un cuadro con un título de "Bienvenido" y dos 
 * cuadros de entrada de texto para el usuario y la contraseña. 
 * Se utiliza el módulo StyleSheet para definir los estilos de cada componente. */
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuadro: {
    width: '90%',
    height: 300,
    backgroundColor: '#FF4136',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  titulo: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    color: '#FFFFFF',
  },
});

export default Bienvenida;
