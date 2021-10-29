module.exports = {
  title: "Vivliostyle Base", // populated into 'publication.json', default to 'title' of the first entry or 'name' in 'package.json'.
  author: "kubosho", // default to 'author' in 'package.json' or undefined
  language: "ja",
  size: "B5",
  // theme: '', // .css or local dir or npm package. default to undefined
  entry: [
    "./entries/introduction.md", // 'title' is automatically guessed from the file (frontmatter > first heading)
    // {
    //   path: "epigraph.md",
    //   title: "おわりに", // title can be overwritten (entry > file),
    //   theme: "@vivliostyle/theme-whatever", // theme can be set indivisually. default to root 'theme'
    // },
    // "glossary.html", // html is also acceptable
  ], // 'entry' can be 'string' or 'object' if there's only single markdown file
  //   entryContext: "./manuscripts", // default to '.' (relative to 'vivliostyle.config.js')
  output: [
    // path to generate draft file(s). default to '{title}.pdf'
    "./out/pdf/book.pdf", // the output format will be inferred from the name.
    {
      path: "./out/webpub",
      format: "webpub",
    },
  ],
  workspaceDir: ".temp", // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  vfm: {
    // options of VFM processor
    hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
    //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  },
};
