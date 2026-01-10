import dayjs from 'dayjs'

export const useCountDown = () => {
  // 1. 指定 timer 的类型。在浏览器中 setInterval 返回的是 number
  let timer: ReturnType<typeof setInterval> | null = null

  const time = ref(0)

  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  const start = (currentTime: number) => {
    timer && clearInterval(timer)

    time.value = currentTime
    timer = setInterval(() => {
      if (time.value > 0) {
        time.value--
      } else {
        timer && clearInterval(timer)
      }
    }, 1000)
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime,
    start
  }
}
