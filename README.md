# 📦 Micro-Frontend Dashboard (MFE-Dashboard)

> **Status:** 🚧 Work In Progress (WIP)  
> This project demonstrates a simple **Micro-Frontend (MFE)** architecture using **Webpack Module Federation** with **React and TypeScript**.  
> The goal is to showcase how independent micro-frontends (MFEs) can be dynamically loaded while sharing global state.

---

## 🚀 Project Overview

This project consists of **two micro-frontends**:
1. **Dashboard (Host App)** - The main container application that loads micro-frontends dynamically.
2. **Analytics App (Remote MFE)** - A remote micro-frontend that provides analytics data.

The apps communicate via **Webpack Module Federation**, dynamically loading the **Analytics App** inside the **Dashboard** without requiring a full-page reload.

---

## 🎯 Features

- **Micro-Frontend Architecture** using **Webpack Module Federation**
- **React 18 + TypeScript**
- **Global State Sharing** via **React Context API**
- **Dynamic Federation** to load remote applications at runtime
- **Deployed on Vercel** for live testing

---

## 🏗️ Deployment

The project is deployed on **Vercel**.

- **Dashboard (Host)** → [🔗 Vercel Deployment](https://mfe-dashboard-murex.vercel.app/)

---

## 🛠️ Enhancements & Roadmap

### ✔️ Basic Functionality:
✅ **Host Dashboard** loads the remote **Analytics App** dynamically.  
✅ Fetches and displays sample **API data**.

### 🔜 Next Steps:
🔹 **Improve UI/UX** (Styling, Layout, Themes).  
🔹 **Add Authentication & Role-Based Access**.  
🔹 **Expand API integrations** for real-world data.  
🔹 **Add more micro-frontends** (e.g., Reporting, Insights).  

---

## 👨‍💻 Author

**Doug DeLoy**  
🔗 [My Portfolio](https://ddeloy.com)  
📂 [GitHub Repository](https://github.com/ddeloy/mfe-dashboard)  
📧 Email: ddeloy29@gmail.com  

