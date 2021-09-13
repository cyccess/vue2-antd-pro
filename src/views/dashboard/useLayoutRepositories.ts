import { onMounted, reactive, ref } from '@vue/composition-api'
import { LayoutList } from './layout'

const getLayoutListRepositories = () => {
  return new Promise<LayoutList>((resolve) => {
    const layoutList: LayoutList = {
      id: 1,
      title: '自定义视图',
      layout: [
        { x: 2, y: 0, w: 1, h: 6, i: 'user-info', moved: false },
        { x: 0, y: 0, w: 2, h: 4, i: 'todo', moved: false }
      ],
      widgetList: [
        { key: 'user-info', type: 1 },
        { key: 'todo', type: 1 },
        { key: 'my-app', type: 2 },
        { key: 'other', type: 2 }
      ]
    }

    localStorage.setItem('layout', JSON.stringify(layoutList))

    setTimeout(() => {
      resolve(layoutList)
    }, 200)
  })
}

export default function useLayoutRepositories() {
  const data = reactive<LayoutList>({
    id: 0,
    layout: [],
    widgetList: []
  })

  const fetching = ref<boolean>(true)

  const getLayoutList = async () => {
    fetching.value = true
    const res = await getLayoutListRepositories()
    data.id = res.id
    data.layout = res.layout
    data.widgetList = res.widgetList
    fetching.value = false
  }

  onMounted(getLayoutList)

  return {
    data,
    fetching,
    getLayoutList
  }
}
