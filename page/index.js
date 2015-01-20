'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var jsonfile=require('jsonfile');

     
module.exports=yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
        this.env.options.appPath = "src";
        
        var sourceRoot = '../templates';
        this.sourceRoot(path.join(__dirname, sourceRoot));
     
        
    },

    prompting: function () {
        var done = this.async();

        //Teamsite User Name  
        var prompts = [{
            type: 'input',
            name: 'pagename',
            message: 'Please input Page Name:(this name will be used for naming your css/js file)',
            default: ""
    }, {
            type: 'list',
            name: 'pageType',
            message: 'What Page Type would you like to build?',
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
      },
                {
                    name: 'category',
                    value: 'category',
                    checked: false
      },
                {
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

            this.pagename = props.pagename;
            this.pageType = props.pageType;
            this.filename = this.pageType + "_" + this.pagename;


            done();
        }.bind(this));




    },
        writing: {
        app: function () {
//            this.fs.copy(
//                this.templatePath('_package.json'),
//                this.destinationPath('package.json')
//            );
//            this.fs.copy(
//                this.templatePath('_gulpfile.js'),
//                this.destinationPath('gulpfile.js')
//            );
//            this.fs.copy(
//                this.templatePath('_webpack.config.js'),
//                this.destinationPath('webpack.config.js')
//            );
        },
        setupEnv: function () {
            
            var filename=this.filename;
            
            
            this.template('_index.scss', this.env.options.appPath + '/css/' + this.filename + '.scss');
            this.template('_index.jsx', this.env.options.appPath + '/js/' + this.filename + '.jsx');
            this.template('pagetype/' + this.pageType + '.html', this.env.options.appPath + '/' + this.filename + '.html');
            
             //update page.json
            var pageJson = './page.json';
            jsonfile.readFile(pageJson, function(err, obj) {
                
                //update
                obj[filename]='./src/js/'+filename+'.jsx';
                console.log("update page.json for webpack");
                console.log(obj);
                //write page.json
                jsonfile.writeFile(pageJson, obj, function(err) {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("page.json updated");
                    }
                })
                
            });





        },
        projectfiles: function () {
//            this.fs.copy(
//                this.templatePath('editorconfig'),
//                this.destinationPath('.editorconfig')
//            );
//            this.fs.copy(
//                this.templatePath('jshintrc'),
//                this.destinationPath('.jshintrc')
//            );
//            this.fs.copy(
//                this.templatePath('gitignore'),
//                this.destinationPath('.gitignore')
//            );

        }


    },

    install: function () {
//        this.installDependencies({
//            skipInstall: this.options['skip-install']
//        });
    }
    
});