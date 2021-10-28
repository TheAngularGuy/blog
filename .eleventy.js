module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addFilter('postDate', (date) => {
    return new Date(date).toDateString();
  })

  return {
    dir: {
      includes: "includes",
      input: "src",
      output: "public"
    }
  }
};
