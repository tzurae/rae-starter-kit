export default (store) => ({
  path: 'trip',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./create').default(store),
        // require('./manage').default(store),
        require('./menu').default(store),
      ])
    })
  },
})
