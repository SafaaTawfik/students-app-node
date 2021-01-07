const studentsInfo = require('./studentsInfo')
const yargs = require('yargs');


// List all Students

yargs.command({
    command: 'list',
    describe: 'List all Students',
    handler: function () {
        studentsInfo.listStudents();
    }

})

// Get Student by ID

yargs.command({
    command: 'get',
    describe: 'Read Student by ID',
    builder: {
        id: {
            describe: 'ID of Student',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        //  notes.readNote(argv.title)
        console.log('Read Student by ID ' + argv.id);
    }

})

// Add new Student
yargs.command({
    command: 'add',
    describe: 'Add student',
    builder: {
        id: {
            describe: 'ID of Student',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'Name of Student',
            demandOption: true,
            type: 'string'
        },
        grade: {
            describe: 'Grade of Student',
            demandOption: true,
            type: 'number'
        },
        comment: {
            describe: 'Comment on the Student',
            type: 'string'
        },
    },
    handler: function (argv) {
        // notes.addNote(argv.title, argv.body)
        console.log('add handler');
        console.log(argv.id + ' , ' + argv.name + ' , ' + argv.grade + argv.comment)
    }

});

// Delete Student by ID
yargs.command({
    command: 'delete',
    describe: 'Delete Student by ID',
    builder: {
        id: {
            describe: 'ID of Student',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function (argv) {
        //notes.removeNote(argv.title)
        console.log('Delete Student by ID');
    }

})





//console.log(yargs.argv);

yargs.parse();
