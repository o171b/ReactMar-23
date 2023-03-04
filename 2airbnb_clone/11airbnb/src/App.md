1. coverImg prop is taken from data.js file 

Card 
img ="katie-zaferes.png"
rating = "5.0"
reviewCount = {6}
country = "USA"
title = "Life Lessons with Katie Zaferes"
price = {136}
/>  
This is our hardcoded Card

2. Warning: Each child in a list should have a unique "key" prop
- we get the following warning, and you'll see it any time we're using
.map() method on data to create JSX elements or rather an array of JSX elments,
the way we can get rid of this warning is by simpling adding a prop called key,
and i need to set key equal to something unique about this individual item, fortunately,
when we're pulling data from a database we'll always receive some kind of id property,
that we can guarantee can be unique, and ini our data.js we created unique id's starting from
1 to mimick this concept. so we'll assign the key to be item.id and the warning dissapears.
