export default [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'xndb-client-web',
    entry: '//i.cqxndb.com/',
    container: '#xn-micro',
    activeRule: '/isms',
    props: {}
  },

  {
    name: 'xndb-oa-client',
    entry: '//o.cqxndb.com/',
    container: '#xn-micro',
    activeRule: '/oa',
    props: {}
  },

  {
    name: 'xndb-hr-client',
    entry: '//h.cqxndb.com/',
    container: '#xn-micro',
    activeRule: '/hr',
    props: {}
  },

  {
    name: 'xndb-pm-client',
    entry: '//p.cqxndb.com/',
    container: '#xn-micro',
    activeRule: '/pm',
    props: {}
  }

  // {
  //   name: 'xndb-client-web',
  //   entry: '//localhost:8000/',
  //   container: '#xn-micro',
  //   activeRule: '/isms',
  //   props: {}
  // }

  // {
  //   name: 'xndb-oa-client',
  //   entry: '//localhost:8010/',
  //   container: '#xn-micro',
  //   activeRule: '/oa',
  //   props: {}
  // },

  // {
  //   name: 'xndb-hr-client',
  //   entry: '//localhost:8012/',
  //   container: '#xn-micro',
  //   activeRule: '/hr',
  //   props: {}
  // },

  // {
  //   name: 'xndb-pm-client',
  //   entry: '//localhost:8011/',
  //   container: '#xn-micro',
  //   activeRule: '/pm',
  //   props: {}
  // }
]
