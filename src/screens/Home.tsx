import { useState } from "react";
import { FlatList, HStack, Heading, Text, VStack, useNativeBase } from "native-base";

import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const [groups, setGroup] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro'])
    const [exercise, setExercise] = useState(['exercicio 1', 'exercicio 2', 'exercicio 3', 'exercicio 4', 'exercicio 5'])
    const [groupSelected, setGroupSelected] = useState('costas');

    const navigator = useNavigation<AppNavigatorRoutesProps>()
    function handleOpenExerciseDetails() {
        navigator.navigate("exercise")
    }
    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }} // estilizando dentro da lista
                my={10}
                maxH={10}
                minH={10}
            />


            <VStack flex={1} px={8}>
                <HStack
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Heading
                        color="gray.200"
                        fontSize="md"
                        fontFamily="heading"
                    >
                        Exercícios
                    </Heading>
                    <Text
                        color="gray.200"
                        fontSize="sm"
                    >
                        {exercise.length}
                    </Text>
                </HStack>
                <FlatList
                    data={exercise}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard
                            onPress={handleOpenExerciseDetails}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>

        </VStack>
    )
}