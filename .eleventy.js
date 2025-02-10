
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); // Keeps styles available

  return {
      dir: {
          input: "site",  // ✅ Matches your new "site" directory
          includes: "_includes",
          layouts: "_layouts",
          data: "_planetData",  // ✅ Matches your new planet data folder
          output: "_site"
      }
  };
};
