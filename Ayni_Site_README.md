# Ayni Donation Landing Page

## Project Overview
This is a dedicated donation landing page for Stichting Ayni Bolivia-Nederland, designed to optimize the donation user flow while maintaining consistency with the main website (www.ayni.nl). The main website is hosted on Showit, while this donation-specific site is hosted on Railway to allow for custom code implementation and maximum flexibility in optimizing the donation process.

## Project Goals
1. Create a modern, user-friendly donation interface
2. Maintain brand consistency with the main Ayni website
3. Optimize the donation flow to minimize friction
4. Embed and integrate the Geef.nl donation system
5. Ensure responsive design for all devices

## Technical Specifications

### Hosting & Deployment
- Platform: Railway
- Main website: Showit (www.ayni.nl)

### Tech Stack
- Frontend:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- Backend:
  - Nginx server
  - Embedded Geef.nl donation system

### Key Files
- `index.html` - Main landing page structure
- `styles.css` - Styling and branding
- `script.js` - Interactive functionality
- `Dockerfile` - Container configuration

## Brand Guidelines

### Colors
- Primary: `#104d44` (Dark green)
- Secondary: `#d1ab3d` (Gold)
- Accent: `#d54b35` (Coral red)
- Terracota: `#ebbfa2` (Warm beige)
- Background: `#f2eee7` (Light cream)

CSS Variables:
```css
:root {
    --color-primary: #104d44;
    --color-secondary: #d1ab3d;
    --color-accent: #d54b35;
    --color-terracota: #ebbfa2;
    --color-background: #f2eee7;
}
```

### Design Language

#### Typography
- Headers: Clean, modern sans-serif font
- Body Text: Light weight font for improved readability
- Text Hierarchy:
  - Large, bold headlines for main sections
  - Smaller, elegant subheadings
  - Light, spacious body text

#### Layout & Spacing
- Clean, minimalist layout with ample white space
- Asymmetric grid system
- Large circular/oval shapes as background elements
- Generous padding between sections
- Content aligned in clear visual blocks
- Full-width sections alternating with contained content

#### Visual Elements
- Subtle decorative elements (small squares/dots) for visual interest
- Circular/oval shapes as background containers
- Clean horizontal lines for separation
- Rounded corners on interactive elements
- Elegant icons and buttons

#### Interactive Elements
- Button Styles:
  - Primary: Solid background with white text
  - Secondary: Outline style with color fill on hover
- Clear hover states on all interactive elements
- Subtle transitions and animations
- Underlined text links

#### Navigation
- Clean, horizontal navigation bar
- Minimal, text-based menu items
- Clear active states
- Consistent spacing between items

#### Content Presentation
- Clear content hierarchy
- Important text highlighted in accent colors
- Information presented in digestible blocks
- Use of white space to frame content
- Strategic use of color to guide attention

#### Responsive Behavior
- Fluid transitions between breakpoints
- Mobile-first approach
- Maintained visual hierarchy across devices
- Preserved white space on all screen sizes

#### Image Treatment
- Clean, high-quality images
- Consistent aspect ratios
- Subtle shadows or borders when needed
- Strategic placement to support content

#### Component Patterns
- Cards with consistent padding and spacing
- Clear call-to-action buttons
- Info blocks with consistent styling
- Form elements with ample spacing
- Clean, minimal input fields

This design language should be consistently applied across the donation platform to maintain visual coherence with the main Ayni website.

### Design Principles
- Modern and minimalist
- Focus on donation call-to-action
- Clear visual hierarchy
- Consistent with main website's look and feel

## Donation Integration
The site integrates with Geef.nl's donation system:
```
https://www.geef.nl/nl/doneer?action=29774&backLink=https%3A%2F%2Fwww.geef.nl%2Fnl%2Factie%2Fsteun-de-school-van-de-urus-gemeenschap-in-bolivia%2Fdonateurs
```

### Integration Requirements
- Seamless embedding of Geef.nl donation form
- Minimal clicks to complete donation
- Clear progress indicators
- Transparent donation process

## Development Guidelines
1. Maintain mobile-first approach
2. Optimize page load speed
3. Implement progressive enhancement
4. Follow accessibility best practices
5. Regular testing of donation flow

## Maintenance
- Regular testing of donation system integration
- Updates to content and campaigns as needed
- Performance monitoring
- Security updates

## Contact
For questions or issues regarding this donation platform, contact:
- Email: info@ayni.nl
- Phone: +31 (0)30-273 51 57

## About Ayni
Stichting Ayni Bolivia-Nederland is recognized as an ANBI (Algemeen Nut Beogende Instelling). The organization focuses on providing educational opportunities in Bolivia through IT education and infrastructure development.
