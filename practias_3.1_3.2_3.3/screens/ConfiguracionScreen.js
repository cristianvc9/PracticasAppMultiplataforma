import React from "react";
import { Box, Button, Text } from "@gluestack-ui/themed";

const ConfiguracionScreen = ({ setColorBarra }) => {
    const colores = ["#06b183ff", "#a253dbff", "#76228bff", "#8B0000", "#8c00ffff"];

    return (
        <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight100">
            <Text mb="$4" size="lg" fontWeight="$bold">
                Selecciona el color de la barra
            </Text>

            {colores.map((color, i) => (
                <Button key={i} my="$2" w="$56" bg={color} onPress={() => setColorBarra(color)}>
                    <Text color="white">{color}</Text>
                </Button>
            ))}
        </Box>
    );
};

export default ConfiguracionScreen;
