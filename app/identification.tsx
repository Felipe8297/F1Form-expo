import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import Logo from '../src/assets/logo.svg'
import Group from '../src/assets/group.svg'
import { useState } from 'react'
import {
  formatCPF,
  formattedDate,
  formattedPhone,
} from '../src/formatters/inputFormatted'
import { useRouter } from 'expo-router'

export default function Identification() {
  const [birthDate, setBirthDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cpf, setCpf] = useState('')

  function handleFormatDate(input: string) {
    const date = formattedDate(input)
    setBirthDate(date)
  }

  function handleFormatPhone(input: string) {
    const phone = formattedPhone(input)
    setPhoneNumber(phone)
  }

  function handleFormatCPF(input: string) {
    const cpf = formatCPF(input)
    setCpf(cpf)
  }

  const router = useRouter()

  function handleNextPage() {
    router.push('/new')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 items-center px-10 py-10">
        <View className="w-full flex-1 items-center justify-center gap-6">
          <Logo />
          <View className="flex w-full items-start justify-start">
            <Text className="font-regular_kanit text-lg text-gray-200">
              Olá Laura!
            </Text>
          </View>

          <View className="h-14 w-full flex-row items-center overflow-hidden rounded bg-black/20">
            <TextInput
              className="flex-1 pl-4 font-regular_kanit"
              style={{ color: 'white' }}
              placeholder="Nome Completo"
              placeholderTextColor="#a1a1aa"
            />
          </View>
          <View className="h-14 w-full flex-row items-center overflow-hidden rounded bg-black/20">
            <TextInput
              className="flex-1 pl-4 font-regular_kanit"
              style={{ color: 'white' }}
              placeholder="Digite seu CPF"
              placeholderTextColor="#a1a1aa"
              keyboardType="numeric"
              value={cpf}
              onChangeText={handleFormatCPF}
            />
          </View>

          <View className="h-14 w-full flex-row items-center overflow-hidden rounded bg-black/20">
            <TextInput
              className="flex-1 pl-4 font-regular_kanit"
              style={{ color: 'white' }}
              placeholder="Digite seu telefone"
              placeholderTextColor="#a1a1aa"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handleFormatPhone}
            />
          </View>

          <View className="h-14 w-full flex-row items-center overflow-hidden rounded bg-black/20">
            <TextInput
              className="flex-1 pl-4 font-regular_kanit"
              style={{ color: 'white' }}
              placeholder="Data de Nascimento"
              placeholderTextColor="#a1a1aa"
              keyboardType="numeric"
              value={birthDate}
              onChangeText={handleFormatDate}
            />
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 px-5 py-3"
            onPress={handleNextPage}
          >
            <Text className="font-regular_kanit text-sm uppercase">
              Avançar
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-center">
          <Group />
        </Text>
      </View>
    </ScrollView>
  )
}
