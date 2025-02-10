module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); 

  return {
      dir: {
          input: "site",  
          includes: "_includes",
          layouts: "_layouts",
          data: "_planetData",  
          output: "_site"
      }
  };
};
