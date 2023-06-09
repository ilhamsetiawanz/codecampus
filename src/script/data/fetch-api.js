/* eslint-disable consistent-return */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjujplctbdbrybujcfly.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdWpwbGN0YmRicnlidWpjZmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2MjE3ODIsImV4cCI6MjAwMTE5Nzc4Mn0.S5lDd5jFzWbIJHAgsZ0gOkrNAPhxWzoRi5Niwky0ocg';
const supabase = createClient(supabaseUrl, supabaseKey);

// Path API
export const getPath = async () => {
  const { data: pathCourse, error } = await supabase
    .from('pathCourse')
    .select('*');

  if (error) {
    console.log(error);
    return;
  }
  return pathCourse;
};

// Rating Course API
export const getRating = async () => {
  const { data: course, error } = await supabase
    .from('course')
    .select('*')
    .gte('rating', 4);

  if (error) {
    console.log(error);
    return;
  }

  return course;
};

// Course List API
export const getCourseList = async () => {
  const { data: course, error } = await supabase
    .from('course')
    .select('*');

  if (error) {
    console.log(error);
    return;
  }

  return course;
};

// Spesifik course berdasarkan ID
export const getCourses = async (id) => {
  const { data: course, error } = await supabase
    .from('course')
    .select(`
  *,
  materi (
    classId, title, courseId
  ),
  projects (
    id, title, courseId
  )
`)
    .eq('id', id);

  return course[0];
};

// materi API
export const getMateri = async (id) => {
  const { data: materi, error } = await supabase
    .from('materi')
    .select('*')
    .eq('classId', id);

  return materi[0];
};

// Project API
export const getProject = async (id) => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id);

  return projects[0];
};
// FaQ API

export const getFaq = async () => {
  const { data: FaQ, error } = await supabase
    .from('FaQ')
    .select('*');

  return FaQ;
};