/**
 * Write an interface named Studentthat accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */

const student1: Student = {
  firstName: 'Haile',
  lastName: 'Melaku',
  age: 25,
  location: 'Ethiopia',
}

const student2: Student = {
  firstName: 'Birku',
  lastName: 'Girma',
  age: 24,
  location: 'Ethiopia',
}

const studentsList: Student[] = [
  student1,
  student2,
];

function renderTable(studentsList: Student[]): void {
  console.log("FirstName    LastName    Age    Location");
  studentsList.map((person: Student) => {
    console.log(`${person.firstName}    ${person.lastName}    ${person.age}    ${person.location}`);
  });
}
