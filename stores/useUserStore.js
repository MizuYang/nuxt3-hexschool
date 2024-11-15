import { defineStore } from 'pinia'

export const useUserStore = defineStore("useUserStore", () => {
  const isReverse = ref(false)
  const userName = ref('Mizu Yang')

  function reverseName() {
    const firstName = 'Mizu'
    const lastName = 'Yang'

    userName.value = isReverse.value ?
      `${firstName} ${lastName}` :
      `${lastName} ${firstName}`

    isReverse.value = !isReverse.value
  }

  return {
    userName,
    isReverse,
    reverseName
  }
})