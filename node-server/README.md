# My Express App

This is a simple Express server application that listens on port 8001. 

## Project Structure

```
my-express-app
├── src
│   └── index.js        # Entry point of the application
├── Dockerfile           # Dockerfile to build the server image
├── .dockerignore        # Files to ignore when building the Docker image
├── .gitignore           # Files to ignore in Git
├── package.json         # Project metadata and dependencies
├── yarn.lock            # Dependency version lock file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- Yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-nm2o7lbk.git
   cd Anythink-Market-nm2o7lbk/my-express-app
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Application

To start the server with automatic reloading, use:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t my-express-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 my-express-app
   ```

The server will be accessible at `http://localhost:8001` from your host machine.