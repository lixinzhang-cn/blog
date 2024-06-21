export default [
    { text: 'Home', link: '/' },
    // { text: 'Python', link: '/python/index' },
    { text: 'Python', 
      items:[
        {
          text:'Python',
          items:[
            {text:'python基础',link:'/python/index'}
          ]
        },
        {
          text:'Flask',
          items:[
            {text:'Flask基础',link:'/python/index'}
          ]
        }
      ]
    },
    {
      text: '前端',
      items: [
        {
          // 该部分的标题
          text: 'Vue3',
          items: [
            { text: 'Vue3入门', link: '/vue/index' },
            { text: 'Pinia入门', link: '/vue/Pinia入门' }
          ]
        },
        {
          // 该部分的标题
          text: 'Layui',
          items: [
            { text: 'layui 实现注册功能', link: '/layui/01.register-case' },
            { text: 'layui 实现学员信息案例', link: '/layui/02.table-case' }
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