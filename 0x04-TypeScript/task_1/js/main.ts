// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index:string]: any,
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

interface Director extends Teacher {
  numberOfReport: number,
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReport: 17,
};
console.log(director1);


// Write a function printTeacher:
//              It accepts two arguments firstName and lastName
//              It returns the first letter of the firstName and the full lastName
//              Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.


interface printTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacherFunction: printTeacher = (firstName, lastName): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacherFunction('Haile', 'Melaku'));

// Write a Class named StudentClass:
//            The constructor accepts firstName(string) and lastName(string) arguments
//            The class has a method named workOnHomework that return the string Currently working
//            The class has a method named displayName. It returns the firstName of the student
//            The constructor of the class should be described through an Interface
//            The class should be described through an Interface

interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}
