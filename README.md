SocialConnect Plugin (0.8.0)
=======================================

The SocialConnect plugin makes integrating and using social media in Kiwi a lot easier. Functionality commonly wanted in games, such as sharing and login, are easily accessable and configurable. Loading SDKs are done upon initialisation and only if it is not already there. It even works in CocoonJS.

**Currently Supported**

- Facebook
- Twitter Coming Soon.

If a platform you want to use is not supported then get contact with us. 

If you have any problems then feel free to contact us via [our website](http://www.kiwijs.org/help) OR [leave an issue!](https://github.com/gamelab/SocialConnect-Plugin/issues/new)


Versions
---------

0.8.0
* Facebook support added.
	* Works in both Browsers and CocoonJS
	* Login and logout functions added.
	* Nice methods which handle loading a users facebook profile into Kiwi. 
	* Sharing Functionality.
* Classes documented.
* Examples added.


How to Include: 
---------

###First Step:
- Copy either the socialconnect-x.x.x.js or the socialconnect-x.x.x.min.js files into your project directory. They can be located in the build folder. We recommend that you save the files under a plugin directory that lives inside of your project directory so that you can easily manage all of the plugins but that is not required.

###Second Step:
- Link in the JavaScript file socialconnect-x.x.x.js (or the min version) into your HTML file. Make sure you link it in underneath the main Kiwi.js library AND underneath the Cocoon files if you are using Cocoon.


How to use
---------

##Starting off
Below is a outline of the steps to follow when using the Plugin and adding social media to your game. Note that not all the steps maybe vary depending on the social media used.

###Decided then Configure
To use this plugin you must first choose which social media solutions you would like to use and then preform any configurations needed for them.

For example. If you wanting to use the 'facebook' plugin then you will need to create an App for your game on [developers.facebook.com](http://developers.facebook.com) first. 

###Initialise 
Next you will need to initialise the social media you have choosen to use. It may require information from the configuration step above.

    this.game.social.init( {
            'facebook': {
                'appId': 'XXXXXXXXXXXXXXXXXXXXX'
            }
        } );

The 'init' method above allows you initialise multiple SDKs with a single call. Alternatively you can initialise them individually.

    this.game.social.facebook.init( {
            'appId': 'XXXXXXXXXXXXXXXXXXXXX'
        } );


##Facebook

###Sharing
To pop-up a basic share dialog you can use the `share` method. 

    this.game.social.facebook.share();

By default (in browsers) this will use the current windows location but can be changed.

    this.game.social.facebook.share( { 
            link: 'http://www.kiwijs.org' 
        } );

###Login

    this.game.social.facebook.login( {
            'callback': this.toBeExecutedWhenComplete,
            'context': this,
            'options': {
                'scope': 'public_profile,publish_actions,user_friends'
            }
        } );

See the [facebook documentation](https://developers.facebook.com/docs/facebook-login/permissions/v2.1) for a list of valid permissions.

###Logout

    this.game.social.facebook.logout();
Just be careful as this will log them out of Facebook entirely.

###User Information

    this.game.social.facebook.me( {
            'callback': this.toBeExecutedWhenInformationGathered,
            'context': this,
            //List of valid fields to be retrieved off Facebook.
            'fields': 'picture, id, first_name'
        } );

See the [facebook documentation](https://developers.facebook.com/docs/graph-api/reference/v2.2/user) for a full list of valid fields.

###The Facebook SDK

If there is a piece of functionality not listed above that you specifically need, want or otherwise, then you can always access the Facebook SDK at any time.  

    var fbSdk = this.game.social.facebook.fb;



More Info
---------

For more infomation and tutorials visit the [kiwijs website.](http://www.kiwijs.org/documentation/social-connect-plugin/) 

Check out a few of the examples found in the "examples" folder of this repository.

Read the API docs found in the "docs" folder of this repository.
