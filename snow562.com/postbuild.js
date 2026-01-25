const { exec } = require('child_process');
const fs = require('fs-extra');

async function runPostbuild() {
  try {
    // Run next-sitemap
    exec('next-sitemap', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error running next-sitemap: ${stderr}`);
        return;
      }
      console.log(`next-sitemap output: ${stdout}`);

      // Copy files to avoid issue with "/" at the end of URI idk why it keeps happening
      fs.copy('out/projects.html', 'out/projects/index.html')
        .then(() => {
          console.log('File copied successfully!');
        })
        .catch(err => {
          console.error('Error copying projects.html:', err);
        });

      fs.copy('out/writeups.html', 'out/writeups/index.html')
        .then(() => {
          console.log('File copied successfully!');
        })
        .catch(err => {
          console.error('Error copying writeups.html', err);
        });

    });
  } catch (error) {
    console.error('Error in postbuild script:', error);
  }
}

runPostbuild();