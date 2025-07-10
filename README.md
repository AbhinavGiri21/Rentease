# 🏠 RentEase

**RentEase** is a full-stack Rental Management System designed to simplify and streamline rental operations for landlords and tenants. From property listings and tenant communication to secure rent payments and invoice generation, RentEase offers an end-to-end platform in a clean, modern interface.

---

## 👥 Project Contributors

- **Abhinav Giri**  
- **Nikhil Raj**  
- **Shakshi Singh**  
- **Abhinav Singh Rathor**

---

## 🚀 Features

### ✅ Tenant Features
- 🔍 Browse and search rental properties by location
- 📆 View property availability and book rentals
- 💬 Real-time chat with landlords
- 💳 Secure rent payments via Stripe
- 📄 View booking history and invoices

### ✅ Landlord Features
- 🏘️ Add, edit, and manage property listings
- 📸 Upload and store property images via Cloudinary
- 📬 Communicate directly with tenants
- 📈 Track bookings and earnings
- 📄 View payment records with invoice-style layout
- 🔐 Block or unblock tenants if necessary

### ✅ Admin Features
- 🧑‍💼 Manage all users (landlords & tenants)
- 📦 Monitor all property listings
- 💬 Review user interactions
- ⛔ Block or unblock user accounts
- 📊 Access platform-wide metrics and summaries

---

## 💡 Project Highlights

- 🔐 **Authentication**: Role-based login for Admin, Landlord, and Tenant with JWT-based session management.
- 💬 **Real-time Communication**: Messaging system between tenants and landlords with read receipts and avatars.
- 💳 **Payments**: Fully functional Stripe integration for rent payments, with payment metadata, session tracking, and confirmation-based booking.
- 🧾 **Invoices**: Auto-generated invoice-style payment viewer for both tenants and landlords.
- 📅 **Booking Flow**: Seamless booking system with calendar integration, date validations, and availability logic.
- ☁️ **Cloudinary Integration**: Property images and user avatars are uploaded and stored using Cloudinary, with URLs saved in the database.
- 📁 **Database**: PostgreSQL backend with normalized schema for users, properties, bookings, messages, and payments.

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- React Toastify
- React Datepicker

### 🔹 Backend
- Node.js
- Express.js
- PostgreSQL (with `pg` module)
- JWT for authentication
- Stripe SDK for payments
- Cloudinary SDK for image uploads
---

## 🔗 Setup Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/yourusername/rentease.git
cd rentease
```

### ⚙️ Run Locally on your system
▶️ Start the Frontend
```
cd frontend
npm install
npm start
Runs on http://localhost:3000
```
▶️ Start the Backend
```
cd backend
npm install
nodemon server.js
```

### 🚀 Run with Docker 

Make sure you have Docker and Docker Compose installed, then run:
```
docker-compose up --build
This will:

Start the frontend on http://localhost:3000

Start the backend on http://localhost:5000

Start a PostgreSQL database with persistence
```

### ⚠️ Environment Configuration
```
Create a .env file in the backend/ folder with the following:

DATABASE_URL for different environments

DATABASE_URL=postgresql://postgres:abcd@db:5432/rentease
 → Use this when running with Docker Compose (internal Docker network)

DATABASE_URL=postgresql://postgres:abcd@localhost:5432/rentease
 → Use this for local development without Docker

DATABASE_URL=postgresql://<username>:<password>@<host>/<database>
 → Use this on Render deployment (Render-managed Postgres)

JWT_SECRET=jwt_secret_key
STRIPE_SECRET_KEY=stripe_secret_key
FRONTEND_URL=your_frontend_url
```


