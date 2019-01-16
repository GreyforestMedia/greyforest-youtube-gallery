=== Greyforest ::: Youtube Gallery ===
Contributors: greyforest
Donate link: https://www.paypal.me/greyforestmedia
Tags: shortcodes, youtube, gallery
Requires at least: 4.0
Tested up to: 5.0.3
Stable tag: 1.4
License: None
License URI: None

This plugin adds an easy way to insert galleries of YouTube videos in a grid format with thumbnails.

== Description ==

This plugin adds an easy way to insert galleries of YouTube videos in a grid format with thumbnails.

All that is required is the ID of a Youtube video, taken from the end of the URL, after the "v=" section.

Example: https://www.youtube.com/watch?v=__________

NOTICE: This plugin does not work with Gutenberg editor.

**NEW GALLERY**

To insert a new gallery, click the shortcode button in the editor labeled "Youtube Gallery - New Gallery"

Code: [youtubegallery_newgallery featuredvideo_id="" columns="" filters=""][youtubegallery_endgallery]

* featuredvideo_id = The ID of the main gallery starting video
* columns = Column count for the grid (1, 2, 3, 4, or 5)
* filters = A comma-separated list of video "types" that you can use to filter the thumbnails in the gallery grid (NOTICE: Do not include spaces between filters)
** Example: tutorial,tip,concert,interview


**VIDEO THUMBNAIL**

To add videos to the gallery, place the text cursor before the **[youtubegallery_endgallery]** section, and click the shortcode button in the editor labeled "Youtube Gallery Thumbnail"

Code: [youtubegallery_thumbnail id="" title="" filter=""]

* id = The ID of the Youtube video you're adding
* title = A short title for the video
* filter = The video type that matches one of the filters you created in the "New Gallery" section


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress


== Screenshots ==

1. Two buttons are added to the visual editor to quickly insert the shortcodes into a post or page.
2. These are the shortcodes, one for a simple item with one price, and one for an item with multiple variations.
3. An example of filled in shortcodes.
4. The output is a simple button or button + select dropdown, easily styled with your own CSS.



== Changelog ==

= 1.4 =
* Added "View Details" link to view plugin settings and use tips.
* Converted TinyMCE Shortcode button graphics to Base64.
* Converted gallery dummy image to Base64.
* Cleaned up code.
* Added "Non-Gutenberg" notice.

= 1.3 =
* Fixed ability to filter videos by type.

= 1.2 =
* Added ability to filter videos by type.
* Added new "filter" shortcode attribute.

= 1.1 =
* Addition of automatic updates API.
* Publicly served from Greyforest servers now.

= 1.0 =
* Created plugin.