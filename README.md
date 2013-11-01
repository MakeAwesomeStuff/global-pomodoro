global-pomodoro
===============

Source code for www.globalpomodoro.com. A site that has a single instance of a pomodoro that anyone can start using.


To run
======

The following needs to be installed once for the build to work

1. NPM
2. RUBY (MAC will need BREW to install this)
3. COMPASS
4. yo (Yeoman.io)

Then run the following

1. npm install
2. bower install
3. grunt test # to test app
4. grunt server # to run app
5. grunt # to build app for deployment


TODO
====

- [ ] Design & Implement 'Work' state
- [ ] Design & Implement 'Rest' state
- [ ] Update controller to switch between & tests
- [ ] Create a timer to controll the states & tests
- [ ] Call http://www.timeapi.org/utc/now.json to determine start time & test
- [ ] Fall back to local time is timeapi fails & test
