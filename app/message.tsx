import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import Group from '../src/assets/group.svg'

import Logo from '../src/assets/logo.svg'

export default function Finish() {
  const router = useRouter()

  function handleNextPage() {
    router.push('/')
  }

  return (
    <View className="flex-1 items-center px-2 py-10">
      <View className=" w-full flex-1 items-center justify-center gap-6">
        <Logo />

        <Text className="font-semibold_kanit text-xl leading-normal text-gray-100">
          Agora que te enganei com esse formulário falso, quero fazer a pergunta
          mais séria dele.
        </Text>
        <Text className="font-semibold_kanit text-xl leading-normal text-gray-100">
          Quer namorar comigo?
        </Text>

        <TouchableOpacity
          className="rounded-full bg-gray-100 px-5 py-3"
          onPress={handleNextPage}
        >
          <Text className="font-regular_kanit text-sm uppercase">
            Voltar para home
          </Text>
        </TouchableOpacity>
      </View>

      <Group />
    </View>
  )
}
