import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";


type Props = TouchableOpacityProps & {
    name?: string
}
export function ExerciseCard({ name, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack
                bg="gray.500"
                alignItems="center"
                p={2}
                pr={4}
                rounded="md"
                mb={3}
            >
                <Image
                    source={{ uri: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg' }}
                    alt="Imagem do exercicio"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white" fontFamily="heading">
                        Puxada frontal
                    </Heading>
                    <Text
                        fontSize="sm"
                        color="gray.200"
                        mt={1}
                        numberOfLines={2} // Define o numero maximo de linhas
                    >
                        3 séries x 12 repetições
                    </Text>
                </VStack>
                <Icon
                    as={Entypo}
                    name="chevron-thin-right"
                    color="gray.300"
                />
            </HStack>
        </TouchableOpacity>
    )
}