# 🧶 Express.js Product API – Week 2 Assignment

This is a Node.js and Express.js project demonstrating routing, middleware, and error handling concepts.  
The API manages a simple list of products for a crochet tools store.

---

## 📂 Project Structure

express-week2/
├─ routes/
│ └─ products.js
├─ middleware/
│ ├─ logger.js
│ ├─ auth.js
│ ├─ validateProduct.js
│ └─ errorHandler.js
├─ errors/
│ ├─ NotFoundError.js
│ └─ ValidationError.js
├─ utils/
│ └─ wrapAsync.js
├─ swaggerConfig.js
├─ server.js
├─ package.json
├─ README.md
├─ .env.example
└─ .gitignore

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
Make sure you have installed:
- **Node.js** (v18 or later)
- **npm** (comes with Node)
- **PowerShell** or **VS Code terminal**

---

### 2️⃣ Clone or create your project
```bash
cd Desktop
mkdir express-js-server-side-framework-graceakhati-dev
cd express-js-server-side-framework-graceakhati-dev
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Run the server
bash
Copy code
node server.js
Server will start on:
👉 http://localhost:3000

🧠 API Endpoints
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get a product by ID
POST	/products	Add a new product
PUT	/products/:id	Update a product
DELETE	/products/:id	Delete a product

🧪 Testing with curl
Run these commands in your PowerShell or terminal after the server starts:

Get all products
bash
Copy code
curl http://localhost:3000/products
Add a new product
bash
Copy code
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d "{\"name\":\"Yarn Ball\",\"description\":\"Soft cotton yarn\",\"price\":5.0,\"category\":\"materials\",\"inStock\":true}"
Get one product (replace ID)
bash
Copy code
curl http://localhost:3000/products/<id>
Update a product
bash
Copy code
curl -X PUT http://localhost:3000/products/<id> -H "Content-Type: application/json" -d "{\"price\":6.0}"
Delete a product
bash
Copy code
curl -X DELETE http://localhost:3000/products/<id>
🧩 Middleware Used
logger.js – Logs every request.

auth.js – Simulates authentication check.

validateProduct.js – Validates product data before saving.

errorHandler.js – Handles all errors gracefully.

🧰 Utilities
wrapAsync.js – Simplifies async error handling.

NotFoundError.js & ValidationError.js – Custom error classes.

👩🏽‍💻 Author
Grace Akhati
Power Learn Project – Week 2: Server-Side Frameworks (Express.js)
📧 graceakhati2@gmail.com

🏁 License
This project is for educational purposes only under the Power Learn Project July 2025 cohort.