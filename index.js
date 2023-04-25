import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();

if (process.argv.length < 3) {
  console.log(
    chalk.hex(color)(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${color}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
} else if (process.argv[2] === 'ask') {
  console.log(
    'Which color would you like? Should the luminosity be dark or light?',
  );
} else if (process.argv.length < 4) {
  console.log(
    chalk.hex(randomColor({ hue: process.argv[2] }))(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${randomColor({ hue: process.argv[2] })}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
} else {
  console.log(
    chalk.hex(
      randomColor({ hue: process.argv[2], luminosity: process.argv[3] }),
    )(
      `    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${randomColor({
      hue: process.argv[2],
      luminosity: process.argv[3],
    })}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`,
    ),
  );
}
