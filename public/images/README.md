# Images for PI Curhat Landing Page

This directory should contain the following images for the website to display properly:

## Required Images

### 1. Hero Section
- **File**: `hero-counseling.jpg`
- **Description**: Photo of a counseling session (warm, professional atmosphere)
- **Recommended size**: 1200x1200px or similar aspect ratio
- **Usage**: Main hero image on the landing page

### 2. About Section
- **File**: `counselor-photo.jpg`
- **Description**: Professional photo of Dinda Chairun Nissa (counselor)
- **Recommended size**: 800x800px (square aspect ratio)
- **Usage**: About section counselor photo

### 3. Testimonials Section
- **File**: `testimonial-1.jpg`
- **Description**: Screenshot of WhatsApp testimonial from client #1
- **Recommended size**: 9:16 aspect ratio (mobile screenshot)
- **Usage**: Testimonial carousel

- **File**: `testimonial-2.jpg`
- **Description**: Screenshot of WhatsApp testimonial from client #2
- **Recommended size**: 9:16 aspect ratio (mobile screenshot)
- **Usage**: Testimonial carousel

- **File**: `testimonial-3.jpg`
- **Description**: Screenshot of WhatsApp testimonial from client #3
- **Recommended size**: 9:16 aspect ratio (mobile screenshot)
- **Usage**: Testimonial carousel

## Image Guidelines

- **Format**: Use `.jpg` or `.webp` for photos, `.png` for graphics with transparency
- **Optimization**: Compress images before adding (use tools like TinyPNG or Squoosh)
- **File names**: Must match exactly as specified above
- **Privacy**: Ensure testimonial screenshots have sensitive information blurred/removed

## Temporary Placeholders

The website currently displays placeholder gradients where images should be. Once you add the actual images:

1. Place the images in this `public/images/` directory
2. Uncomment the `<Image>` components in these files:
   - `components/sections/Hero.tsx` (line ~71)
   - `components/sections/About.tsx` (line ~55)
   - `components/sections/Testimonials.tsx` (line ~46)

3. Remove or comment out the placeholder `<div>` elements

## Next.js Image Optimization

The `<Image>` component from Next.js automatically:
- Optimizes images on-demand
- Serves images in modern formats (WebP)
- Lazy loads images below the fold
- Prevents layout shift with proper sizing

No additional configuration needed!
