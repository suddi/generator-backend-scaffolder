'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const Config = require('../generators/app/config');

describe('generator-backend-scaffolder:app', function () {
    before(function () {
        return helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                moduleName: 'test_module',
                githubAccount: 'user',
                description: 'Test Module',
                homepage: 'https://testmodule.io',
                authorName: 'User',
                authorEmail: 'user@testmodule.io',
                authorUrl: 'https://testmodule.io',
                keywords: 'test, module, user',
                ci: 'CircleCI',
                license: 'MIT'
            })
            .toPromise();
    });

    it('creates files', function () {
        assert.file(Config.get('DEFAULT_FILES'));
    });
});
