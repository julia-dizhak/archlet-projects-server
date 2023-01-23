const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    projectsForHome: [Project!]!
  }

  "A project is a group of Modules that teaches about a specific topic"
  type Project {
    id: ID!
    "The project's name"
    name: String!

    "The project's main details"
    category: String!
    type: String!

    length: Int @deprecated(reason: "Use durationInSeconds")

    "The track's full duration, in seconds"
    durationInSeconds: Int

    modulesCount: Int
    "The track's complete description, can be in markdown format"
    description: String

    "The number of times a track has been viewed"
    numberOfViews: Int

    "The project's complete array of Modules"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The module's title"
    title: String!

    "The track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")

    "The track's full duration, in seconds"
    durationInSeconds: Int

    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }
`;

module.exports = typeDefs;
