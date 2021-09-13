export type MicroMenu = {
  title: string
  name: string
  icon: string
  type: 'single' | 'micro'
}

const menus: Array<MicroMenu> = [
  {
    title: '工作台',
    name: 'home',
    icon: 'build',
    type: 'single'
  },
  {
    title: '综合业务',
    name: 'xndb-client-web',
    type: 'micro',
    icon: 'hdd'
  },
  {
    title: 'OA系统',
    name: 'xndb-oa-client',
    type: 'micro',
    icon: 'inbox'
  },
  {
    title: '人力资源',
    name: 'xndb-hr-client',
    type: 'micro',
    icon: 'appstore'
  },
  {
    title: '党建',
    name: 'xndb-pm-client',
    type: 'micro',
    icon: 'build'
  }
]

export default menus
