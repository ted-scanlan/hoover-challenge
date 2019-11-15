
### Hoover Challenge ###

#### Introduction ####

This is a command line application that navigates an imaginary robotic hoover through an equally imaginary room, based on a set of instructions.


#### Setting up: ####

Clone this repository, then:

```
cd hoover_challenge
bundle install
```

To run the program:

Make sure you have node installed (you can check by entering node -v)

```
cd src
node index.js
```

To run tests:

Go to the root folder of the project, then run:

```
npm test
```

To give the program you own instructions, edit the 'input.txt' file in the src folder. Please follow these specific requirements when setting instructions:

- all coordinates should be written as two numbers seperated by a space.
* Line 1 should be the dimensions of the room you want to clean.
* Line 2 are the coordinates of the starting position of the hoover.
* You can then set the locations of the patches of dirt, by giving their coordinate locations, one per line.
* The last line



#### My Approach ####

I planned my approach by splitting down the tasks that would need to happen in order to get an outcome. These were:
 *  Taking a direction from the input
 * Checking that the position of the hoover remains in the boundary of the room
 * If it does, then updating the position of the hoover
 * Checking if a patch of dirt is located at the updated position of the hoover
 * If there is, then deleting that patch of dirt so it can no longer be found


I find it easier to think about things logically by simulating real world objects. While using classes in Javascript is not the same as object oriented programming, it does allow you to think similarly to as if you were using OO principles.


I think using a class constructor to create a hoover object was the most sensible approach, as storing the information about the dirt location and the hoovers position is something you need to continually use during the program and should therefore be stored as state properties.    (read up on class constructs and state etc in javascript).


Potential improvements:

Currently, setting the properties on the Hoover class with the input array is quite message. I think what would be better is if I format the input before I run it in the Hoover class. It would tidy things up and the make the code more readable (e.g. the getDirtCoords function wouldn't need to be in the Hoover class.)
