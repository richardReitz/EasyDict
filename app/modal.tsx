import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ModalHeader } from '@/components/ModalHeader';
import { ScreenView } from '@/components';
import Icon from "@expo/vector-icons/FontAwesome"
import { dictionaryApi } from '@/services/dictionaryApi';
import { Loading } from '@/components/Loading';
import type { WordData } from '@/types/types';

type Sections = 'noun' | 'verb' | 'interjection'

export default function ModalScreen() {
    const { data, word } = useLocalSearchParams();

    const buttonSections: Sections[] = ['noun', 'verb', 'interjection']
    const [sectionSelected, setSectionSelected] = useState<Sections>('noun');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [wordData, setData] = React.useState<WordData | null>(data ? JSON.parse(data as string) : null);

    const phoneticText = wordData?.phonetic ?? wordData?.phonetics?.find(({ text }) => !!text)?.text
    const selectedDefinitions = 
        wordData?.meanings?.find(({ partOfSpeech }) => partOfSpeech === sectionSelected)?.definitions ?? []

    const fetchWord = async (word: string): Promise<void> => {
        setLoading(true)

        try {
            const response = await dictionaryApi.get(`/${word}`)
            setData(response.data[0])
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if (!data && word) {
            fetchWord(String(word))
        }
    }, [data])

    if (!wordData && !loading) return (
        <ScreenView>
            <ModalHeader />
            <Text>Detalhes da palavra não encontrado</Text>
        </ScreenView>
    )

    return (
        <ScreenView>
            <ModalHeader word={wordData?.word} />

            {loading ?
                <Loading className='mt-4' />
            :
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='mt-6 font-libre-baskerville-bold text-4xl mb-1'>{wordData?.word}</Text>
                    {!!phoneticText &&
                        <View className='flex-row items-center gap-3 mb-4'>
                            <Text className='text-lg text-primary'>{phoneticText}</Text>
                            <TouchableOpacity>
                                <Icon name="volume-up" size={20} color="#4A90E2" />
                            </TouchableOpacity>   
                        </View>
                    }

                    <View className='flex-row items-center border border-primary rounded-md self-start mt-2'>
                        {buttonSections.map((text, index) =>
                            <TouchableOpacity
                                key={text}
                                onPress={() => setSectionSelected(text)}
                                className={`
                                    py-2 px-3 ${index !== buttonSections.length - 1 && 'border-r border-primary'}
                                    ${sectionSelected === text && 'bg-primary '}
                                `}
                            >
                                <Text className={`${sectionSelected === text ? 'text-white' : 'text-primary'}`}>
                                    {text}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View className='mt-12'>
                        <Text className='text-xl uppercase font-semibold mb-2'>Definições</Text>
                        {selectedDefinitions.length ?
                            selectedDefinitions.map((item, index) => 
                                <View key={index.toString()} className='mb-1'>
                                    <Text  className='text-base font-light'>
                                        <Text className='text-xl font-semibold'>
                                            {index + 1}{'. '}
                                        </Text>
                                        {item.definition}
                                    </Text>
                                </View>
                            )
                        :
                            <Text  className='text-base font-light'>
                                Sem definições.
                            </Text>
                        }
                    </View>
                </ScrollView>
            }
        </ScreenView>
    );
}