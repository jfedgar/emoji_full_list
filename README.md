# Emoji Full List Scraper (charCodes)

Included in this repository is a complete list of emoji formatted as a javascript array (see emoji_2024_2_26.json) up to date as of 02/26/2024 (Unicode version 15.1)

`run.js` is a script to grab the latest complete list of emoji from unicode.org (https://unicode.org/emoji/charts/full-emoji-list.html) and format them as a JSON array.

Note also that each unique code scraped gets its own entry in the final array, and only distinct items are included. This means that this list does not include [emoji sequences] (https://emojipedia.org/emoji-sequence). If this is part of your needs, the code could easily be modified to join those together as a single code by modifying this line:
```
  return codes.split(" ");
```
to simply return the code sequences as-is (separated by a space) or to modify the delimiter to whatever your needs are.

# To Update The Emoji List:

In the root folder type:
`node run.js`

This will create a new file named emoji_<date>.json

Important Note: The unicode page tends to take a very long time to fully load.