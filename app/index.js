'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
        this.env.options.appPath = "src";
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('Rakuten Yo') + ' F2E project generator!'
        ));

        //Teamsite User Name  
        var prompts = [{
            type: 'input',
            name: 'username',
            message: 'Please input your Teamsite user name:',
            default: ""
    }, {
            type: 'input',
            name: 'password',
            message: 'Please input your Teamsite password:',
            default: ""
    }, {
            type: 'list',
            name: 'pageType',
            message: 'What Page Type would you like?',
            choices: [{
                    name: 'ad',
                    value: 'ad',
                    checked: false
      }, {
                    name: 'brand',
                    value: 'brand',
                    checked: false
      },
                {
                    name: 'brand-ave',
                    value: 'brand-ave',
                    checked: false
      },
                {
                    name: 'books',
                    value: 'books',
                    checked: false
      }, {
                    name: 'ec',
                    value: 'ec',
                    checked: false
      }, {
                    name: 'event',
                    value: 'event',
                    checked: false
      },
                {
                    name: 'info',
                    value: 'info',
                    checked: false
      }, {
                    name: 'topic',
                    value: 'topic',
                    checked: false
      }, {
                    name: 'magazine',
                    value: 'magazine',
                    checked: false
      },
                {
                    name: 'policy',
                    value: 'policy',
                    checked: false
      },
                {
                    name: 'ranking',
                    value: 'ranking',
                    checked: false
      }
               ]
    }];

        this.prompt(prompts, function (props) {
            this.username = props.username;
            this.password = props.password;
            this.pageType = props.pageType;
            
            
            console.log(this.pageType);





            done();
        }.bind(this));




    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
            this.fs.copy(
                this.templatePath('_gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
            this.fs.copy(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
        },
        setupEnv: function () {
            this.mkdir(this.env.options.appPath);
            this.mkdir(this.env.options.appPath + '/js');
            this.mkdir(this.env.options.appPath + '/js/constants');
            this.mkdir(this.env.options.appPath + '/js/actions');
            this.mkdir(this.env.options.appPath + '/js/components');
            this.mkdir(this.env.options.appPath + '/js/mixins');
            this.mkdir(this.env.options.appPath + '/js/stores');          
            this.mkdir(this.env.options.appPath + '/css');
            this.mkdir(this.env.options.appPath + '/img');
            
            
            this.template('_page.json','page.json');
            
            this.template('_index.jsx',this.env.options.appPath+'/js/'+this.pageType +'-demo.jsx');
            
            this.template('_stores.js',this.env.options.appPath+'/js/stores/stores.js');
            
            this.template('_actions.js',this.env.options.appPath+'/js/actions/actions.js');
                this.template('_constants.js',this.env.options.appPath+'/js/constants/constants.js');
            
            
            this.fs.copy(
                this.templatePath('pagetype/'+ this.pageType +'.html'),               this.destinationPath(this.env.options.appPath+'/'+this.pageType+'-demo.html')
            );
            
          
            
            
            
        },
        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );

        }


    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});