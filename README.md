
# Hoover Challenge #

### Introduction ###

This is a command line application that navigates an imaginary robotic hoover through an equally imaginary room, based on a set of instructions. Built using Nodejs and Jest for testing.


### Setting up: ###

Clone this repository, then enter:

```
cd hoover_challenge
bundle install
```

Make sure you have node installed (you can check by entering node -v)


### To run the program: ###

```
cd src
node index.js
```

To run tests:

Go to the root folder of the project, then run:

```
npm test
```

### Input/Output ###

The information that will be passed into the program can be found in the 'input.txt' file in the src folder. The default settings are as follows:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

To give the program your own instructions, edit the 'input.txt' file. However, when doing so please follow these specific requirements:

* All coordinates should be written as two numbers separated by a space.
* Line 1 should be the dimensions of the room you want to clean.
* Line 2 are the coordinates of the starting position of the hoover.
* After this, You can then set the locations of the patches of dirt, by giving their coordinate locations, one per line.
* The last line should contain the directions, using capital letters with no spacing (N for North, S for South, E for East, W for West).


#### My Approach ####

I planned my approach by splitting down the tasks that would need to happen in order to get an outcome. These were:
 * Taking a direction from the input
 * Checking that the position of the hoover remains in the boundary of the room
 * If it does, then updating the position of the hoover
 * Checking if a patch of dirt is located at the updated position of the hoover
 * If there is, then deleting that patch of dirt so it can no longer be found.

I decided to use class constructors to model my solution as a hoover needs to store instructions, and it made sense to use a more object oriented approach in order to do this. ES6 classes give you a convenient syntax for defining the state and behaviour of objects.

I then split down the responsibilities of the hoover class into smaller methods, writing unit tests for each one.

I then thought about the easiest way to load the instructions from the raw data into the hoover class. I decided to make a 'program' class in order to do this, which essentially creates an instance of hoover and loads it with the required instructions and directions.
