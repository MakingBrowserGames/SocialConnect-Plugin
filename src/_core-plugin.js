
/**
* SocialConnect is a plugin that helps you connect to social media services.
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class SocialConnect
* @main
*/
Kiwi.Plugins.SocialConnect = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @public
	*/
	name:"SocialConnect",

	/**
	* The version of this plugin.
	* @property version
	* @type String
	* @public
	*/
	version:"0.8.0",

	/**
	* The minimum version of Kiwi that the plugin requires.
	* @property minimumKiwiVersion
	* @type String
	* @public
	*/
	minimumKiwiVersion:"1.0.0"

};


// Registers this plugin with the Global Kiwi Plugins Manager.
Kiwi.PluginManager.register(Kiwi.Plugins.SocialConnect);



/**
* Executed when the plugin has been told it is to be used with a particular game.
* @method create
* @param game {Kiwi.Game} 
* @public
*/
Kiwi.Plugins.SocialConnect.create = function( game ) {

	game.social = new Kiwi.Plugins.SocialConnect.Manager( game );

};

