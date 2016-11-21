const yeoman = require('yeoman-generator');
var yosay = require('yosay');

class AppGenerator extends yeoman.Base {
	//
	constructor(args, options) {
		super(args, options);

		this.option('skip-install');
	}

	initializing() {
		this.log('initializing');
		if(!this.options['skip-welcome-message']) {
			this.log(require('yeoman-welcome'));
			this.log('Out of the box I include Webpack and some default React components.\n');
		}
	}

	prompting() {
		this.log('prompting');
	}

	configuring() {
		this.log('configuring');
	}

	default() {
		this.log('default');
	}
	
	writing() {
		this.log('writing');
	}

	confilicts() {
		this.log('confilicts');
	}

	install() {
		this.log('install');
	}

	end() {
		console.log('end');
		this.log(yosay(
				'Your app has been created successfully!'
			));
	}

	mthod1() {
		this.log('method1');
	}

}

module.exports = AppGenerator;