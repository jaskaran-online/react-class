const studentData = [
    {
        "student_id": "123456",
        "name": "John Doe",
        "age": 20,
        "courses": [
            {
                "course_id": "CSCI101",
                "course_name": "Introduction to Computer Science",
                "credits": 3,
                "grades": [
                    {
                        "semester": "Spring 2023",
                        "grade": "A"
                    },
                    {
                        "semester": "Fall 2023",
                        "grade": "B+"
                    }
                ]
            },
            {
                "course_id": "MATH201",
                "course_name": "Calculus I",
                "credits": 4,
                "grades": [
                    {
                        "semester": "Spring 2023",
                        "grade": "A-"
                    },
                    {
                        "semester": "Fall 2023",
                        "grade": "A"
                    }
                ]
            }
        ],
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zipcode": "12345"
        },
        "contact_info": {
            "email": "john.doe@example.com",
            "phone": "123-456-7890"
        }
    },
    {
        "student_id": "789012",
        "name": "Jane Smith",
        "age": 22,
        "courses": [
            {
                "course_id": "ENG101",
                "course_name": "English Composition",
                "credits": 3,
                "grades": [
                    {
                        "semester": "Spring 2023",
                        "grade": "A-"
                    },
                    {
                        "semester": "Fall 2023",
                        "grade": "A"
                    }
                ]
            },
            {
                "course_id": "HIST201",
                "course_name": "World History",
                "credits": 4,
                "grades": [
                    {
                        "semester": "Spring 2023",
                        "grade": "B+"
                    },
                    {
                        "semester": "Fall 2023",
                        "grade": "A-"
                    }
                ]
            }
        ],
        "address": {
            "street": "456 Oak St",
            "city": "Othertown",
            "state": "NY",
            "zipcode": "54321"
        },
        "contact_info": {
            "email": "jane.smith@example.com",
            "phone": "987-654-3210"
        }
    }
];

console.log(studentData)

console.log(studentData[0])

// console.log(
//     studentData[0].name + ", "
//     + studentData[0].courses[0].course_name + ", "
//     + studentData[0].courses[0].grades[0].semester + ", Grade :"
//     + studentData[0].courses[0].grades[0].grade + ", " + studentData[0].contact_info.email
// )

console.log(studentData[0].name + ", "
    + studentData[0].courses[0].course_name + ", "
    + studentData[0].courses[1].course_name + ", "
    + studentData[0].courses[0].grades[0].semester + ", Grade :"
    + studentData[0].courses[0].grades[1].semester + ", Grade :"
    + studentData[0].courses[0].grades[0].semester + ", Grade :"
    + studentData[0].courses[1].grades[1].semester + ", Grade :"
    + studentData[0].courses[0].grades[0].grade + ", " + studentData[0].contact_info.email)