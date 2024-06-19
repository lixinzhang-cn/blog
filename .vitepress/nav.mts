export default [
    { text: 'Home', link: '/' },
    { text: 'Python', link: '/python/index' },
    {
      text: '前端',
      items: [
        {
          // 该部分的标题
          text: 'Vue',
          items: [
            { text: 'Vue3入门', link: '/vue/index' },
            { text: 'Pinia入门', link: '/vue/Pinia入门' }
          ]
        },
        {
          // 该部分的标题
          text: '项目部分',
          items: [
            { text: 'Vue3小兔鲜项目', link: '/project/1.项目起步' },
          ]
        }
      ]
    },
    { text: 'Examples', link: '/markdown-examples' }
  ]