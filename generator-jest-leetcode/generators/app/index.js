const Generator = require('yeoman-generator');
const camelcase = require('camelcase');

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Leetcode problem name - copy from url prompt",
      }
    ]);

    this.leetcodeName = answers.name;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('case.js'),
      this.destinationPath(`problems/${this.leetcodeName}.js`),
      {
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('testcase.js'),
      this.destinationPath(`tests/${this.leetcodeName}.js`),
      {
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
  }
};
