-Project = Travel Journal
Places you've travelled and the photos of the trip
-check figma drafts for the project design

Requirments
- create a data array in a seperate .js file, the array should contain objects which has
properties for the title,location,google maps link,start and end dates of your trip, description,
image url
- once you've pulled in that array use the .map() method and props and some custom components
to pass that data down and have react display the array that has been mapped

example of our data.js file

export default [
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    }
]