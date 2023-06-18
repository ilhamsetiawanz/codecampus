import home from '../components/views/landing';
import lesson from '../components/views/lesson';
import Courses from '../components/views/course-list';
import aboutUs from '../components/views/about-us';
import ClassRoom from '../components/views/classrom';
import projects from '../components/views/project';

const routes = {
  '/': home,
  '/home': home,
  '/course': Courses,
  '/about': aboutUs,
  '/lesson/:id': lesson,
  '/classroom/:id': ClassRoom,
  '/project/:id': projects,
};

export default routes;