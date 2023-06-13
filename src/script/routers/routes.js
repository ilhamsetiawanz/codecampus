import blog from '../components/views/blog';
import home from '../components/views/landing';
import lesson from '../components/views/lesson';
import Courses from '../components/views/course-list';
import ClassRoom from '../components/views/classrom';

const routes = {
  '/': home,
  '/home': home,
  '/blog': blog,
  '/course': Courses,
  '/lesson/:id': lesson,
  '/classroom/:id': ClassRoom,
};

export default routes;