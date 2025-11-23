# ByeWind Dashboard

A modern, responsive eCommerce dashboard application built with React, TypeScript, and Tailwind CSS. This project features a comprehensive dashboard with data visualization, order management, and a sleek dark/light mode interface.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Interactive Sidebars**: 
  - Left sidebar for navigation with slide-in/out animation
  - Right sidebar for activities, notifications, and contacts
- **Data Visualization**:
  - Projections vs Actuals bar chart
  - Revenue line chart with current and previous week comparison
  - Total Sales donut chart with segment breakdown
  - Revenue by Location world map with location markers
- **Order Management**: Complete order list view with filtering and search capabilities
- **Real-time Updates**: Activity feed and notifications system

## Tech Stack

- **React 19.2.0**: Modern React with latest features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Chart.js & React-Chartjs-2**: Chart visualization library

## Project Structure

```
src/
├── components/
│   ├── Charts.tsx          # Chart components (Projections, Revenue, Donut, World Map)
│   ├── Dashboard.tsx        # Main dashboard view
│   ├── Header.tsx           # Top navigation header
│   ├── Sidebar.tsx          # Left navigation sidebar
│   ├── RightSidebar.tsx     # Right sidebar (Activities, Notifications, Contacts)
│   └── OrderList.tsx        # Order management view
├── data/
│   └── mockData.ts          # Mock data for orders, products, activities, etc.
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd juspay-assignment
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
yarn build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
yarn preview
```

## Available Scripts

- `yarn dev`: Start the development server
- `yarn build`: Build the application for production
- `yarn preview`: Preview the production build
- `yarn lint`: Run ESLint to check code quality

## Key Components

### Dashboard
The main dashboard displays:
- Key metrics cards (Customers, Orders, Revenue, Growth)
- Projections vs Actuals chart
- Revenue line chart
- Revenue by Location map
- Top Selling Products table
- Total Sales donut chart

### Order List
Complete order management interface with:
- Search functionality
- Status filtering
- Pagination
- Responsive table layout

### Sidebars
- **Left Sidebar**: Navigation menu with dashboard and page options
- **Right Sidebar**: 
  - Activities feed
  - Notifications
  - Contacts list

## Features in Detail

### Theme Toggle
Click the sun/moon icon in the header to toggle between dark and light modes. The theme preference is maintained throughout the application.

### Sidebar Controls
- **Left Sidebar**: Click the `PanelsTopLeft` icon or menu button to toggle
- **Right Sidebar**: Click the `PanelRight` icon to toggle
- Both sidebars support smooth slide animations
- Mobile-friendly overlay implementation

### Charts
All charts are responsive and adapt to the current theme:
- **Projections Chart**: Stacked bar chart showing projections vs actuals
- **Revenue Chart**: Line chart comparing current and previous week revenue
- **Donut Chart**: Total sales breakdown by source (Direct, Affiliate, Sponsored, E-mail)
- **World Map**: Interactive map showing revenue by location with horizontal bar indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses:
- **ESLint**: For code linting
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Vite**: For fast development and building

## License

This project is private and proprietary.

## Author

Developed as part of Juspay assignment.
