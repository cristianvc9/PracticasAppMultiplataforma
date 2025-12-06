import React from 'react';
import {
    Box,
    Text,
    Button,
    ButtonText,
    ButtonIcon,
    Card,
    Badge,
    BadgeText,
    BadgeIcon,
    Toast,
    ToastTitle,
    useToast,
    Image,
    HStack,
    VStack,
    Center,
} from '@gluestack-ui/themed';
import { ShoppingCart, Heart, Anchor, Sailboat } from 'lucide-react-native';

const DisplayScreen = () => {
    const toast = useToast();

    const handleAddToCart = () => {
        toast.show({
            placement: 'top',
            render: ({ id }) => (
                <Toast nativeID={`toast-${id}`} action="info" variant="accent">
                    <ToastTitle>Barco agregado al carrito exitosamente!</ToastTitle>
                </Toast>
            ),
        });
    };

    // Datos de la tabla - adaptados para barcos
    const tableData = [
        { product: 'Velero', size: 'Mediano', available: 5 },
        { product: 'Lancha', size: 'Grande', available: 8 },
    ];

    return (
        <Box flex={1} bg="$blue50" p="$4">
            {/* Header */}
            <Center mb="$6">
                <Text fontSize="$2xl" fontWeight="$bold" color="$blue900">
                    Náutica Marina
                </Text>
            </Center>

            {/* Product Card */}
            <Card p="$4" mb="$4" borderRadius="$lg" backgroundColor="$white" borderColor="$blue200">
                <VStack space="md">
                    {/* Product Image */}
                    <Center>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1709884735017-114f4a31f944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1229',
                            }}
                            alt="Velero Blanco"
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: 8,
                            }}
                        />
                    </Center>

                    {/* Product Title */}
                    <Text fontSize="$xl" fontWeight="$bold" textAlign="center" color="$blue800">
                        Velero Blanco
                    </Text>

                    {/* Product Description */}
                    <Text fontSize="$sm" textAlign="center" color="$blue600">
                        Velero de lujo con capacidad para 6 personas, ideal para paseos costeros. Incluye equipo de seguridad completo.
                    </Text>

                    <Box height="$px" bg="$blue200" my="$2" />

                    {/* Buttons */}
                    <HStack space="md" justifyContent="center">
                        <Button
                            bg="$blue600"
                            borderRadius="$lg"
                            onPress={handleAddToCart}
                            flex={1}
                        >
                            <ButtonIcon as={ShoppingCart} mr="$2" />
                            <ButtonText>Reservar</ButtonText>
                        </Button>

                        <Button
                            variant="outline"
                            borderColor="$blue400"
                            borderRadius="$lg"
                            flex={1}
                        >
                            <ButtonIcon as={Heart} mr="$2" />
                            <ButtonText color="$blue800">Favoritos</ButtonText>
                        </Button>
                    </HStack>
                </VStack>
            </Card>

            {/* Table Card - Temática náutica */}
            <Card p="$4" borderRadius="$lg" borderColor="$blue200" backgroundColor="$white">
                <VStack space="none" width="$full">
                    {/* Table Header */}
                    <HStack
                        space="md"
                        py="$3"
                        borderBottomWidth="$1"
                        borderBottomColor="$blue300"
                        bg="$blue100"
                    >
                        <Box flex={1}>
                            <Text fontWeight="$bold" color="$blue900" textAlign="center">
                                Embarcación
                            </Text>
                        </Box>
                        <Box flex={1}>
                            <Text fontWeight="$bold" color="$blue900" textAlign="center">
                                Tamaño
                            </Text>
                        </Box>
                        <Box flex={1}>
                            <Text fontWeight="$bold" color="$blue900" textAlign="center">
                                Disp.
                            </Text>
                        </Box>
                        <Box flex={1}>
                            <Text fontWeight="$bold" color="$blue900" textAlign="center">
                                Estado
                            </Text>
                        </Box>
                    </HStack>

                    {/* Table Body */}
                    <VStack space="none">
                        {tableData.map((item, index) => (
                            <HStack
                                key={index}
                                space="md"
                                py="$3"
                                borderBottomWidth={index === tableData.length - 1 ? 0 : '$1'}
                                borderBottomColor="$blue200"
                                bg="$white"
                            >
                                <Box flex={1}>
                                    <Text color="$blue800" textAlign="center">
                                        {item.product}
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text color="$blue800" textAlign="center">
                                        {item.size}
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text color="$blue800" textAlign="center">
                                        {item.available}
                                    </Text>
                                </Box>
                                <Box flex={1} alignItems="center" justifyContent="center">
                                    <HStack space="sm" alignItems="center" justifyContent="center">
                                        <Badge
                                            size="sm"
                                            variant="solid"
                                            borderRadius="$full"
                                            action="success"
                                        >
                                            <BadgeIcon as={Anchor} mr="$1" />
                                            <BadgeText>Disponible</BadgeText>
                                        </Badge>
                                        <Sailboat size={20} color="#1e40af" />
                                    </HStack>
                                </Box>
                            </HStack>
                        ))}
                    </VStack>

                    {/* Table Footer */}
                    <HStack
                        space="md"
                        py="$3"
                        borderTopWidth="$1"
                        borderTopColor="$blue300"
                        bg="$blue50"
                    >
                        <Box flex={1}>
                            <Text fontSize="$sm" color="$blue600" textAlign="center">
                                Mostrando inventario actual
                            </Text>
                        </Box>
                    </HStack>
                </VStack>
            </Card>
        </Box>
    );
};

export default DisplayScreen;