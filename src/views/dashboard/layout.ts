// export default  {
//   sm: [
//     { x: 0, y: 1, w: 3, h: 4, i: 'todo' },
//     { x: 0, y: 0, w: 3, h: 6, i: 'user-info' },
//     { x: 0, y: 2, w: 3, h: 5, i: 'my-app' },
//     { x: 0, y: 3, w: 3, h: 3, i: 'other' }
//   ],
//   lg: [
//     { x: 0, y: 0, w: 2, h: 4, i: 'todo' },
//     { x: 2, y: 0, w: 1, h: 6, i: 'user-info' },
//     { x: 0, y: 1, w: 2, h: 5, i: 'my-app' },
//     { x: 2, y: 1, w: 1, h: 3, i: 'other' }
//   ]
// }

export type LocalLayout = 'default' | 'custom'

export type LayoutItem = {
  x?: number
  y?: number
  w?: number
  h?: number
  i?: string
  moved?: boolean
}

export type Widget = {
  label?: string
  key?: string
  type?: 1 | 2
}

export type LayoutList = {
  id?: number
  title?: string
  widgetList: Array<Widget>
  layout: Array<LayoutItem>
}

export default [
  { x: 0, y: 0, w: 2, h: 4, i: 'todo' },
  { x: 2, y: 0, w: 1, h: 6, i: 'user-info' },
  { x: 0, y: 1, w: 2, h: 5, i: 'my-app' },
  { x: 2, y: 1, w: 1, h: 3, i: 'other' }
]
