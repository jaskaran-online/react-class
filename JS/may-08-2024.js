// https://excalidraw.com/#room=ff13f22e303e02a478e8,wRaWCNVdlFRjlKtnbxeCfA

const student = {
  personlinfo: {
    id: {
      id_Number: "12345",
      Name: "john",
    },
    DemoGraphics: {
      Age: 23,
      Gender: "Male",
      Nationality: "indian",
    },
  },
  academicinfo: {
    Enrollment: {
      "part-Time": "3 Hour",
      "full-Time": "9 Hour",
    },
    currentcourses: ["course-1", "course-2", "course-3"],
  },
  extraactivities: {
    club: {
      club1: "hhhh",
      club2: "mmmmmm",
    },
    sports: {
      sport1: "football",
      sport2: "hockey",
    },
    volunteering: {
      event1: "One",
      event: "two",
    },
  },
  contectinfo: {
    phonenumber: "456677",
    email: "john@gmail.com",
    address: {
      street: "left-street",
      city: "bombay",
      zipcode: "23456",
    },
  },
};
// console.log(student)
console.log(`
    ${student.extraactivities.club.club1} , ${student.academicinfo.currentcourses[2]} , ${student.extraactivities.volunteering.event1} ,${student.contectinfo.phonenumber}, ${student.contectinfo.address.city}
`);

console.log(student.personlinfo.id.Name);
