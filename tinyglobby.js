const tg = require("tinyglobby");

console.log(
  tg.globSync(
    tg.escapePath(
      `${process.cwd()}/test/fixtures/[special$directory]/(special-*file).txt`,
    ),
    {
      absolute: true,
      expandDirectories: false,
      cwd: `${process.cwd()}/test/fixtures/[special$directory]`,
    },
  ),
);
