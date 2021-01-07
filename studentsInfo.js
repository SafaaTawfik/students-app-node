const fs = require("fs");

//Load all students from studentsInfo.json into an array

const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync("studentsInfo.json").toString();
        return JSON.parse(dataBuffer);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
        }
        return [];
    }
};

//List all stydents

const listStudents = () => {
    const allstudents = loadStudents();
    allstudents.forEach(student => {
        console.log('Name is : ' + student.name + ' , Grade = ' + student.grade);
    });
}

//Get Student Info by ID
const getStudent = (id) => {
    const allstudents = loadStudents();
    const student = allstudents.find((student) => {
        return student.id === id;
    });

    if (student) {
        console.log('student name = ' + student.name + ' , Grade = ' + student.grade);
    }
    else {
        console.log('No Student found with id = ' + id);
    }
}

const addStudent = (id, name, grade, comment) => {

    const allStudents = loadStudents();

    const duplicateStudent = allStudents.filter(function (student) {
        return student.id === id
    })
    if (duplicateStudent.length === 0) {
        allStudents.push({
            id, name, grade, comment
        })
        saveStudents(allStudents)
        console.log('Saved Successfully')
    }
    else {
        console.log('Error Duplicate id')
    }

}

//Delete Student 

const deleteStudent = (id) => {
    const allStudents = loadStudents();
    const studentsToKeep = allStudents.filter(function (students) {
        return students.id !== id;
    });
    if (studentsToKeep.length < allStudents.length) {
        saveStudents(studentsToKeep)
        console.log('Student with id = ' + id + ' deleted');
    }
    else {
        console.log('No Student found with id = ' + id)
    }
}

const updateStudent = (id, name, grade, comment) => {
    const allStudents = loadStudents();
    //find the student with the given id to be updated
    let targetstudent = allStudents.find((student) => {
        return student.id === id;
    });
    if (targetstudent) {
        targetstudent.name = name;
        targetstudent.grade = grade;
        targetstudent.comment = comment;

        const studentsToKeep = allStudents.filter(function (students) {
            return students.id !== id;
        });

        studentsToKeep.push(targetstudent);
        saveStudents(studentsToKeep);
        console.log('Student with id = ' + id + ' Updated');
    }
    else {
        console.log('No Student found with id = ' + id)
    }

}
//Save students
const saveStudents = (allstudents) => {
    fs.writeFileSync('studentsInfo.json', JSON.stringify(allstudents))
}


module.exports = {
    listStudents: listStudents,
    getStudent: getStudent,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent

}
