import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History() {
    const [exercise, setExercise] = useState([
        {
            title: "26.08.22",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "27.08.22",
            data: ["Puxada frontal"]
        }
    ])
    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList
                sections={exercise}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard
                        group="Nome do grupo"
                        exercise={item}
                    />
                )}

                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" mt={10} mb={3} fontSize="md" fontFamily="heading">
                        {section.title}
                    </Heading>
                )}
                contentContainerStyle={exercise.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrados ainda. {'\n'}
                        Que tal fazer um exercício hoje?
                    </Text>
                )}

                showsVerticalScrollIndicator={false}
                px={8}
            />
            <VStack>

            </VStack>
        </VStack>
    )
}