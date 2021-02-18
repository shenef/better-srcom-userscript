# better speedrun.com

Comparison images: https://imgur.com/a/x5Z01C7 (outdated)

## Features | design changes | fixes | improvements:
- adjustable settings for the maximum page width, video height, profile picture size and forum post width
- the load more games button on the games page is not moving anymore while game images are still loading
- long drop down menus, for example in the variable selector or some misc category lists, now have a scrollbar
- better wide screen support
- if your screen is wide enough multiple rows of categories or sub-categories collapse back into one row
- larger and better visible game name on leaderboards
- leaderboard content is now aligned to the left
- videos on run pages are larger (they use 87% of the screen height so you can still see the category, time, etc below the video)
- the end of the messages page doesn't touch the bottom of the screen anymore
- better scroll bar
- better audit log layout
- several small UI fixes

## Issues:
- [not fixable] Changes to the site might break parts of the changes made by 
- [maybe fixable with js] Statistics get too large on wide screens since they are canvas elements that dynamically scale with the screen width.

## Usage:
1. install the Tampermonkey extension for chrome or the Greasemonkey addon for firefox  
   - https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo  
   - https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
2. open this link: https://github.com/shenef/better-srcom/raw/main/better-srcom.user.js
3. click "install" in the Tampermonkey/Greasemonkey tab that appeared 

If you have any suggestions or issues you can open an issue on github, contact me on discord or on speedrun.com.
