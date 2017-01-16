# Problem Statement

Netflix is investing a lot of effort into acquiring and creating beautiful artwork which is used throughout all of member experience on various devices. With a large global catalog and number of different images for a title, managing at scale is important. A non-technical operations team is responsible for acquisition and setup of artwork. Additionally, we have image algorithms that further augment the image metadata to detect actors, background tone etc.

The operations team needs a easy to use user interface that would allow it to quickly manage artwork across titles and sort/group/filter on various attributes (actors, background tone, similarity group etc. As part of this exercise please implement a functional UI that will help solve some of these challenges.

Sample data model (json) is in `server/data/artwork.json`. You can fill up `server/index.js` to return the json payload and use it in your UI components. We have limited the data model to contain only 1 type of image (“sdp”). You should assume that the service may return large volume of data (upwards of 1000s).

## UI should have following features:
* View images (thumbnailURL) which are grouped by an attribute. There are 2 attributes on which user can select to group by - movieId & languageCode. Default would be group by movieId.
* Ability to zoom (fullSizeImageURL) in on a particular image and be presented with details view where all information from the data model is displayed.

### The preferred tech stack is React running on Node.js

Note: Please work and submit the exercise (including tests) similar to how you would send a pull-request to a fellow engineer in the team.

# Netflix Artworks

## Instructions

**Install the dependencies:**

```npm install```

**To run in Development mode use:**

```npm start```

This will start the API Server, bundle the assets (js, jsx) in memory using Webpack and will start webpack-dev-server with hot reload capabilities.

A new window will automatically open in your browser on http://localhost:9000, and all backend calls will be proxied to the API Server on http://localhost:3000.

ESLint will run and tests will be in watch mode.

**To run in Production mode use:**

```npm run build```

This will run eslint, tests and bundle the application in a single file called bundle.js under .dist/.

```npm run server```

This will start the Express server responsible for both serving Application files and Artwork APIs.

Open your browser at  http://localhost:3000.

**To run tests use:**

```npm run test```, ```npm run test:watch``` to be in watch mode.

## Application Capabilities

The Netflix Artworks App allows the user to see a list of Artworks paginated, and grouped by a category of his choice, currently supporting movieId and languageCode.

Clicking in one of the Artworks in the list will allow the user to see the Artwork details containing:
* Full size image.
* Movie Id.
* Movie Name.
* Image Type.
* Language Code.

The Artwork details page can also be accessed directly using the route http://SERVER_URL/artwork/:languageCode/:movieId.

For example running in Production mode try accessing: http://localhost:3000/artwork/nl/70140358

**The application is responsive, being usable from smartphones, tablets, laptops and desktops.**

## Application Architecture

The Netflix Artwork Application uses Facebook's ReactJS to build its User Interface, based on Google's Material UI and Express as its WebServer to serve static files and RestAPIs.

The Front-end piece of the Application is implemented using the Flux pattern throughout the state management library Redux.

Application State:
```
{
  app: {
    groupBy: 'movieId', // artworks default grouped by movieId
    offset: 1 // pagination
  },
  artworks: {}
  // artwork object is a map of objects where the key is the grouping
  // information. The value is another object normalized by the grouping value
  // for fast access to the data.
};
```

Other important libraries:
* react-router for routing.
* webpack for bundling the application.
* babel for transpiling.
* enzyme for component testing.
