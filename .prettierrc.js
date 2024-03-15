export default {
  overrides: [
    {
      files: ["slides.md"],
      options: {
        parser: "slidev",
        plugins: ["prettier-plugin-slidev"],
      },
    },
  ],
};
