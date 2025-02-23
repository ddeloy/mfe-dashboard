# 📦 Micro-Frontend Dashboard (MFE-Dashboard)

> **Status:** 🚧 Work In Progress (WIP)  
> This project demonstrates a simple **Micro-Frontend (MFE)** architecture using **Webpack Module Federation** with **React and TypeScript**.  
> The goal is to demonstrate how independent micro-frontends (MFEs) can be dynamically loaded while sharing state globally.
> Additionally, a standalone Pivot Trading Dashboard was ported from my Day Trading App, featuring real-time stock market analysis.
---

## 🚀 Project Overview

This project consists of **three micro-frontends**:
1. **Dashboard (Host App)** - The main container application that loads micro-frontends dynamically.
2. **Analytics App (Remote MFE)** - A remote micro-frontend that provides analytics data.
3. **Pivot Trading Dashboard (Standalone App)** - A self-contained stock market analysis tool, fetching real-time data from Alpha Vantage API.

The Dashboard app communicates via **Webpack Module Federation**, dynamically loading the **Analytics App** inside the **Dashboard** without requiring a full-page reload.
The **Pivot Trading Dashboard**, while separate, demonstrates how an existing feature from a larger app can be isolated into a micro-service.

---

## 🎯 Features

- **Micro-Frontend Architecture** using **Webpack Module Federation**
- **React 18 + TypeScript**
- **Global State Sharing** via **React Context API**
- **Dynamically loaded remote micro-frontends** 
- **Pivot Trading Dashboard** powered by **Alpha Vantage API**
- **Deployed on Vercel** for live testing

---

## 🏗️ Deployment

The project is deployed on **Vercel**.

- **Dashboard (Host App)** → [🔗 Vercel Deployment](https://mfe-dashboard-murex.vercel.app/)
- **Pivot Trading Dashboard (Standalone App)** → [🔗 Vercel Deployment](https://mfe-dashboard-murex.vercel.app/)

---

## 🛠️ Enhancements & Roadmap

### ✔️ Basic Functionality:
- **Host Dashboard** loads the remote **Analytics App** dynamically.  
- Fetches and displays sample **API data**.
- **Pivot Trading Dashboard** **supports stock symbol input, rolling pivot calculations**, and **real-time analysis**.

### 🔜 Next Steps:
- **Improve UI/UX** (Styling, Layout, Themes).  
- **Add Authentication & Role-Based Access**.  
- **Expand API integrations** with relevant real-world data. 
- **Add more diverse micro-frontends**.
- **Enhance Pivot Dashboard** with visualization tools (**Charts, Trend Indicators**).
- **Integrate Pivot Dashboard** as a Micro-Frontend into the existing system.

---

### 📊 **Pivot Trading Dashboard - Overview**

The **Pivot Trading Dashboard** is a **self-contained micro-service** derived from my **full-featured Day Trading App**.

#### **🔹 Features:**
- **📌 Stock Symbol Input & Time Selection:** Users can enter a stock symbol and specify a time range for analysis.
- **📊 Rolling Pivot Calculations:** Uses **Mark Fisher’s ACD Trading Method** to determine key pivot levels.
- **🔗 Real-Time Stock Data Fetching:** Integrates with **Alpha Vantage API** for up-to-date market data.
- **📈 Market Trend Analysis:** Calculates **Bias**, **Momentum**, and **Price Action insights** based on historical price data.

To see a more complete example of the **Trading App**, visit:  
🔗 **[d-trade](https://ddeloy.com/d-trade)**

---

### **💡 Why a Standalone Micro-Service?**
This Pivot Dashboard was **extracted from a larger trading app** to demonstrate how individual features can be:
- **Modularized into standalone applications**
- **Deployed independently for scalability**
- **Easily integrated back into a larger system**

This is just a simple **example of how micro-frontends can be leveraged for complex applications** while maintaining flexibility and maintainability. 


## 👨‍💻 Author

**Doug DeLoy**  
🔗 [My Portfolio](https://ddeloy.com)   
📧 Email: ddeloy29@gmail.com  

