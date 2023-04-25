## Node.js Random Color Generator

Generate a block, approximately 31x9# characters, colored with random color on the command line.
There are 4 ways to get an answer:

## 1. Random Colored Block

Starts the program and creates a randomly generated color block:

```bash
$ node index.js
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       #ff72d2       #####
  #####                     #####
  ###############################
  ###############################
  ###############################
```

## 2. Provide Color And Luminosity Question For User:

If the user forgets which statements can be input, they can use 'ask':

```bash
$ node index.js ask
```

Outputs:
Which color would you like? Should the luminosity be dark or light?

## 3. Random Colored Block + Hue

Set the hue of the random generated color block, followed by 'red' or 'green' or 'blue':

```bash
$ node index.js red
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       #b72d42       #####
  #####                     #####
  ###############################
  ###############################
  ###############################
```

## 4. Random Colored Block + Hue + Luminosity

Set the luminosity of the random generated color block, followed by 'dark' or 'light' after the color statement:

```bash
$ node index.js blue dark
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       #023e8c       #####
  #####                     #####
  ###############################
  ###############################
  ###############################
```
