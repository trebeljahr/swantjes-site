This is a small website project - statically generated pages with gatsby and react - for a friend of mine named Swantje Furtak.

When running this, first npm i.
Then npm start - or gatsby develop.
Go to localhost:8000 in your browser to see the site in action.

The color palet used:
BLUE SAPPHIRE - light blue
#19647E
YANKEES BLUE - dark blue
#1F2839
BRITISH RACING GREEN - dark green
#013F31
CAPUT MORTUUM - dark red
#4F2223

Temporary Note:
query MyQuery {
allGhostPost(filter: {tags: {elemMatch: {name: {eq: "films"}}}}) {
edges {
node {
id
html
ghostId
title
}
}
}
ghostPost(title: {eq: "Another new post"}) {
html
}
ghostPage(title: {eq: "She films"}) {
html
}
}
