import React, { useState } from "react";
import {
    CheckboxGroup, Checkbox, CheckboxLabel, CheckboxIndicator, CheckboxIcon, Box, Button, Text, Link, Icon, Pressable,
    RadioGroup, Radio, RadioIndicator, RadioIcon, RadioLabel, HStack, Select, Slider, Switch, Textarea, TextareaInput, FormControl,
} from "@gluestack-ui/themed";
import { CheckIcon, ExternalLinkIcon, CircleIcon, ChevronDownIcon } from "lucide-react-native";
import { ScrollView } from "react-native";

export default function Pantalla() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [presionado, setPresionado] = useState(false);
    const [gender, setGender] = useState("");
    const [selectValue, setSelectValue] = useState("opt1");
    const [sliderValue, setSliderValue] = useState(50);
    const [switchValue, setSwitchValue] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState("");

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <Box p="$4" bg="$white">

                {/* ---------- TÍTULO SECCIÓN ---------- */}
                <Text bold size="xl" mb="$2" textAlign="center" color="$black">
                    Formulario
                </Text>

                {/* ---------- CHECKBOXES ---------- */}
                <Text bold size="lg" mb="$3" color="$black">
                    Seleccionar intereses
                </Text>

                <CheckboxGroup value={selectedValues} onChange={setSelectedValues}>
                    <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                        {["Música", "Deportes", "Tecnología", "Arte"].map((item) => (
                            <Box
                                key={item}
                                width="48%"
                                mb="$3"
                                p="$3"
                                borderWidth="$1"
                                borderColor="$gray300"
                                borderRadius="$lg"
                                bg="$gray50"
                            >
                                <Checkbox value={item}>
                                    <CheckboxIndicator mr="$2" borderColor="$gray400" bg="$white">
                                        <CheckboxIcon as={CheckIcon} color="$blue600" />
                                    </CheckboxIndicator>
                                    <CheckboxLabel color="$black">{item}</CheckboxLabel>
                                </Checkbox>
                            </Box>
                        ))}
                    </Box>
                </CheckboxGroup>

                {/* ---------- LINK ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Enlace
                </Text>

                <Box alignItems="center">
                    <Link href="https://aguascalientes.tecnm.mx/" isExternal>
                        <Box flexDirection="row" alignItems="center">
                            <Icon as={ExternalLinkIcon} mr="$2" />
                            <Text color="$blue600" underline>
                                Ir al Instituto Tecnológico de Aguascalientes
                            </Text>
                        </Box>
                    </Link>
                </Box>

                {/* ---------- BOTÓN INTERACTIVO ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Botón interactivo
                </Text>

                <Pressable onPress={() => setPresionado(!presionado)}>
                    {({ pressed }) => (
                        <Box
                            px="$4"
                            py="$3"
                            borderRadius="$lg"
                            bg={pressed || presionado ? "$red100" : "$blue100"}
                            borderWidth="$1"
                            borderColor={pressed || presionado ? "$red300" : "$blue300"}
                            alignItems="center"
                        >
                            <Text
                                color={pressed || presionado ? "$red600" : "$blue600"}
                                bold
                                fontSize="$md"
                            >
                                {pressed || presionado ? "¡Presionado!" : "Presióname"}
                            </Text>
                        </Box>
                    )}
                </Pressable>

                {/* ---------- RADIO GROUP ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Seleccionar género
                </Text>

                <RadioGroup value={gender} onChange={setGender}>
                    <HStack space="lg">
                        {["Femenino", "Masculino", "Otro"].map((g) => (
                            <Radio key={g} value={g}>
                                <RadioIndicator mr="$2">
                                    <RadioIcon as={CircleIcon} color="$black" />
                                </RadioIndicator>
                                <RadioLabel>{g}</RadioLabel>
                            </Radio>
                        ))}
                    </HStack>
                </RadioGroup>

                {/* ---------- SELECT ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Seleccionar una opción
                </Text>

                <FormControl>
                    <Select selectedValue={selectValue} onValueChange={setSelectValue}>
                        <Select.Trigger
                            borderWidth="$1"
                            borderColor="$gray300"
                            bg="$gray50"
                            borderRadius="$lg"
                            px="$3"
                            py="$3"
                        >
                            <Select.Input placeholder="Seleccionar..." />
                            <Select.Icon as={ChevronDownIcon} />
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Backdrop />
                            <Select.Content>
                                <Select.Item label="Opción 1" value="opt1" />
                                <Select.Item label="Opción 2" value="opt2" />
                                <Select.Item label="Opción 3" value="opt3" />
                            </Select.Content>
                        </Select.Portal>
                    </Select>
                </FormControl>

                {/* ---------- SLIDER ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Seleccionar un valor
                </Text>

                <FormControl>
                    <Text color="$gray700" mb="$2">Valor actual: {sliderValue}</Text>

                    <Slider
                        minValue={0}
                        maxValue={100}
                        value={sliderValue}
                        onChange={setSliderValue}
                    >
                        <Slider.Track h="$1.5" bg="$gray300">
                            <Slider.FilledTrack bg="$blue600" />
                        </Slider.Track>
                        <Slider.Thumb bg="$blue600" />
                    </Slider>
                </FormControl>

                {/* ---------- SWITCH ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Estado
                </Text>

                <HStack alignItems="center" justifyContent="space-between">
                    <Text>{switchValue ? "Activado" : "Desactivado"}</Text>
                    <Switch value={switchValue} onValueChange={setSwitchValue} />
                </HStack>

                {/* ---------- TEXTAREA ---------- */}
                <Text bold size="lg" mt="$6" mb="$3" color="$black">
                    Comentarios
                </Text>

                <Textarea borderRadius="$lg" borderWidth="$1" borderColor="$gray300" bg="$gray50">
                    <TextareaInput
                        placeholder="Escribe aquí..."
                        value={textAreaValue}
                        onChangeText={setTextAreaValue}
                    />
                </Textarea>

                {/* ---------- BOTÓN ENVIAR ---------- */}
                <Button
                    mt="$8"
                    bg="$blue600"
                    borderRadius="$xl"
                    py="$3"
                    onPress={() => alert("Formulario enviado")}
                >
                    <Text color="$white" fontWeight="bold" fontSize="$md">
                        Enviar
                    </Text>
                </Button>
            </Box>
        </ScrollView>
    );
}
