# SCSS Architecture - BallotFighter

## 📁 Folder Structure

```
src/scss/
├── abstracts/           # Variables, mixins, functions
│   ├── _variables.scss  # All project variables (colors, spacing, etc.)
│   └── _mixins.scss     # Reusable SCSS mixins
├── base/                # Base styles
│   ├── _reset.scss      # CSS reset and normalization
│   ├── _typography.scss # Typography rules
│   └── _utilities.scss  # Utility classes
├── layout/              # Layout components
│   ├── _navigation.scss # Navigation bar
│   └── _footer.scss     # Footer
├── components/          # Page components
│   ├── _hero.scss
│   ├── _about.scss
│   ├── _leadership.scss
│   ├── _manifesto.scss
│   ├── _competitors.scss
│   ├── _store.scss
│   ├── _content-generator.scss
│   ├── _crowdfunding.scss
│   ├── _news.scss
│   ├── _volunteers.scss
│   └── _dashboard.scss
└── main.scss            # Main SCSS entry point
```

## 🎨 Architecture Pattern: 7-1 Pattern

This project follows the **7-1 SCSS architecture pattern**:
- **7 folders** for different types of stylesheets
- **1 main file** (`main.scss`) that imports everything

### Folder Purposes:

1. **abstracts/** - No CSS output, only SCSS tools
   - Variables (colors, spacing, typography)
   - Mixins (reusable code patterns)
   - Functions (if needed)

2. **base/** - Foundation styles
   - Reset/normalize
   - Typography
   - Utility classes

3. **layout/** - Major layout components
   - Navigation
   - Footer
   - Grid systems

4. **components/** - Individual UI components
   - Each component gets its own partial file
   - Prefixed with underscore (_)

## 🚀 How to Use

### Import Order
The `main.scss` imports files in this order:
```scss
// 1. Abstracts (variables and tools)
@use 'abstracts/variables';
@use 'abstracts/mixins';

// 2. Base (foundation)
@use 'base/reset';
@use 'base/typography';
@use 'base/utilities';

// 3. Layout (structure)
@use 'layout/navigation';
@use 'layout/footer';

// 4. Components (individual parts)
@use 'components/hero';
// ... etc
```

### Using Variables
```scss
// In any component file
@use '../abstracts/variables' as *;

.my-component {
  color: $primary;           // Bangladesh green
  background: $secondary;    // Bangladesh red
  padding: $spacing-xl;
  border-radius: $radius-lg;
}
```

### Using Mixins
```scss
@use '../abstracts/mixins' as *;

.my-card {
  @include card-base;
  @include card-hover;
}

.my-button {
  @include button-primary;
}

.responsive-grid {
  @include grid-auto-fit(300px);
  
  @include respond-to('lg') {
    grid-template-columns: 1fr;
  }
}
```

## 🎯 Key Features

### Bangladesh Flag Theme
All colors are based on the Bangladesh flag:
- **Primary**: `#006A4E` (Green)
- **Secondary**: `#F42A41` (Red)
- **Accent**: `#FFB81C` (Gold)

### SCSS Features Used
- ✅ **Variables** - Centralized design tokens
- ✅ **Nesting** - Organized selector hierarchy
- ✅ **Mixins** - Reusable code patterns
- ✅ **@use/@forward** - Modern module system
- ✅ **Partials** - Split code into manageable files

### Available Mixins
- `flex-center`, `flex-between`, `flex-column`
- `grid-auto-fit($min-width)`, `grid-auto-fill($min-width)`
- `respond-to($breakpoint)` - Responsive media queries
- `button-primary`, `button-secondary`, `button-outline`
- `card-base`, `card-hover`
- `input-base`
- `gradient-primary`, `gradient-primary-secondary`
- `container`, `section-spacing`
- And more...

### Responsive Breakpoints
```scss
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 968px;
$breakpoint-xl: 1200px;
$breakpoint-2xl: 1400px;

// Usage:
@include respond-to('lg') {
  // Styles for screens <= 968px
}
```

## 📝 Best Practices

1. **Never modify CSS files directly** - Only edit SCSS files
2. **Use variables** instead of hardcoded values
3. **Use mixins** for repeated patterns
4. **Nest selectors** but don't go more than 3-4 levels deep
5. **Name partials** with underscore prefix (`_name.scss`)
6. **Import in order** - abstracts → base → layout → components

## 🔄 Build Process

The SCSS is automatically compiled by Vite when you run:
```bash
npm run dev    # Development with hot reload
npm run build  # Production build
```

## 📦 Dependencies

- **sass** - SCSS preprocessor (installed via npm)
- **vite** - Handles SCSS compilation automatically

## 🆕 Adding New Components

1. Create new partial in `components/`:
   ```scss
   // _new-component.scss
   @use '../abstracts/variables' as *;
   @use '../abstracts/mixins' as *;

   .new-component {
     // Your styles
   }
   ```

2. Import in `main.scss`:
   ```scss
   @use 'components/new-component';
   ```

3. No need to import in React components - styles are global!

## ✨ Advantages Over Plain CSS

- 🎨 **Maintainability** - Change colors once, affect entire site
- 📦 **Organization** - Clear folder structure
- 🔄 **Reusability** - Mixins and functions
- 🎯 **Consistency** - Design tokens ensure uniformity
- 🚀 **Scalability** - Easy to add new components
- 💡 **Developer Experience** - Better code completion and IntelliSense

---

**Maintained by:** BallotFighter Development Team  
**Theme:** Bangladesh Flag Colors 🇧🇩  
**Architecture:** 7-1 SCSS Pattern
