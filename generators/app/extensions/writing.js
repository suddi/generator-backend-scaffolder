'use strict';

const Config = require('../config');

function getCopyFiles(additionalFiles) {
    const copyFiles = Config.get('DEFAULT_FILES');
    if (Array.isArray(additionalFiles)) {
        return copyFiles.concat(additionalFiles);
    }
    return copyFiles;
}

function getCI(selectedOption) {
    return Config.get('CI_OPTIONS')[selectedOption];
}

module.exports = function () {
    this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
            moduleName: this.props.moduleName,
            githubAccount: this.props.githubAccount
        }
    );

    const ci = getCI(this.props.ci);
    getCopyFiles([ci]).map(function (file) {
        this.fs.copy(
            this.templatePath(file),
            this.destinationPath(file)
        );
    }.bind(this));
};
