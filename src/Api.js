export default new Proxy({
  baseUrl: 'api',
  endpoints: {
    parseConcepts(data) {
      return {
        method: 'post',
        url: '/concepts',
        data,
      };
    },
    createConcept(data) {
      return {
        method: 'put',
        url: '/concepts',
        data,
      };
    },
    conceptList() {
      return {
        method: 'get',
        url: '/concepts',
      };
    },
    deleteConcept(id) {
      return {
        method: 'delete',
        url: `/concepts`,
        data: { id },
      };
    },
  }
}, {
  get(target, prop) {
    if (prop in target.endpoints) {
      return (data) => {

        const
          endpoints = target.endpoints,
          func = endpoints[prop],
          req = func(data),
          url = `${target.baseUrl}${req.url}`
        ;

        const options = {
          method: req.method || 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (req.data) {
          options.body = JSON.stringify(req.data);
        }

        return fetch(url, options);
      };
    }
  },
});