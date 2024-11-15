import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('useLoadingStore', () => {
  const isLoading = ref(true)

  function startLoading (){
    isLoading.value = true
  }
  function stopLoading (){
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    stopLoading
  }
})