import { useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import Group from '../src/assets/group.svg'

import Logo from '../src/assets/logo.svg'

export default function App() {
  const router = useRouter()

  function handleNextPage() {
    router.push('/identification')
  }

  return (
    <View className="flex-1 items-center px-10 py-10">
      <View className=" w-full flex-1 items-center justify-center gap-6">
        <Logo />

        <View className="h-14 w-full flex-row items-center overflow-hidden rounded  bg-black/20">
          <TextInput
            className="flex-1 pl-4 font-regular_kanit"
            style={{ color: 'white' }}
            placeholder="Digite o email cadastrado na compra"
            placeholderTextColor="#a1a1aa"
          />
        </View>
        <View className="h-14 w-full flex-row items-center overflow-hidden rounded bg-black/20">
          <TextInput
            className="flex-1 pl-4 font-regular_kanit"
            style={{ color: 'white' }}
            placeholder="Digite o número do pedido"
            placeholderTextColor="#a1a1aa"
          />
        </View>
        <TouchableOpacity
          className="rounded-full bg-gray-100 px-5 py-3"
          onPress={handleNextPage}
        >
          <Text className="font-regular_kanit text-sm uppercase">Avançar</Text>
        </TouchableOpacity>
      </View>

      <Text className="items-center">
        <Group />
      </Text>
    </View>
  )
}
