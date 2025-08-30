# 🌍 Project Anvesh - Environmental Monitoring System

![Project Anvesh](https://img.shields.io/badge/Project-Anvesh-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)


## 📋 Overview

**Project Anvesh** is a real-time environmental monitoring dashboard that tracks pollution levels using IoT sensors. The system provides an intuitive web interface to visualize environmental data, helping communities monitor and respond to pollution levels effectively.

## 🚀 Features

### 🎯 Core Functionality

- **Real-time Data Monitoring** - Live sensor data from Firebase
- **Visual Level Indicators** - Dynamic bar chart showing pollution percentage
- **Color-coded Status** - Instant visual feedback based on pollution levels
- **Auto-refresh** - Updates every 10 seconds automatically
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### 📊 Data Visualization

- **Pollution Level Bar** - Direct percentage mapping (50% value = 50% bar height)
- **Color Coding System**:
  - 🟢 **Green (0-30%)**: Excellent environmental conditions
  - 🟠 **Orange (31-70%)**: Moderate pollution levels
  - 🔴 **Red (71-100%)**: Critical pollution levels

## 🛠️ Technology Stack

| Technology                     | Purpose                     |
| ------------------------------ | --------------------------- |
| **HTML5**                      | Structure and semantics     |
| **CSS3**                       | Styling with modern effects |
| **JavaScript (ES6+)**          | Interactive functionality   |
| **Firebase Realtime Database** | Cloud data storage          |
| **Google Fonts**               | Typography (Roboto)         |


## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Firebase and Google Fonts
- Web server (for local development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/uday-donepudi/projectanvesh.git
   cd projectanvesh
   ```

2. **Firebase Setup**

   - Ensure Firebase configuration is properly set in both `index.html` and `home.html`
   - Verify Firebase Realtime Database rules allow read/write access

3. **Local Development**

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

4. **Access the application**
   - Open `http://localhost:8000` in your browser
   - The loading page will automatically redirect to the dashboard

## 🎛️ Configuration

### Firebase Configuration

Update the Firebase config in both HTML files:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-domain.firebaseapp.com",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};
```

### Customization Options

- **Refresh Interval**: Modify the 10-second auto-refresh in `home.html`
- **Color Thresholds**: Adjust pollution level ranges in `form.js`
- **Styling**: Customize CSS variables in `styles.css`


## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 🐛 Troubleshooting

### Common Issues

| Issue                    | Solution                                             |
| ------------------------ | ---------------------------------------------------- |
| **Loading screen stuck** | Check Firebase configuration and internet connection |
| **No data showing**      | Verify Firebase database has data in correct format  |
| **Levels not animating** | Check console for JavaScript errors                  |
| **Mobile layout broken** | Clear browser cache and test responsive breakpoints  |
