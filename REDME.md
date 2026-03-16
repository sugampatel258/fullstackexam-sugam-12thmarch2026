# Full Stack E-Commerce Mini Project

This project is a **Full Stack E-Commerce application** built using:

* **Backend:** Node.js, Express.js, TypeScript
* **Databases:** MySQL (Orders, Users) + MongoDB (Products, Cart)
* **ORM:** Objection.js with Knex.js
* **Frontend:** Next.js with TypeScript and Tailwind CSS

The application allows users to register/login, browse products, add products to a cart, checkout orders, and view reports.

---

# 1. Prerequisites

Make sure the following are installed on your system:

* Node.js (v18 or higher recommended)
* npm or yarn
* MySQL
* MongoDB (local installation or MongoDB Atlas)

---

# 2. Project Structure

```
project-root
│
├── backend
│   ├── src
│   │   ├── config
│   │   │   ├── knex.ts
│   │   │   └── mongo.ts
│   │   │
│   │   ├── db
│   │   │   ├── migrations
│   │   │   └── seeds
│   │   │
│   │   ├── middleware
│   │   │   └── auth.middleware.ts
│   │   │
│   │   ├── models
│   │   │   ├── sql
│   │   │   │   ├── User.ts
│   │   │   │   ├── Order.ts
│   │   │   │   └── OrderItem.ts
│   │   │   │
│   │   │   └── mongo
│   │   │       ├── Product.ts
│   │   │       └── Cart.ts
│   │   │
│   │   ├── modules
│   │   │   ├── auth
│   │   │   ├── product
│   │   │   ├── cart
│   │   │   ├── order
│   │   │   └── report
│   │   │
│   │   └── server.ts
│   │
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── products
│   │   │   ├── cart
│   │   │   ├── checkout
│   │   │   ├── reports
│   │   │   ├── signin
│   │   │   └── signup
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.tsx
│   │   │   └── ProductCard.tsx
│   │   │
│   │   ├── services
│   │   │   └── api.ts
│   │   │
│   │   └── types
│   │       └── index.ts
│   │
│   └── package.json
│
└── README.md
```

---

# 3. Installation

Clone the repository:

```
git clone <repository-url>
```

Navigate to the project folder:

```
cd project-root
```

---

# 4. Backend Setup (Node.js + Express)

Navigate to backend:

```
cd backend
```

Install dependencies:

```
npm install
```

Dependencies include:

* express
* mongoose
* knex
* objection
* mysql2
* bcrypt
* jsonwebtoken
* cors
* dotenv
* joi

---

# 5. Environment Variables

Create a `.env` file inside the **backend** directory.

Example:

```
PORT=3000

# MySQL Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=ecommerce

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/ecommerce

# JWT Secret
JWT_SECRET=your_secret_key
```

---

# 6. Database Setup

## MySQL Tables

Run migrations to create SQL tables:

```
npm run migrate
```

Tables created:

* users
* orders
* order_items

---

## MongoDB Collections

MongoDB is used for:

* products
* carts

Connection is configured in:

```
src/config/mongo.ts
```

Example connection:

```ts
mongoose.connect(process.env.MONGO_URI);
```

---

# 7. Seed Data

Seed product data into MongoDB:

```
npm run seed
```

This will insert sample products used in the product catalog.

---

# 8. Running the Backend Server

Start the development server:

```
npm run dev
```

Server will start on:

```
http://localhost:3000
```

---

# 9. Frontend Setup (Next.js)

Navigate to frontend:

```
cd frontend
```

Install dependencies:

```
npm install
```

---

# 10. Frontend Environment Variables

Create `.env.local` inside the **frontend** folder:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000/api/
```

---

# 11. Run Frontend Application

Start the Next.js development server:

```
npm run dev
```

Application will run on:

```
http://localhost:4000
```

---

# 12. Application Features

### Authentication

* User registration
* User login
* JWT authentication
* Protected routes

### Product Catalog

* Product listing
* Product details page
* Pagination support
* MongoDB search

### Cart

* Add product to cart
* View cart items
* Remove items from cart

### Checkout

* Convert cart into order
* Store orders in MySQL
* Clear cart after checkout

### Reports

Reports API provides:

* Daily revenue report
* Product category summary
* Top spenders report

---

# 13. API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Products

```
GET /api/products
GET /api/products/:id
```

### Cart

```
POST /api/cart/add
GET /api/cart
DELETE /api/cart/remove
```

### Orders

```
POST /api/orders/checkout
GET /api/orders
```

### Reports

```
GET /api/report/dailyRevenue
GET /api/product/product-summary
```

---

# 14. Performance & Security

The project implements:

* Password hashing using bcrypt
* JWT authentication
* MongoDB indexes for product search
* Pagination for product listing
* SQL aggregation queries for reports

---

# 15. Testing

Basic testing was performed by validating:

* Authentication flow
* Product listing
* Cart operations
* Checkout process
* Report generation

The deployed backend and frontend were tested together to ensure correct integration.

---

# 16. Technologies Used

Backend:

* Node.js
* Express.js
* TypeScript
* Objection.js
* Knex.js
* MongoDB
* MySQL

Frontend:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

---

# 17. Author

Developed as a **Full Stack Developer Assessment Project** demonstrating a hybrid database architecture with modern full-stack technologies.

