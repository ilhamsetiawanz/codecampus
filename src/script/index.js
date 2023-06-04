/* eslint-disable new-cap */
import { getPath } from './data/fetch-api';
import { pathCourse } from './components/webpages/pathCourse';

getPath();

const mainsection = document.getElementById('main-Content');
const dummy = new pathCourse();
mainsection.appendChild(dummy);