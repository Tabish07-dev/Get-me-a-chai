# Get Me a Chai - Crowdfunding Platform

A modern crowdfunding platform built with Next.js where creators can get funded by their fans and followers.

## 🎯 **Project Purpose**
This is a **learning project** to understand:
- Modern web development with Next.js
- Authentication systems (OAuth)
- Responsive design with Tailwind CSS
- Component-based architecture
- Database integration concepts

## 🚀 **What I Built & Why**

### **Core Features:**
- **User Authentication:** GitHub OAuth login system
- **Responsive Design:** Works on mobile, tablet, and desktop
- **Creator Profiles:** Individual pages for each creator
- **Payment Interface:** UI for supporting creators
- **Dashboard:** User management interface

### **Technical Decisions:**
- **Next.js 15:** For modern React development and server-side rendering
- **NextAuth.js:** For secure authentication
- **Tailwind CSS:** For rapid, responsive UI development
- **MongoDB:** For user data storage (optional)
- **Component Architecture:** Reusable UI components

## 🛠️ **Technologies Used**

- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Authentication:** NextAuth.js with GitHub OAuth
- **Database:** MongoDB with Mongoose (optional)
- **Deployment Ready:** Vercel, Netlify compatible

## 📋 **Features Implemented**

### ✅ **Completed:**
- Responsive landing page
- GitHub OAuth authentication
- User dashboard
- Creator profile pages
- Payment interface UI
- Mobile-first design

### 🔄 **In Progress:**
- Database integration
- Payment processing
- User profiles management

## 🚀 **Getting Started**

### **Prerequisites:**
- Node.js 18+
- GitHub account (for OAuth)

### **Installation:**

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in your GitHub OAuth credentials

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open:** http://localhost:3001

## 🔐 **Environment Setup**

Create a `.env.local` file with:
```env
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-random-secret
```

## 📚 **Learning Outcomes**

Through this project, I learned:
- Modern React patterns and hooks
- Authentication flow implementation
- Responsive design principles
- Component composition
- Environment variable management
- Git workflow and version control

## 🎓 **For Beginners**

This project demonstrates:
- How to structure a Next.js application
- Implementing user authentication
- Creating responsive layouts
- Managing application state
- Working with external APIs

## 📄 **License**

This project is for educational purposes.
