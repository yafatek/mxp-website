# Mobile-First Design Pattern

## Core Principles Applied to ALL Sections:

### 1. Section Wrapper
```tsx
<section className="relative py-12 md:py-20 lg:py-32 ...">
  <Container>
    <div className="mx-auto max-w-7xl px-4">
```

### 2. Section Headers
```tsx
<div className="text-center mb-8 md:mb-12 lg:mb-20 px-4">
  <div className="...px-3 py-2 rounded-full ... mb-3 md:mb-6">
    <Icon className="h-3 w-3 md:h-4 md:w-4" />
    <span className="text-xs md:text-sm">LABEL</span>
  </div>
  
  <h2 className="mb-3 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
    Title
  </h2>
  
  <p className="text-sm sm:text-base md:text-lg lg:text-xl px-4">
    Description
  </p>
</div>
```

### 3. Card Grids
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

### 4. Cards
```tsx
<div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 ...">
  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
    <Icon className="h-5 w-5 md:h-6 md:w-6" />
    <div className="flex-1 min-w-0">
      <h3 className="text-lg sm:text-xl md:text-2xl break-words">Title</h3>
      <p className="text-xs sm:text-sm md:text-base break-words">Text</p>
    </div>
  </div>
</div>
```

### 5. Code Blocks
```tsx
<div className="rounded-xl bg-slate-900 p-3 md:p-4 overflow-x-auto">
  <pre className="text-[10px] sm:text-xs md:text-sm ...">
    <code>{code}</code>
  </pre>
</div>
```

### 6. Tables
```tsx
<div className="overflow-x-auto">
  <table className="w-full min-w-[600px]">
    <thead>
      <tr>
        <th className="px-3 py-2 md:px-6 md:py-4 text-xs md:text-sm">
```

### 7. Text Wrapping
- Always add: `break-words`, `leading-relaxed`, `min-w-0`
- For long text: `overflow-wrap: break-word`

### 8. Spacing Scale
- Mobile: `gap-3`, `p-3`, `mb-6`
- Tablet: `md:gap-4`, `md:p-6`, `md:mb-12`
- Desktop: `lg:gap-6`, `lg:p-8`, `lg:mb-20`
