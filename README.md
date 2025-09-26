# ☕ WOOF COFFEE - Virtual Coffee Shop

A modern, AI-powered virtual coffee shop built with Next.js, featuring an intelligent barista assistant for Seattle area customers.

## 🚀 Features

### 🤖 AI Barista Assistant
- Interactive chat interface with realistic responses
- Smart product recommendations based on customer preferences
- Handles questions about menu items, delivery, and dietary restrictions
- Quick question buttons for common inquiries

### 🛒 Shopping Cart & Ordering
- Add/remove items with quantity management
- Real-time cart updates
- Delivery address input for Seattle neighborhoods
- Order summary with tax and delivery fees
- Free delivery over $20

### ☕ Seattle-Themed Menu
- **Seattle Fog** - Signature blend with chocolate and caramel notes ($4.50)
- **Pike Place Pour Over** - Single-origin Ethiopian beans ($5.25)
- **Space Needle Cold Brew** - 12-hour steeped for smooth flavor ($4.00)
- **Rain City Latte** - Creamy latte with vanilla and cinnamon ($5.50)
- **Emerald City Mocha** - Rich chocolate mocha with mint ($6.00)
- **Mount Rainier Macchiato** - Layered espresso with caramel drizzle ($5.75)

### 🌧️ Seattle-Specific Features
- Local delivery messaging for Seattle neighborhoods
- Weather-aware drink recommendations
- 24/7 virtual operation
- Seattle-themed branding and references

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **UI Components**: Custom components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lsh355/info492.git
cd info492/woof-coffee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

### For Customers
1. **Browse the Menu**: Explore our Seattle-themed coffee selection
2. **Chat with AI Barista**: Click "AI Assistant" for personalized recommendations
3. **Add to Cart**: Select your favorite drinks and quantities
4. **Checkout**: Enter your Seattle delivery address and place your order

### AI Barista Capabilities
The AI assistant can help with:
- Product recommendations based on flavor preferences
- Menu explanations and drink comparisons
- Delivery information for Seattle areas
- Dietary restrictions (dairy-free options)
- Popular items and seasonal specials
- Weather-appropriate drink suggestions

## 🏗️ Project Structure

```
woof-coffee/
├── app/
│   ├── components/
│   │   ├── AIAgent.tsx          # AI barista chat interface
│   │   └── ShoppingCart.tsx     # Shopping cart modal
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx              # Root layout
│   └── page.tsx                 # Main homepage
├── public/                      # Static assets
├── package.json
└── README.md
```

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Coffee Shop Aesthetic**: Warm amber and orange color scheme
- **Smooth Animations**: Custom CSS animations for coffee steam effects
- **Modern UI**: Clean, professional interface with intuitive navigation
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of INFO492 coursework and is for educational purposes.

## 👥 Team

Built as part of INFO492 - Information Systems course.

---

**WOOF COFFEE** - Where technology meets tradition in the heart of Seattle ☕