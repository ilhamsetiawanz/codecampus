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
    .gte('rating', 4); // Dengan Memanipulasi nilai pada rating kita dapat mengatur batasan dari rating yang ada

  if (error) {
    console.log(error);
    return;
  }
  console.log(course);
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
  console.log(course);
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

  console.log(course[0]);
  return course[0];
};

// materi API
export const getMateri = async (id) => {
  const { data: materi, error } = await supabase
    .from('materi')
    .select('*')
    .eq('classId', id);

  console.log(materi[0]);
  return materi[0];
};

// Blog API
export const getBlogs = async () => {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*');

  console.log(blogs);
};