export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/fonts/everyday_ample.ttf");
    eleventyConfig.addPassthroughCopy("./src/fonts/everyday_ample_black.ttf");
    eleventyConfig.addPassthroughCopy("./src/fonts/everyday_ample_bold.ttf");
    eleventyConfig.addPassthroughCopy("./src/CNAME");

    eleventyConfig.addWatchTarget("./src/css/");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}