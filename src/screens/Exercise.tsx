import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button";

export function Exercise() {

    const { goBack } = useNavigation<AppNavigatorRoutesProps>()
    function handleGoBack() {
        goBack()
    }
    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon
                        as={Feather}
                        name="arrow-left"
                        color="green.500"
                        size={6}
                    />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">
                        Puxada frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.100" ml={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>

                <VStack p={8}>
                    <Image
                        source={{ uri: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg' }}
                        h={80}
                        w="full"
                        alt="Nome do exercicio"
                        mb={3}
                        resizeMode="cover"
                        rounded="lg"
                        overflow="hidden"
                    />

                    <Box bg="gray.600" pb={4} px={4} rounded="md">
                        <HStack alignItems="center" justifyContent="space-around" mt={6} mb={5}>
                            <HStack>
                                <SeriesSvg />
                                <Text color="gray.200" ml={2}>3 séries</Text>
                            </HStack>
                            <HStack>
                                <RepetitionsSvg />
                                <Text color="gray.200" ml={2}>12 repetições</Text>
                            </HStack>
                        </HStack>
                        <Button
                            title="Marcar como realizado"
                        />
                    </Box>
                </VStack>

            </ScrollView>
        </VStack>
    )
}