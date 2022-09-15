# Celo Marketplace Dapp

![](img/devApes.mp4)

## Description

This is a GoFundMe Page built on the celo Blockchain:

- Recieves Contribution from Well Wishers;
- Once the Amount To Be Funded is reached, The Contribute Button is De-activated;
- Tracks the Number of People Who have Contributed;
- You can contibute Multiple times but the funders List is only updated Once;
- Keeps track of the Balance remaining to be contributed;

The concept here is the ability to be able to keep track of the funders and once the target has been reached, the fundme won't be able to recieve any more funds. Also, the Contribute button is taken down. The Novelty is the choice for a person to be able to fund a project with any amount. nothing is too little.

## Smart Contract Functionality Added

- Included a Mapping with in a struct
- Included an Array within a Struct
- Keeping Track of Funders
- Included Modifiers to Check for where or Not the Project Has been Funded
- Storage vs Memory when Using Structs, Where and When

## Front End Functionality Added

- Included a Modal for the Input of the amount You Intead to contribute
- Conditional Display of the Contribute Button Depending on the Balance remaining
- A Tag to show projects that are being Funded Against those that Are already Funded
- Display Number of Funders
- Center align of the GoFundMe Button

## TODO

- beautify the layout
- create admin pages
- include an option for a person to live a note.

## Live Demo

Checkout the Live Demo Of the Project Hear [GoFundMe](https://eliashezron.github.io/celoGoFundMe/)

## Usage

### Requirements

1. Install the Metamask wallet
2. Create a wallet.
3. Go to [https://celo.org/developers/faucet](https://celo.org/developers/faucet) and get tokens for the alfajores testnet.
4. Switch to the alfajores testnet in the Metamask.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
