
export const useHome = () => {
  // store
  const loadingStore = useLoadingStore()
  const { startLoading, stopLoading } = loadingStore

  const newsList = ref([]);

  onMounted(() => {
    getNewsList()
  })

  async function getNewsList() {
    startLoading()
    try {
      const res = await $fetch('https://nuxr3.zeabur.app/api/v1/home/news/')
      stopLoading()
      newsList.value = res.result
    } catch (err) {
      stopLoading()
      console.error(err)
    }
  }

  return {
    newsList
  }
}