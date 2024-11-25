import 'dotenv/config.js'
import '../../config/database.js'
import bcryptjs from "bcryptjs";
import User from '../User.js'

const users = [
  {
    name: "Maria",
    lastName: "Gonzalez",
    email: "maria.gonzalez@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    country: "Colombia",
    online: false
  },
  {
    name: "John",
    lastName: "Smith",
    email: "john.smith@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    country: "USA",
    online: false
  },
  {
    name: "Yuki",
    lastName: "Tanaka",
    email: "yuki.tanaka@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    country: "Japan",
    online: false
  },
  {
    name: "Liam",
    lastName: "Johnson",
    email: "liam.johnson@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    country: "UK",
    online: false
  },
  {
    name: "Sofia",
    lastName: "Garcia",
    email: "sofia.garcia@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    country: "Spain",
    online: false
  },
  {
    name: "Ahmed",
    lastName: "Ali",
    email: "ahmed.ali@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    country: "Egypt",
    online: false
  },
  {
    name: "Elena",
    lastName: "Rossi",
    email: "elena.rossi@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    country: "Italy",
    online: false
  },
  {
    name: "Carlos",
    lastName: "Martinez",
    email: "carlos.martinez@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    country: "Mexico",
    online: false
  },
  {
    name: "Aisha",
    lastName: "Khan",
    email: "aisha.khan@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    country: "India",
    online: false
  },
  {
    name: "Max",
    lastName: "Müller",
    email: "max.muller@prueba.com",
    password: "password123",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    country: "Germany",
    online: false
  }
];

      const encryptPass = (password) =>{
        let hashPassword = bcryptjs.hashSync(
          password,
          10
      )
      return hashPassword
      
      }
      const userPassHashed = users.map(user => ({...user, password:  encryptPass(user.password)}))
      
      User.insertMany(userPassHashed)