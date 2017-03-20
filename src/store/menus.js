export default [{
  path: '/index',
  name: 'Home',
  key: '001',
  isShow: true
}, {
  path: '/work',
  name: 'Work',
  key: '002',
  isShow: true
}, {
  path: '/map',
  name: 'Map',
  key: '003',
  isShow: true
}, {
  name: 'Games & Animate',
  key: '004',
  isShow: true,
  children: [
    {
      path: '#',
      name: 'Rotate',
      key: '004-1',
      isShow: true
    }, {
      path: '#',
      name: 'Canvas',
      key: '004-2',
      isShow: true
    }
  ]
}, {
  name: 'Submenu',
  key: '005',
  isShow: true,
  children: [
    {
      path: '#',
      name: '选项1',
      key: '005-1',
      isShow: true
    }, {
      path: '#',
      name: '选项1',
      key: '005-2',
      isShow: true
    }
  ]
}]
