(function() {
    tinymce.create("tinymce.plugins.youtubegallery_plugin", {

        //url argument holds the absolute url of our plugin directory
        init : function(ed, url) {

			
		/////////////////////////////// YOUTUBE GALLERY - FRAME & STARTING VIDEO
		/////////////////////////////// YOUTUBE GALLERY - FRAME & STARTING VIDEO
		/////////////////////////////// YOUTUBE GALLERY - FRAME & STARTING VIDEO

			//add new button   
            ed.addButton("youtubegallery_newgallery", {
                title : "YouTube Gallery - New Gallery",
                cmd : "youtubegallery_newgallery_command",
                image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgJJREFUeNrsl7tKA0EUhndCiFgFhaCNTbIJasRLCgUVbTVPYKGP4HuIbSpbGwtrrbaxEwIJQkTMrROVgJUgLoTx32Q2mSRz2wVJQBe+7DJ7ZubfmXPOnBBKqTXOi/x5AZYnoINlOcCV8AQSYB60FHYNEANr4EVhV/DnjXJa9hQ6U2COPccVdgtgGiyBhMJux3+IWGO+oiH7ueAMPHNtJ+DgtwV8ga1sOlUWvLue6vqSVa43Q0QBIbf4nZXYtcGu57O8/4rG4+7eCu1LxivCA0+HBYhCRPTOJG6JZox+ey8MJSynU50ZGTQA3T6a8YNEAeXUE1P7bMY2dELBFsDZ5MvuiyDELJVKtoBfAYeFV4/HWmPRIJUSxYpQNvnV0NgFUSISZcJagJyuEnITKhOu2sl2iMNFJORNZh4xi6WgZ+yIX0RCCXioN+OBJxY75aZJKnYEmXAd3IX44uFF3AalgUwoEJBXhCERhqJpCFKaF2bagS0Q5LLHaj3oUstdaCRPBinJ+upN67fRs8DgNDQ9jHRCiNEYrJ0X4CjKsob3LmcnW99EH5zIoDO4VRRl2YV/HPNFqathhfEKjkEckA076fX1HCIDzln7kWaskj8vvwKu5sNy7F7S2HlffQguFTYVzJ6biKJ0oqpiR1MTvrPnexCT2H2AT1DVbFXx/7/hxAj4EWAAUalyzxlmG64AAAAASUVORK5CYII=",
            });
			
	        //button functionality.
            ed.addCommand("youtubegallery_newgallery_command", function() {
                var return_text = '[youtubegallery_newgallery featuredvideo_id="" columns="" filters=""][youtubegallery_endgallery]';
                ed.execCommand("mceInsertContent", 0, return_text);
            });		

			
		/////////////////////////////// YOUTUBE GALLERY - VIDEO THUMBNAIL
		/////////////////////////////// YOUTUBE GALLERY - VIDEO THUMBNAIL
		/////////////////////////////// YOUTUBE GALLERY - VIDEO THUMBNAIL

			//add new button   
            ed.addButton("youtubegallery_thumbnail", {
                title : "YouTube Gallery Thumbnail",
                cmd : "youtubegallerythumbnail_command",
                image : " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJZJREFUeNpi/P//P8NAAiaGAQajDmD8P8AOYIHSyUCcSWe7W4F4PQMoBID4MBD/pzPe+H+A0wDzaC4gzwFULjnJCwFYMhrwKKCCQ6iTBihwCHUTIRkOGfBcwELdmoVxgBxAhsXUcQAFFlPmACpYTH4ipKLlo5XRqAMG2gF/kbNhH5TmpJPlH4F44iBplo/2DUe6AwACDACNiluMYjLckwAAAABJRU5ErkJggg==",
            });
			
	        //button functionality.
            ed.addCommand("youtubegallerythumbnail_command", function() {
                var return_text = '[youtubegallery_thumbnail id="" title="" filter=""]';
                ed.execCommand("mceInsertContent", 0, return_text);
            });			
			

        },

        createControl : function(n, cm) {
            return null;
        },

        getInfo : function() {
            return {
                longname : "YouTube Gallery Shortcode Buttons",
                author : "Greyforest Media",
                version : "1.5"
            };
        }
    });

    tinymce.PluginManager.add("youtubegallery_plugin", tinymce.plugins.youtubegallery_plugin);
})();