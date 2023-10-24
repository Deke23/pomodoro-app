# Pomodoro Timer

The pomodoro Technique is a time management method developed by Francesco Cirillo in the 
late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 munites in length, seperated by short breaks. These intervals are known as "pomodoros", the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.

The goal of this project is to create a simple pomodoro timer app that plays binaural wave sound in the background during focus periods. The timer should have the following features : 

-A 25-minute focus period followed by a 5-minute break period.
-A Longer 15-minute break period after every fourth focus period.
-A visual countdown timer that displays the remaining time in minutes and seconds.
-A sound effect that plays at the end of each focus period and break period.
-The ability to pause and resume the timer.
-The ability to reset the timer.

The binaural wave sound should be played in the background during the focus periods to help users stay focused and productive. The sound should be played at a low volume so as not to be distracting.

## Installation

To get started with this project, you'll need to have Node.js and npm installed on your computer. You can download and install Node.js from the official website.

Once you have Node.js installed, you can clone this repository and install its dependecies by running:
git clone https://github.com/your-username/pomodoro.git cd pomodoro npm install

## Usage

To start the development server, run:
npm start

This will start the development server and open the app in your default browser.

To build a production-ready version of your app, run:
npm run build

This will create an optimized build of your app in the 'build' directory.

## Testing

To test your app, you can use Jest and react testing library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
