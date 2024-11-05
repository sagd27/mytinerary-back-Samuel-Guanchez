import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";
import "../City.js";

const itineraries = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    duration: 5,
    Likes: 0,
    Hashtags: ["#sightseeing", "#citytours"],
    price: 3,
    city: "6729b3810a39ca317f7e01ba",
    comments: "Amazing city tour! Perfect to see all the main landmarks."
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    duration: 4,
    Likes: 0,
    Hashtags: ["#museumtour", "#historicwalk"],
    price: 4,
    city: "6729b3810a39ca317f7e01bc",
    comments: "Great museum visits, ideal for history and art lovers."
  },
  {
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    duration: 3,
    Likes: 0,
    Hashtags: ["#beachday", "#sunsetcruise"],
    price: 2,
    city: "6729b3810a39ca317f7e01bd",
    comments: "Perfect day at the beach and an unforgettable sunset cruise."
  },
  {
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    duration: 7,
    Likes: 0,
    Hashtags: ["#foodtour", "#localcuisine"],
    price: 5,
    city: "6729b3810a39ca317f7e01be",
    comments: "Delicious food tour with amazing local flavors."
  },
  {
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    duration: 6,
    Likes: 0,
    Hashtags: ["#hiking", "#mountainviews"],
    price: 4,
    city: "6729b3810a39ca317f7e01bf",
    comments: "Beautiful mountain views. A challenging hike but worth it."
  },
  {
    name: "David Martinez",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    duration: 8,
    Likes: 0,
    Hashtags: ["#photography", "#cityscape"],
    price: 3,
    city: "6729b3810a39ca317f7e01c0",
    comments: "Great for photography lovers, captured stunning views."
  },
  {
    name: "Sarah Taylor",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    duration: 2,
    Likes: 0,
    Hashtags: ["#nightlife", "#clubhopping"],
    price: 2,
    city: "6729b3810a39ca317f7e01c1",
    comments: "The nightlife was amazing, each club had a unique vibe."
  },
  {
    name: "James Anderson",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    duration: 10,
    Likes: 0,
    Hashtags: ["#historicsites", "#localart"],
    price: 5,
    city: "6729b3810a39ca317f7e01c2",
    comments: "Impressive historical sites, a trip full of culture and art."
  },
  {
    name: "Laura Thomas",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    duration: 9,
    Likes: 0,
    Hashtags: ["#scubadiving", "#coralreef"],
    price: 4,
    city: "6729b3810a39ca317f7e01c3",
    comments: "Amazing diving experience, the coral reefs are spectacular."
  },
  {
    name: "Robert Jackson",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    duration: 3,
    Likes: 0,
    Hashtags: ["#riverrafting", "#adventure"],
    price: 2,
    city: "6729b3810a39ca317f7e01c4",
    comments: "Unforgettable rafting adventure, full of excitement and adrenaline."
  },
  {
    name: "Mia White",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    duration: 4,
    Likes: 0,
    Hashtags: ["#shopping", "#markets"],
    price: 3,
    city: "6729b3810a39ca317f7e01c5",
    comments: "A shopper’s paradise, markets with unique and precious items."
  },
  {
    name: "Chris Harris",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    duration: 2,
    Likes: 0,
    Hashtags: ["#skiing", "#snowboarding"],
    price: 2,
    city: "6729b3810a39ca317f7e01c6",
    comments: "Awesome skiing and snowboarding slopes, a great experience on the snow."
  },
  {
    name: "Sophia Clark",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    duration: 1,
    Likes: 0,
    Hashtags: ["#kayaking", "#wildlife"],
    price: 3,
    city: "6729b3810a39ca317f7e01c7",
    comments: "Kayaking was fun, and we saw lots of wildlife. Highly recommended!"
  },
  {
    name: "Daniel Lewis",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    duration: 5,
    Likes: 0,
    Hashtags: ["#biking", "#urbanexplorer"],
    price: 4,
    city: "6729b3810a39ca317f7e01c8",
    comments: "Exploring the city by bike was an amazing experience."
  },
  {
    name: "Olivia Robinson",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    duration: 6,
    Likes: 0,
    Hashtags: ["#museumtour", "#artgallery"],
    price: 4,
    city: "6729b3810a39ca317f7e01ba",
    comments: "Impressive museums and galleries, perfect for art lovers."
  },
  {
    name: "Henry Walker",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    duration: 8,
    Likes: 0,
    Hashtags: ["#fishing", "#boattrip"],
    price: 5,
    city: "6729b3810a39ca317f7e01bc",
    comments: "Perfect fishing day with a very relaxing boat trip."
  },
  {
    name: "Emma Wright",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    duration: 3,
    Likes: 0,
    Hashtags: ["#sunsetview", "#beachvibes"],
    price: 3,
    city: "6729b3810a39ca317f7e01bd",
    comments: "Magical sunset views on the beach, an unforgettable experience!"
  },
  {
    name: "Jacob King",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    duration: 4,
    Likes: 0,
    Hashtags: ["#templetour", "#localculture"],
    price: 4,
    city: "6729b3810a39ca317f7e01be",
    comments: "Temple tour showcasing the rich local culture, it was incredible."
  },
  {
    name: "Grace Scott",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    duration: 6,
    Likes: 0,
    Hashtags: ["#safari", "#wildlifephotography"],
    price: 5,
    city: "6729b3810a39ca317f7e01bf",
    comments: "A safari that exceeded my expectations, took incredible wildlife photos."
  },
  {
    name: "Benjamin Moore",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    duration: 5,
    Likes: 0,
    Hashtags: ["#rockclimbing", "#extreme"],
    price: 4,
    city: "6729b3810a39ca317f7e01c0",
    comments: "Exciting rock climbing, perfect for adrenaline seekers."
  },
  {
    name: "Zoe Ramirez",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    duration: 7,
    Likes: 0,
    Hashtags: ["#citynightlife", "#barhopping"],
    price: 4,
    city: "6729b3810a39ca317f7e01c1",
    comments: "Loved the city nightlife, hopping from bar to bar was thrilling!"
  },
];



Itinerary.insertMany(itineraries);
