export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((value) => value.location === city);
  }
  return [];
}
