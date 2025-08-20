const routes = {
  home: '/',
  about: '/about',
  blog: (id = ':id') => `/blog/${id}`,
  contact: '/contact',
};

export default routes;