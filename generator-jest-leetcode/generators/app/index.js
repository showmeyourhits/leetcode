const Generator = require('yeoman-generator');
const camelcase = require('camelcase');

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "list",
        choices: ["Typescript", "Javascript"],
        name: "language",
        default: "Typescript"
      },
      {
        type: "input",
        name: "name",
        message: "Leetcode problem name - copy from url prompt",
      }
    ]);

    this.leetcodeName = answers.name;
    this.language = answers.language;
  }

  writing() {
    const extension = this.language === "Typescript" ? 'ts' : 'js';

    this.fs.copyTpl(
      this.templatePath(`case.${extension}`),
      this.destinationPath(`problems/${this.leetcodeName}.${extension}`),
      {
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
    this.fs.copyTpl(
      this.templatePath(`testcase.${extension}`),
      this.destinationPath(`tests/${this.leetcodeName}.${extension}`),
      {
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
  }
};
