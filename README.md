# Demo for three.js
by Mikhail Maksimov

three.js is a graphics library that builds upon WebGL to make it easier for web-developers create 3D graphics in the browser.

If you want to start using three.js, you will need to download the three.js libraries (which are over 340MB in size). You can put the entire folder in your project folder, or copy only the files that you need from the libraries into a folder in your project. The other option would be to use a package manager like npm to install the three.js module in your project.

All of the configuration and logic for three.js will be done in your own javascript file. I named my file main.js for this demo. Look through the file to see exactly how I created my 3D scene. You will notice that you can rotate around my object while pressing the left mouse button, and pan while holding shift. This functionality is part of OrbitControls.js, which is also part of the libraries.