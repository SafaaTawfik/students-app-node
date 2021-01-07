const fs = require("fs");
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

const listStudents = () => {
    const allstudents = loadStudents()
    allstudents.forEach(student => {
        console.log('Name is : ' + student.name + ' , Grade = ' + student.grade);
    });
}


module.exports = {
    listStudents: listStudents

}
