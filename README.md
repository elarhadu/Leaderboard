<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# π Table of Contents

- [π About the Project](#about-project)
  - [π  Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [π Live Demo](#live-demo)
- [π» Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [π₯ Author](#author)
- [π­ Future Features](#future-features)
- [π€ Contributing](#contributing)
- [β­οΈ Show your support](#support)
- [π Acknowledgements](#acknowledgements)
- [π License](#license)

<!-- PROJECT DESCRIPTION -->

# π Leaderboard

In this project, I recreated a simple wireframe template for a Leaderboard. This simple web page was built using webpack and served by a webpack dev server.
## π  Built With <a name="built-with"></a>

<!-- Tech Stack -->
### Tech Stack <a name="tech-stack"></a>
- HTML
- CSS
- JavaScript (ES6)
- Webpack

<!-- Features -->

### Key Features <a name="key-features"></a>
- Used gitflow.
- Used ES6 modules, with import and export.
- Created an npm project with webpack.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## π Live Demo <a name="live-demo"></a>


- [πLeaderboard](https://elarhadu.github.io/Leaderboard/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## π» Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup <a name="setup"></a>

Clone this repository to your desired folder

### Prerequisites <a name="prerequisites"></a>

In order to run this project you need:
Git should be installed on your local machine to clone it using HTTP or SSH. Otherwise you can download the zip file.

You can clone this project by using the command below

Command : git clone git@github.com:elarhadu/Leaderboard.git


### Run project <a name="run-tests"></a>

```bash
$ npm install
$ npm start
```

### Open page in browser <a name="triangular_flag_on_post-deployment"></a>
```bash
$ open src/index.html
```
### To generate the game ID
```
const newGame = async () => {
  const gameTitle = {
    name: 'Space Runners',
  };

  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameTitle),
    },
  );

  const result = await response.json();
  console.log(result);
};
newGame();
```
### To fetch the data from the backend and render it to the front end
```
const fetchData = async () => {
  const gameId = 'copy id generated in the console';
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const result = await response.json();
  const data = result.result;
  displayBoard(data);
};
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Author <a name="author"></a>

π€ **Author**

- GitHub: [@elarhadu](https://github.com/elarhadu/)
- Twitter: [@elarh_](https://twitter.com/elarh_)
- LinkedIn: [Emmanuella Adu](www.linkedin.com/in/emmanuella-adu/)

<!-- FUTURE FEATURES -->

## π­ Future Features <a name="future-features"></a>

- I will implement a filter that utilizes the API to organize the results by score.
- I will add an error message if the user wants to add new items.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## π€ Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## β­οΈ Show your support <a name="support"></a>

If you like this project please give me a β­οΈ

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## π Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for the wireframe for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## π License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
