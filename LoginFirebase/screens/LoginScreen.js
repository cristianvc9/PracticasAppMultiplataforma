import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, ButtonText, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import { Mail, User } from "lucide-react-native";
import { ref, push, set } from "firebase/database";
import { db } from '../components/config';

export default function RegistroScreen() {

    //inicializa las variables de estado en vacío y las funciones para actualizar su valor
    const [nombreUsuario, setNombreUsuario] = React.useState('');
    const [correo, setCorreo] = React.useState('');

    // Función para crear usuario
    function crearUsuario() {
        //verificar que los campos no estén vacíos
        if (!nombreUsuario.trim() || !correo.trim()) {
            Alert.alert("Error", "Por favor, ingresa tu correo y nombre de usuario.");
            return;
        }

        //crea una referencia a la ubicación 'users' en la base de datos y agrega un nuevo usuario con push
        const usuariosRef = ref(db, 'users');
        const nuevoUsuarioRef = push(usuariosRef);

        //establece los datos del nuevo usuario en la base de datos
        set(nuevoUsuarioRef, {
            username: nombreUsuario,
            email: correo,
        })
            .then(() => {
                Alert.alert('Éxito', '¡Usuario Registrado!');
                setNombreUsuario(''); // Limpiar campos después del éxito
                setCorreo('');
            })
            .catch((err) => {
                Alert.alert('Error', err.message);
            });
    }

    return (
        <View style={styles.contenedor}>

            {/* Tarjeta de Registro */}
            <View style={styles.tarjeta}>

                <Text style={styles.titulo}>Crear Cuenta</Text>
                <Text style={styles.subtitulo}>Comienza con nosotros</Text>

                {/* Input Correo */}
                <Input style={styles.cajaInput} size="xl">
                    <InputSlot style={styles.slotIcono}>
                        <InputIcon as={Mail} color="#7C3AED" />
                    </InputSlot>
                    <InputField
                        placeholder="Dirección de Correo"
                        value={correo}
                        onChangeText={setCorreo}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </Input>

                {/* Input Nombre de Usuario */}
                <Input style={styles.cajaInput} size="xl">
                    <InputSlot style={styles.slotIcono}>
                        <InputIcon as={User} color="#7C3AED" />
                    </InputSlot>
                    <InputField
                        placeholder="Nombre de Usuario"
                        value={nombreUsuario}
                        onChangeText={setNombreUsuario}
                        autoCapitalize="none"
                    />
                </Input>

                {/* Botón de Registro */}
                <Button style={styles.boton} onPress={crearUsuario}>
                    <ButtonText style={styles.textoBoton}>REGISTRARSE</ButtonText>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f1f0ffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    tarjeta: {
        width: '100%',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 25,
        elevation: 10,
        shadowColor: "#6D28D9",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
    },
    titulo: {
        fontSize: 28,
        fontWeight: '800',
        color: '#51219aff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 35,
    },
    cajaInput: {
        borderRadius: 16,
        marginBottom: 20,
        borderColor: '#3364c7ff',
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        //al presionar el input, cambiar el color del borde
        ':focus': {
            borderColor: '#0e5200ff',
        },
    },
    slotIcono: {
        paddingLeft: 10,
    },
    boton: {
        marginTop: 15,
        backgroundColor: '#672ecaff',
        borderRadius: 18,
        paddingVertical: 10,
        shadowColor: "#7C3AED",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    textoBoton: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },
});