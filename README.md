# Lalgudi Booth Finder Pro

A dedicated web application for finding and viewing all polling booths in Lalgudi Constituency, Tiruchirappalli District.

## Features

- **Interactive Map**: View all 249 polling booths on an interactive map
- **Booth List**: Browse through a complete list of all booths
- **Click to Navigate**: Click on any booth to see its details and location
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 16+ 
- Bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

### Build

```bash
# Production build
bun run build
# or
npm run build
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Leaflet** - Map functionality
- **React Router** - Navigation
- **Shadcn UI** - Component library

## Project Structure

```
src/
├── components/
│   ├── ui/          # UI component library
│   └── BoothMap.tsx # Main map component
├── data/
│   └── booths.ts    # Booth data (249 entries)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Tailwind styles
```

## License

This project is open source and available under the MIT License.
