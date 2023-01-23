const mocks = {
  Query: () => ({
    projectsForHome: () => [...new Array(3)],
  }),
  Project: () => ({
    id: () => "project_01",
    name: () => "Test project separate graph",
    detail: () => {
      return {
        category: "Operation service",
        type: "ariba import" 
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 1,
  }),
};

module.exports = mocks;
