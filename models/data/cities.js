import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js';


let cities = [
        {
          name: "Paris",
          photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1",
          country: "France",
          continent: "Europe",
          description: "The capital of France, known for art, fashion, and landmarks like the Eiffel Tower.",
          currency: "Euro"
        },
        {
          name: "Tokyo",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrCPgo7YbgpSSQWwjUFGx0fKLOaW23gzBZg&s",
          country: "Japan",
          continent: "Asia",
          description: "A bustling city blending modern technology with traditional culture.",
          currency: "Japanese Yen"
        },
        {
          name: "New York",
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
          country: "USA",
          continent: "North America",
          description: "The largest city in the USA, known for its cultural diversity and landmarks like the Statue of Liberty.",
          currency: "US Dollar"
        },
        {
          name: "Sydney",
          photo: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
          country: "Australia",
          continent: "Oceania",
          description: "A harbor city famous for the Sydney Opera House and beautiful beaches.",
          currency: "Australian Dollar"
        },
        {
          name: "Cape Town",
          photo: "https://img.static-kl.com/images/media/B2B667B6-DC8C-46DA-B9F0A9EBF1877EDE",
          country: "South Africa",
          continent: "Africa",
          description: "A vibrant city with a stunning coastline and iconic Table Mountain.",
          currency: "South African Rand"
        },
        {
          name: "Buenos Aires",
          photo: "https://img.static-kl.com/images/media/EDD567B6-661E-481F-97ACD929AB125ABA",
          country: "Argentina",
          continent: "South America",
          description: "The capital of Argentina, known for tango music and European-style architecture.",
          currency: "Argentine Peso"
        },
        {
          name: "Rome",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWyq_eKnfHFkKRUUDfUE5AVSS-kYfHAg1Tg&s",
          country: "Italy",
          continent: "Europe",
          description: "An ancient city filled with history, home to the Colosseum and Vatican City.",
          currency: "Euro"
        },
        {
          name: "Cairo",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiK5V36bi3FPYsTL-x-1WbVJy3MSNAqMHPQg&s",
          country: "Egypt",
          continent: "Africa",
          description: "The capital of Egypt, famous for the Pyramids of Giza and the Nile River.",
          currency: "Egyptian Pound"
        },
        {
          name: "Rio de Janeiro",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC2XN1gsyb5PNGj2zEmWAB_TmodC1_-F8YQ&s",
          country: "Brazil",
          continent: "South America",
          description: "Known for its Carnival, beautiful beaches, and the iconic Christ the Redeemer statue.",
          currency: "Brazilian Real"
        },
        {
          name: "London",
          photo: "https://static.eldiario.es/clip/ac5016f6-7afd-43f8-9d87-f38c82e5a9f1_16-9-discover-aspect-ratio_default_0.jpg",
          country: "United Kingdom",
          continent: "Europe",
          description: "The capital of the UK, famous for landmarks like Big Ben and the British Museum.",
          currency: "British Pound"
        },
        {
          name: "Beijing",
          photo: "https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg",
          country: "China",
          continent: "Asia",
          description: "A city rich in history, home to the Forbidden City and the Great Wall.",
          currency: "Chinese Yuan"
        },
        {
          name: "Toronto",
          photo: "https://cdn.britannica.com/35/100235-050-CE3936EE/view-CN-Tower-Toronto-skyline-observation-deck.jpg",
          country: "Canada",
          continent: "North America",
          description: "A major Canadian city known for its diversity, CN Tower, and thriving arts scene.",
          currency: "Canadian Dollar"
        },
        {
          name: "Berlin",
          photo: "https://planzero.es/wp-content/uploads/2020/08/Berli%CC%81n-alemania-II-scaled-1.jpg",
          country: "Germany",
          continent: "Europe",
          description: "A city with a dynamic history, famous for the Berlin Wall and modern culture.",
          currency: "Euro"
        },
        {
          name: "Dubai",
          photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1",
          country: "United Arab Emirates",
          continent: "Asia",
          description: "A futuristic city known for its modern architecture and luxurious shopping.",
          currency: "UAE Dirham"
        },
        {
          name: "Moscow",
          photo: "https://content.r9cdn.net/rimg/dimg/b0/1c/7746c81c-city-14713-163f5192361.jpg?width=1366&height=768&xhint=1535&yhint=594&crop=true",
          country: "Russia",
          continent: "Europe",
          description: "The capital of Russia, known for its rich history and iconic Red Square.",
          currency: "Russian Ruble"
        }
      ];
      
 City.insertMany(cities)