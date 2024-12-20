# Blog Platform Backend

## Overview

This project is a backend application for a blogging platform where users can create, update, and delete their blogs. The system incorporates two roles:

- **Admin**: Manages users and their blogs.
- **User**: Manages their own blogs.

The application includes secure authentication, role-based access control, and public API endpoints for viewing blogs with search, sort, and filter functionalities.

---

## Features

### User Management

- **Registration and Login**:
  - Users can register with their name, email, and password.
  - Authenticated using JWT tokens.
- **Role-Based Access Control**:
  - **User**: Can create, update, and delete their own blogs.
  - **Admin**: Can delete any blog and block users.

### Blog Features

- **Create Blog**: Logged-in users can create blogs.
- **Update Blog**: Users can update their own blogs.
- **Delete Blog**:
  - Users can delete their blogs.
  - Admins can delete any blog.
- **Public Blog API**: Accessible to anyone for viewing blogs with options for search, sorting, and filtering.

### Admin Features

- **Block Users**: Admins can block users, preventing them from logging in or creating blogs.
- **Delete Blogs**: Admins can delete any blog.

### Search, Sort, and Filter

- Search blogs by title, content, or author name.
- Sort blogs by date or title.
- Filter blogs by specific authors.

### Security

- **JWT Authentication**: Token validation for secure endpoints.
- **Password Encryption**: Securely stores passwords using `bcrypt`.
- **Role-Based Authorization**: Access control based on roles.

### Error Handling

- Consistent error responses across APIs:
  - Validation Errors
  - Authentication Errors
  - Authorization Errors
  - Not Found Errors

### Documentation

- Detailed API documentation.
- Comprehensive README file for setup and usage.

---

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog-platform-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Authentication

- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### Blog Management

- **Create Blog**: `POST /api/blogs` (Requires authentication)
- **Update Blog**: `PATCH /api/blogs/:id` (Requires authentication)
- **Delete Blog**: `DELETE /api/blogs/:id` (Requires authentication)
- **Get All Blogs**: `GET /api/blogs`

### Admin Actions

- **Block User**: `PATCH /api/admin/users/:userId/block` (Admin only)
- **Delete Blog**: `DELETE /api/admin/blogs/:id` (Admin only)

---

## Deployment

1. Deploy the application on a cloud platform like Heroku, Vercel, or Render.
2. Configure the environment variables for production.
3. Provide the live server URL for access.

---

## Admin Credentials

- **Email**: `admin@example.com`
- **Password**: `adminpassword`

---

## Project Overview Video

- Link: [Insert video link here]

---

## Contribution

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Thanks to everyone who contributed to this project and helped make it a success!
