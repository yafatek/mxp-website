# Mobile-First Pattern - Apply to ALL Sections

## Section Wrapper
```tsx
<section className="relative py-12 md:py-20 lg:py-32 ...">
  <Container>
    <div className="mx-auto max-w-7xl px-4">
```

## Headers
```tsx
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
<h3 className="text-xl sm:text-2xl md:text-3xl">
<h4 className="text-lg sm:text-xl md:text-2xl">
```

## Grids
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

## Cards
```tsx
<div className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
```

## Text
- Always: `break-words`, `leading-relaxed`, `min-w-0`
- Sizes: `text-xs sm:text-sm md:text-base`

## Icons
```tsx
<Icon className="h-5 w-5 md:h-6 md:w-6" />
```

## Code Blocks
```tsx
<div className="overflow-x-auto">
  <pre className="text-[10px] sm:text-xs md:text-sm">
```

## Tables
```tsx
<div className="overflow-x-auto">
  <table className="w-full min-w-[600px]">
```
