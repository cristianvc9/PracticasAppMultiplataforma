import React, { useState } from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Center,
    Divider,
    Button,
    Icon,
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    Image,
    Badge,
    BadgeText,
    Pressable,
    ScrollView,
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@gluestack-ui/themed';
import {
    Users,
    Heart,
    EyeOff,
    ArrowDownCircle,
    LayoutGrid,
} from 'lucide-react-native';

const ProfileScreen = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const user = {
        name: 'Cris',
        title: 'Developer',
        location: 'Los Angeles, LA',
        following: 25,
        followers: 50,
        likes: 10,
        avatarUrl:
            'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png',
    };

    const galleryImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1586446765473-4a6e8865dd80?auto=format&fit=crop&q=80&w=699',
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1667663051493-0ec8a3193630?auto=format&fit=crop&q=80&w=715',
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1651083703782-7f48d1c77383?auto=format&fit=crop&q=80&w=1974',
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1667663051493-0ec8a3193630?auto=format&fit=crop&q=80&w=715',
        },
    ];

    const GalleryItem = ({ imageUrl }) => (
        <Pressable onPress={() => setImagenSeleccionada(imageUrl)} flex={1} mx="$1">
            <Image
                size="2xl"
                source={{ uri: imageUrl }}
                alt="Foto de Galería"
                borderRadius="$md"
                style={{ aspectRatio: 1 }}
                resizeMode="cover"
            />
        </Pressable>
    );

    return (
        <Box flex={1} bg="$white" safeAreaTop>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Iconos arriba */}
                <HStack justifyContent="space-between" p="$4">
                    <Icon as={Users} size="lg" color="$textDark700" />
                    <Icon as={LayoutGrid} size="lg" color="$textDark700" />
                </HStack>

                {/* Avatar */}
                <Center pt="$4" pb="$8">
                    <Avatar size="xl" bg="$white">
                        <AvatarFallbackText>
                            {user.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </AvatarFallbackText>
                        <AvatarImage
                            source={{ uri: user.avatarUrl }}
                            alt="Avatar de usuario"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 9999,
                            }}
                        />
                    </Avatar>
                    <Text fontWeight="$bold" size="xl" mt="$3">
                        {user.name}
                    </Text>
                    <Text size="sm" color="$textDark500">
                        {user.title}
                    </Text>
                    <Text size="sm" color="$textDark500">
                        {user.location}
                    </Text>
                </Center>

                {/* Estadísticas */}
                <HStack justifyContent="space-around" px="$8" py="$4">
                    <VStack alignItems="center">
                        <Text fontWeight="$bold" size="xl">
                            {user.following}
                        </Text>
                        <Text size="sm" color="$textDark500">
                            Following
                        </Text>
                    </VStack>
                    <Divider orientation="vertical" h="$12" bg="$coolGray400" />
                    <VStack alignItems="center">
                        <Text fontWeight="$bold" size="xl">
                            {user.followers}
                        </Text>
                        <Text size="sm" color="$textDark500">
                            Followers
                        </Text>
                    </VStack>
                    <Divider orientation="vertical" h="$12" bg="$coolGray400" />
                    <VStack alignItems="center">
                        <HStack alignItems="center">
                            <Text fontWeight="$bold" size="xl" mr="$1">
                                {user.likes}
                            </Text>
                            <Icon as={Heart} size="sm" color="$red500" />
                        </HStack>
                        <Text size="sm" color="$textDark500">
                            Likes
                        </Text>
                    </VStack>
                </HStack>

                {/* Botones */}
                <HStack justifyContent="space-around" p="$4">
                    <Button
                        size="xl"
                        variant="solid"
                        bg="$indigo500"
                        borderRadius="$full"
                        w="$24"
                    >
                        <Icon as={ArrowDownCircle} size="xl" color="$white" />
                    </Button>
                    <Button
                        size="xl"
                        variant="outline"
                        borderColor="$coolGray300"
                        borderRadius="$full"
                        w="$24"
                    >
                        <Icon as={Heart} size="xl" color="$coolGray500" />
                    </Button>
                    <Button
                        size="xl"
                        variant="outline"
                        borderColor="$coolGray300"
                        borderRadius="$full"
                        w="$24"
                    >
                        <Icon as={EyeOff} size="xl" color="$coolGray500" />
                    </Button>
                </HStack>

                {/* Galería */}
                <Text size="lg" fontWeight="$bold" px="$4" py="$2">
                    Gallery
                </Text>

                <Box p="$4" pt="$0">
                    <Pressable onPress={() => setImagenSeleccionada(galleryImages[0].url)}>
                        <Image
                            size="full"
                            source={{ uri: galleryImages[0].url }}
                            alt="Imagen principal de la galería"
                            borderRadius="$md"
                            style={{ height: 200 }}
                            resizeMode="cover"
                        />
                        <Badge
                            position="absolute"
                            top="$6"
                            right="$6"
                            variant="solid"
                            action="success"
                            borderRadius="$full"
                            zIndex={10}
                        >
                            <BadgeText>Viaje</BadgeText>
                        </Badge>
                    </Pressable>
                </Box>

                <HStack justifyContent="space-between" px="$4" pb="$8">
                    {galleryImages.slice(1).map((img) => (
                        <GalleryItem key={img.id} imageUrl={img.url} />
                    ))}
                </HStack>
            </ScrollView>

            {/* Modal para mostrar imagen ampliada */}
            <Modal
                isOpen={!!imagenSeleccionada}
                onClose={() => setImagenSeleccionada(null)}
            >
                <ModalBackdrop bg="rgba(0,0,0,0.85)" />
                <ModalContent bg="transparent">
                    <ModalHeader>
                        <ModalCloseButton onPress={() => setImagenSeleccionada(null)} />
                    </ModalHeader>
                    <ModalBody>
                        <Center>
                            {imagenSeleccionada && (
                                <Image
                                    source={{ uri: imagenSeleccionada }}
                                    alt="Imagen ampliada"
                                    style={{
                                        width: '100%',
                                        height: 400,
                                        borderRadius: 12,
                                    }}
                                    resizeMode="contain"
                                />
                            )}
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProfileScreen;
