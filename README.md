# fb-cmt-crawl
**fb-cmt-crawl** is a legal script written in Javascript to crawl Facebook comments automatically.

# Introduction
Facebook graph API makes restrictions to crawl public data, where we are allowed to crawl only pages and groups that we manage and we are prohibited to access to other pages/groups. Other tools have been proposed to crawl public data (based on scrapy or others), but they are illegal and may lead to lawsuit and banning the account. At this end, I have written this javascript program to be executed in client side and automate the data collection. It should be executed in the browser 
console on a target post. It is based on analyzing Html DOM elements to retrieve the dedicated information.

![JSON file](https://github.com/xprogramer/fb-cmt-crawl/blob/main/json.png?raw=true "image description")

The extracted comments and some information relative to the post are saved in Json file with the post ID as a filename.

**Note:** the current scripts cannot crawl all the comments of a page/group, because it may overload the browser and may result a crash.

# Warnings
* The author of this script is not responsible for any damage or malicious intents. It is proposed for a scientific purpose.
* The scripts are tested on March 2021 and work fine, but they may present issues in futur if there will be updates in Facebook Html DOM and CSS.
* The scripts cannot retrieve data from Facebook mobile version.

# How to crawl the post comments
To optimize the navigation, Facebook does not display all the post comments, where it displays the most relevant, recent comments or old comments. In order to display the other comments, the user should click on "**View more comments**" repeatitively until all the comments are displayed.

![View more comments](https://github.com/xprogramer/fb-cmt-crawl/blob/main/view%20more%20comments.jpg?raw=true "image description")

To automate this process, I have written the **viewMoreComments** script. You copy the function code between **{ }** and paste it in the browser console. This script clicks only once on "**View more comments**", and if you need to execute it several times you must copy/paste the code more times (as you need) or put the code inside a loop with a delay between two consecutive iterations. **Note:** the delay is depending on the internet and the computer speed.

![Browser console](https://github.com/xprogramer/fb-cmt-crawl/blob/main/console.png?raw=true "image description")

For better readability, Facebook shows only a part of a long comment and display "**See more**" button. Before collecting the comment, we must display the entire comment. By running the script seeMore.js all the hidden parts of the long comments will be shown.

![See more](https://github.com/xprogramer/fb-cmt-crawl/blob/main/see%20more.jpg?raw=true "image description")

Finally, you run the script **cmt_crawl.js** (code of the function) to collect the displayed comments regarding the post. It is worth mentionning that the script collects only textual comments and ignores image and sticker comments (but collects only the text if there is a sticker).
