// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import FormsScreen from "./screens/FormsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ConfiguracionScreen from "./screens/ConfiguracionScreen";
import DataDisplayScreen from "./screens/DataDisplayScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  const [colorBarra, setColorBarra] = useState("#0a4a75");

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colorBarra },
            headerTintColor: "#fff",
            headerTitle: "Menú de opciones",
          }}
        >
          <Drawer.Screen name="Perfil">
            {() => <ProfileScreen setColorBarra={setColorBarra} />}
          </Drawer.Screen>

          <Drawer.Screen name="Formulario">
            {() => <FormsScreen setColorBarra={setColorBarra} />}
          </Drawer.Screen>

          <Drawer.Screen name="Configuración">
            {() => <ConfiguracionScreen setColorBarra={setColorBarra} />}
          </Drawer.Screen>

          <Drawer.Screen name="DataDisplay">
            {() => <DataDisplayScreen setColorBarra={setColorBarra} />}
          </Drawer.Screen>

        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
