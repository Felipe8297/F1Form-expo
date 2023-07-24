import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'

import Icon from '@expo/vector-icons/Feather'

import Logo from '../src/assets/logo.svg'
import Group from '../src/assets/group.svg'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function NewDocument() {
  const [preview, setPreview] = useState<string | null>(null)
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  function handleNextPage() {
    router.push('/finish')
  }

  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      })

      if (result.assets[0]) {
        setPreview(result.assets[0].uri)
      }
    } catch (err) {
      // deu erro mas eu não tratei
    }
  }

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: top,
        flexDirection: 'column',
      }}
    >
      <View className="flex-row items-center justify-center">
        <Logo />
      </View>

      <View className="mt-6 w-full items-center space-y-6">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={openImagePicker}
          className="h-32 w-full items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
        >
          {preview ? (
            <Image
              source={{ uri: preview }}
              className="h-full w-full rounded-lg object-cover"
              alt=""
            />
          ) : (
            <View className="flex-row items-center gap-2">
              <Icon name="image" color="#fff" />
              <Text className="text-sm font-bold text-gray-200">
                Adicionar foto do documento
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center rounded-full bg-gray-100 px-5 py-3 "
          onPress={handleNextPage}
        >
          <Text className="font-regular_kanit text-sm uppercase">Avançar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
