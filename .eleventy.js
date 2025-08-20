export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/fonts/");
    eleventyConfig.addPassthroughCopy("./src/CNAME");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}