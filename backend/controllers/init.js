const fs = require('fs').promises;
const path = require('path');

async function initRepo() {
    const repoPath = path.resolve(process.cwd(), '.mygit');
    const commitsPath = path.join(repoPath, 'commits');

    try{
       await fs.mkdir(repoPath, { recursive: true });
       await fs.mkdir(commitsPath, { recursive: true });
       await fs.writeFile(
        path.join(repoPath, 'config.json'),
        JSON.stringify({ bucket: "s3 bucket"})
    );
    console.log("Repository initialized successfully!");
}
    catch (error) {
        console.error("Error creating repository:", error.message);
    }
}

module.exports = { initRepo};