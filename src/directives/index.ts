import { useIntersectionObserver } from '@vueuse/core'
import type { App, DirectiveBinding } from 'vue'

export const lazyLoad = {
  install(app: App) {
    app.directive('img-lazy', {
      mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          if (entry?.isIntersecting) {
            // console.log('图片进入视口，开始加载:', binding.value)
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
