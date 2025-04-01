const yargs = require('yargs');
const { hideBin} = require('yargs/helpers');

const { initRepo} = require("./controllers/init");

const { addRepo } = require("./controllers/add");

const { commitRepo } = require("./controllers/commit");

const { pushRepo } = require("./controllers/push");

const { pullRepo } = require("./controllers/pull");

const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
.command('init', "Initialise a new repository" ,{} , initRepo )

.command('add <file>', "Add a file to the repository" , 
    (yargs)=>{
    yargs.positional("file", {
        describe: "File to add to the staging area",
        type: "string",
    });
},
 (argv) => {
    addRepo(argv.file); 
})

.command('commit <message>', "Commit the staged files" , 
     (yargs)=>{
        yargs.positional("message", {
            describe: "Commit message",
            type: "string",
        });
    },
    commitRepo)

.command('push', "Push the changes to the remote repository" , {} , pushRepo )

.command('pull', "Pull the changes from the remote repository" , {} , pullRepo )

.command('revert <commitID>', "Revert to a previous commit" ,
    (yargs)=>{
    yargs.positional("commit", {
        describe: "Commit hash to revert to",
        type: "string",
     });
   },
    revertRepo)

.demandCommand(1 , "You need atleast one command")
    .help().argv;