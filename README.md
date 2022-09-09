<p align="center">
  <h3 align="center">TURL</h3>
  <h5 align="center">formerly yals.ml</h5>

  <p align="center">
    Tiny URL
    <br/>
    <br/>
    <a href="https://turl.vercel.app">Visit</a>
    .
    <a href="https://github.com/SatvikG7/turl/issues">Report Bug</a>
    .
    <a href="https://github.com/SatvikG7/turl/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/deployments/SatvikG7/turl/production?label=vercel&logo=vercel&logoColor=white) ![Contributors](https://img.shields.io/github/contributors/SatvikG7/turl?color=dark-green) ![Issues](https://img.shields.io/github/issues/SatvikG7/turl) ![License](https://img.shields.io/github/license/SatvikG7/turl)

## Table Of Contents

-   [Table Of Contents](#table-of-contents)
-   [About The Project](#about-the-project)
-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Requirements](#requirements)
    -   [Installation](#installation)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
    -   [Creating A Pull Request](#creating-a-pull-request)
-   [License](#license)
-   [Authors](#authors)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Authors](#authors)

## About The Project

![Screenshot](https://raw.githubusercontent.com/SatvikG7/turl/master/public/screenshot.jpeg)

There are tons of link shorteners present on internet today, however, they do not let you create custom link or they limit them till some extent, but turl(yals) will soon let you create custom branded links for free, until my Fauna database doesn't run out of space :smile:

Here's why you should you turl:

-   Most clear interface ever.
-   No ads till now.
-   99.99% uptime.

## Built With

-   Nextjs
-   Tailwaind CSS
-   FaunaDB
-   GraphQL

## Deployed on

-   [Vercel](https://vercel.com)

## Getting Started

Here is how you can get started with the project locally

### Requirements

-   node
-   npm or yarn (prefer yarn)

### Installation

1. Clone the repo

    ```
    git clone https://github.com/SatvikG7/turl
    ```

2. Install NPM packages

    ```
    npm install
    # or
    yarn install
    ```

3. Create `.env.local` in root directory of project

4. Setup FaunaDb

    - Create FaunaDB database
    - Upload schema.gql in fauna db graphql tab
    - Upload shell.fql to fauna db shell tab

5. Enter your API keys in `.env.local`

```
NODE_ENV=development
BASE_URL=http://localhost:3000
FAUNADB_SECRET=<FAUNADB_SECRET>

# Optional if you want to generate sitemap

VERCEL_API_URL=https://api.vercel.com/v6/deployments?teamId=<YOUR_TEAM_ID_OR_USERNAME>
VERCEL_API_TOKEN=<VERCEL_API_TOKEN>
```

6. Start dev server

```
npm run dev
# or
yarn dev
```

## Roadmap

See the [open issues](https://github.com/SatvikG7/turl/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

-   If you have suggestions for adding or removing features, feel free to [open an issue](https://github.com/SatvikG7/turl/issues/new) to discuss it, or directly create a pull request with necessary changes.
-   Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/SatvikG7/turl/blob/main/LICENSE) for more information.

## Authors

-   **Satvik Gaikwad** - [Satvik Gaikwad](https://github.com/SatvikG7/)
