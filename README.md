# PayPenguin 🐧 – Bill Tracking App

PayPenguin is a full-stack bill tracking application built with React, Node.js, Express, and PostgreSQL. The app features JWT-based authentication with Passport.js and bcrypt password hashing, allowing users to securely register, log in, and manage their own bills in isolation. The backend follows an MVC pattern with separate routers, controllers, and custom middleware for route protection and ownership validation, connected to a Supabase-hosted PostgreSQL database via Prisma ORM. The frontend uses React Context for global auth and bill state management, and was migrated from localStorage to a live REST API with full CRUD functionality. Both the frontend and backend are deployed separately on Vercel with production CORS configuration and environment-based secrets management.

## 🧩 Features

- 💾 **Persistent Storage**: Bills are saved in localStorage so they persist across sessions.
- 📆 **Due Date Sorting**: Bills are automatically sorted by due date.
- ✅ **Mark as Paid/Unpaid**: Toggle payment status for individual bills.
- ✏️ **Edit/Delete Bills**: Update or remove bill entries as needed.
- 📊 **Amount Formatting**: Clean display of currency values with two decimal places.
- 📱 **Mobile Responsive**: Fully responsive layout with optimized CSS for smaller screens.
- 🛠️ **Batch Actions**: Reset all bills to unpaid with one-month advancement or delete them in bulk using the footer controls.

## 🔮 Planned Future Improvements
- 📨 Notifications/reminders for upcoming due dates
- 📱 Full UI overhaul to look more "modern"

## 📸 Screenshots
<img width="1024" height="768" alt="PC and Mobile mockup template (2)" src="https://github.com/user-attachments/assets/a4fd82bc-965b-4a28-afb8-737c2cca3e09" />
