import blog from '../components/views/blog';
import home from '../components/views/landing';
import lesson from '../components/views/lesson';

const routes = {
  '/': home,
  '/blog': blog,
  '/home': home,
  '/lesson/:id': lesson,
};

export default routes;