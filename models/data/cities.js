import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js';


let cities = [
        {
          name: "Paris",
          photo: "https://example.com/photos/paris.jpg",
          country: "France",
          continent: "Europe",
          description: "The capital of France, known for art, fashion, and landmarks like the Eiffel Tower.",
          currency: "Euro"
        },
        {
          name: "Tokyo",
          photo: "https://example.com/photos/tokyo.jpg",
          country: "Japan",
          continent: "Asia",
          description: "A bustling city blending modern technology with traditional culture.",
          currency: "Japanese Yen"
        },
        {
          name: "New York",
          photo: "https://example.com/photos/newyork.jpg",
          country: "USA",
          continent: "North America",
          description: "The largest city in the USA, known for its cultural diversity and landmarks like the Statue of Liberty.",
          currency: "US Dollar"
        },
        {
          name: "Sydney",
          photo: "https://example.com/photos/sydney.jpg",
          country: "Australia",
          continent: "Oceania",
          description: "A harbor city famous for the Sydney Opera House and beautiful beaches.",
          currency: "Australian Dollar"
        },
        {
          name: "Cape Town",
          photo: "https://example.com/photos/capetown.jpg",
          country: "South Africa",
          continent: "Africa",
          description: "A vibrant city with a stunning coastline and iconic Table Mountain.",
          currency: "South African Rand"
        },
        {
          name: "Buenos Aires",
          photo: "https://example.com/photos/buenosaires.jpg",
          country: "Argentina",
          continent: "South America",
          description: "The capital of Argentina, known for tango music and European-style architecture.",
          currency: "Argentine Peso"
        },
        {
          name: "Rome",
          photo: "https://example.com/photos/rome.jpg",
          country: "Italy",
          continent: "Europe",
          description: "An ancient city filled with history, home to the Colosseum and Vatican City.",
          currency: "Euro"
        },
        {
          name: "Cairo",
          photo: "https://example.com/photos/cairo.jpg",
          country: "Egypt",
          continent: "Africa",
          description: "The capital of Egypt, famous for the Pyramids of Giza and the Nile River.",
          currency: "Egyptian Pound"
        },
        {
          name: "Rio de Janeiro",
          photo: "https://example.com/photos/rio.jpg",
          country: "Brazil",
          continent: "South America",
          description: "Known for its Carnival, beautiful beaches, and the iconic Christ the Redeemer statue.",
          currency: "Brazilian Real"
        },
        {
          name: "London",
          photo: "https://example.com/photos/london.jpg",
          country: "United Kingdom",
          continent: "Europe",
          description: "The capital of the UK, famous for landmarks like Big Ben and the British Museum.",
          currency: "British Pound"
        },
        {
          name: "Beijing",
          photo: "https://example.com/photos/beijing.jpg",
          country: "China",
          continent: "Asia",
          description: "A city rich in history, home to the Forbidden City and the Great Wall.",
          currency: "Chinese Yuan"
        },
        {
          name: "Toronto",
          photo: "https://example.com/photos/toronto.jpg",
          country: "Canada",
          continent: "North America",
          description: "A major Canadian city known for its diversity, CN Tower, and thriving arts scene.",
          currency: "Canadian Dollar"
        },
        {
          name: "Berlin",
          photo: "https://example.com/photos/berlin.jpg",
          country: "Germany",
          continent: "Europe",
          description: "A city with a dynamic history, famous for the Berlin Wall and modern culture.",
          currency: "Euro"
        },
        {
          name: "Dubai",
          photo: "https://example.com/photos/dubai.jpg",
          country: "United Arab Emirates",
          continent: "Asia",
          description: "A futuristic city known for its modern architecture and luxurious shopping.",
          currency: "UAE Dirham"
        },
        {
          name: "Moscow",
          photo: "https://example.com/photos/moscow.jpg",
          country: "Russia",
          continent: "Europe",
          description: "The capital of Russia, known for its rich history and iconic Red Square.",
          currency: "Russian Ruble"
        }
      ];
      
 City.insertMany(cities)