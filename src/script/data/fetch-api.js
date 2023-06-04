/* eslint-disable consistent-return */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjujplctbdbrybujcfly.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdWpwbGN0YmRicnlidWpjZmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2MjE3ODIsImV4cCI6MjAwMTE5Nzc4Mn0.S5lDd5jFzWbIJHAgsZ0gOkrNAPhxWzoRi5Niwky0ocg';
const supabase = createClient(supabaseUrl, supabaseKey);

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

export const getRating = async () => {
  const { data: course, error } = await supabase
    .from('course')
    .select('rating')
    .gte('rating', 4.5)
    .lte('rating', 5);

  if (error) {
    console.log(error);
    return;
  }
  console.log(course);
  return course;
};