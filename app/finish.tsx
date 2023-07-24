import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import Group from '../src/assets/group.svg'

import Logo from '../src/assets/logo.svg'

export default function Finish() {
  const router = useRouter()

  function handleNextPage() {
    router.push('/message')
  }

  return (
    <View className="flex-1 items-center px-6 py-10">
      <View className=" w-full flex-1 items-center justify-center gap-6">
        <Logo />

        <Text className="font-semibold_kanit text-xl leading-normal text-gray-100">
          Documento enviado com sucesso. O documento será analisado em até 3
          dias uteis.
        </Text>

        <TouchableOpacity
          className="rounded-full bg-gray-100 px-5 py-3"
          onPress={handleNextPage}
        >
          <Text className="font-regular_kanit text-sm uppercase">Concluir</Text>
        </TouchableOpacity>
      </View>

      <Group />
    </View>
  )
}
