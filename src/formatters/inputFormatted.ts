export const formattedDate = (input: string): string => {
  const digitsOnly = input.replace(/\D/g, '')

  const match = digitsOnly.match(/^(\d{2})(\d{2})(\d{4})$/)

  if (match) {
    const dataFormatada = `${match[1]}/${match[2]}/${match[3]}`
    return dataFormatada
  } else {
    return input
  }
}

export function formattedPhone(phoneNumber: string): string {
  // Remove todos os caracteres que não são dígitos
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  // Verifica se o número tem 11 dígitos (incluindo DDD)
  if (cleanedNumber.length === 11) {
    // Verifica se o nono dígito é 9 para identificar como celular
    if (cleanedNumber[2] === '9') {
      return `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(
        2,
        7,
      )}-${cleanedNumber.slice(7)}`
    } else {
      return `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(
        2,
        6,
      )}-${cleanedNumber.slice(6)}`
    }
  }

  // Verifica se o número tem 10 dígitos (sem o nono dígito)
  if (cleanedNumber.length === 10) {
    return `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(
      2,
      6,
    )}-${cleanedNumber.slice(6)}`
  }

  // Se o número não for válido, retorna o próprio número original
  return phoneNumber
}

export function formatCPF(cpf) {
  const cleanedCPF = cpf.replace(/\D/g, '')

  if (cleanedCPF.length === 11) {
    return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(
      3,
      6,
    )}.${cleanedCPF.slice(6, 9)}-${cleanedCPF.slice(9)}`
  }

  return cpf
}
