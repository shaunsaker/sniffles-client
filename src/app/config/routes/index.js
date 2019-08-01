import app from '../app';
import SEO from '../SEO';

const getTitle = (page) => {
  const title = `${page} | ${app.name}`;

  return title;
};

const routes = {
  login: {
    title: getTitle('Login'),
    description: SEO.description,
    href: '/login',
  },
  dashboard: {
    title: getTitle('Dashboard'),
    description: SEO.description,
    href: '/dashboard',
  },
  devic: {
    title: getTitle('Device'),
    description: SEO.description,
    href: '/device',
  },
};

export default routes;
