# 🌱 Tree Planting Campaign Website  

A responsive and interactive website for a **Tree Planting Campaign** that allows users to learn about the campaign, explore tree categories, and plant trees through an intuitive form and cart system.  

---

## 🚀 Features  

### 🌐 Website Structure  
- **Navbar**  
  - Logo/Website name (left)  
  - Navigation menu (center)  
  - *Plant a Tree* button (right)  

- **Banner Section**  
  - Full-width background image  
  - Title + subtitle  
  - Informational text (aligned right)  

- **About Campaign**  
  - Section heading  
  - Image (left) + text (right)  

- **Our Impact Section**  
  - 3 informational cards with campaign statistics  

- **Plant a Tree Section**  
  - Form with:  
    - Name  
    - Email  
    - Number of trees  

- **Footer**  
  - Copyright  

---

### ⚡ Functionalities  
- Tree categories load dynamically and display on the left panel  
- Category filter buttons with **active state** highlight  
- Cards for each tree category containing:  
  - Image  
  - Name  
  - Short description  
  - Category  
  - Price  
  - *Add to Cart* button  
- Modal view when clicking a tree name, showing detailed info  

---

### 🛒 Cart System  
- Add trees to cart using **Add to Cart** button  
- Auto-calculates **total amount** of selected trees  
- Remove item (❌ button) → updates total price  
- Cart updates instantly without reload  

---

### 🎯 Additional Requirements  
- Loading spinner on data load  
- Fully responsive design for all devices  

---

## 📂 Project Structure  
```
├── index.html # Main HTML file
├── style.css # Stylesheet
├── script.js # JavaScript logic
├── /assets
│ ├── images/ # All images
│ ├── icons/ # Icons and logo
│ └── data.json # Tree categories and info
└── README.md # Project documentation
```


---

## 🛠️ Technologies Used  

- **HTML5**  
- **CSS3** (Responsive design, Flex/Grid)  
- **JavaScript (ES6+)**  

---

## 📌 How to Use  

1. Clone this repository:  
   ```bash
   git clone https://github.com/sayeduzzamansajid/green-a6-basket.git
Open index.html in your browser.

Browse categories, add trees to cart, and check the total!

## 🌍 Live Demo

[[green basket netlify live link](https://greenbasket-a06.netlify.app/)]