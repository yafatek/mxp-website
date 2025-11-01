# MXP Website

Professional, enterprise-grade website for MXP Protocol built with React, Vite, Radix UI, and shadcn/ui.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI primitives
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the website.

### Build

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── sections/    # Page sections
│   ├── lib/             # Utilities
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## Features

- **Hero Section** - Eye-catching introduction with key metrics
- **Features Section** - Enterprise-grade feature highlights
- **Why MXP** - Comparison with other protocols and benefits
- **Pricing** - Three-tier pricing structure
- **Responsive Design** - Mobile-first, works on all devices
- **Professional Design** - Minimalistic, futuristic aesthetic

## Deployment

The website is configured to deploy to AWS S3 + CloudFront via the infrastructure in `../infra/`.

### Deploy Steps

1. Build the website:
   ```bash
   npm run build
   ```

2. Sync to S3:
   ```bash
   cd ../infra
   BUCKET_NAME=$(terraform output -raw bucket_name)
   aws s3 sync ../website/dist s3://$BUCKET_NAME --profile yafa_root
   ```

3. Invalidate CloudFront cache (optional):
   ```bash
   DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)
   aws cloudfront create-invalidation \
     --distribution-id $DISTRIBUTION_ID \
     --paths "/*" \
     --profile yafa_root
   ```

## Design System

### Colors

- **Primary**: Blue (#3B82F6) - Main brand color
- **Background**: White/Light gray
- **Foreground**: Dark text
- **Muted**: Subtle text and backgrounds

### Typography

- **Headings**: Bold, large tracking
- **Body**: Medium weight, readable size
- **UI Text**: Small, muted colors

## License

Same as the main project (MIT OR Apache-2.0)

