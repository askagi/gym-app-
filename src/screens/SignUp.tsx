import { useState } from "react";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import BackgroundImage from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from 'yup';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required("Informe o nome"),
    email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
    password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
    passwordConfirm: yup.string().required("Confirme a senha").oneOf([yup.ref("password")], "A confirmação da senha não confere"),
})

export function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    const { goBack } = useNavigation();
    const [name, setName] = useState('');

    function handleGoBack() {
        goBack();
    }

    function handleSignIn({ name, email, password, passwordConfirm }: FormDataProps) {
        console.log({ name, email, password, passwordConfirm });
    }

    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundImage}
                    defaultSource={BackgroundImage}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Triene sua mente e seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading
                        color="gray.100"
                        fontSize="xl"
                        mb={6}
                        fontFamily="heading"
                    >
                        Crie sua conta
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}

                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                onChangeText={onChange}
                                value={value}
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                errorMessage={errors.email?.message}
                            />
                        )}

                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                onChangeText={onChange}
                                value={value}
                                placeholder="Senha"
                                secureTextEntry
                                errorMessage={errors.password?.message}
                            />
                        )}

                    />

                    <Controller
                        control={control}
                        name="passwordConfirm"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                onChangeText={onChange}
                                value={value}
                                placeholder="Confirme  a Senha"
                                secureTextEntry
                                onSubmitEditing={handleSubmit(handleSignIn)}
                                returnKeyType="send"
                                errorMessage={errors.passwordConfirm?.message}
                            />
                        )}

                    />

                    <Button title="Criar e acessar" onPress={handleSubmit(handleSignIn)} />
                </Center>

                <Button
                    title="Voltar para o login"
                    variant="outline"
                    mt={12}
                    onPress={handleGoBack}
                />

            </VStack>
        </ScrollView>
    )
}