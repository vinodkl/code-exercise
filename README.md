# Problem Statement

Netflix is investing a lot of effort into acquiring and creating beautiful artwork which is used throughout all of member experience on various devices. With a large global catalog and number of different images for a title, managing at scale is important. A non-technical operations team is responsible for acquisition and setup of artwork. Additionally, we have image algorithms that further augment the image metadata to detect actors, background tone etc.

The operations team needs a easy to use user interface that would allow it to quickly manage artwork across titles and sort/group/filter on various attributes (actors, background tone, similarity group etc. As part of this exercise please implement a functional UI that will help solve some of these challenges. 

Sample data model (json) is in `mock-data/data-model.json`. You can fill up `server/index.js` to return the json payload and use it in your UI components. We have limited the data model to contain only 1 type of image (“sdp”). You should assume that the service may return large volume of data (upwards of 1000s).

## UI should have following features: 
* View images (thumbnailURL) which are grouped by an attribute. There are 2 attributes on which user can select to group by - movieId & languageCode. Default would be group by movieId.
* Ability to zoom (fullSizeImageURL) in on a particular image and be presented with details view where all information from the data model is displayed.

### The preferred tech stack is React running on Node.js

Note: Please work and submit the exercise (including tests) similar to how you would send a pull-request to a fellow engineer in the team.
