# Nimbus Healthcare Support Page

A modern, Apple-inspired support page for Nimbus Healthcare that provides comprehensive customer support, troubleshooting guides, educational resources, and how-to documentation.

## Features

- **Apple-like Design**: Clean, minimalist design matching Apple's support page aesthetics
- **Search Functionality**: Real-time search across all support content
- **Product Categories**: Organized by service areas (Patient Portal, Billing, Appointments, Medical Records, Telehealth, Prescriptions)
- **Troubleshooting Guides**: Common issues and solutions
- **Educational Resources**: Best practices and educational content
- **How-To Guides**: Step-by-step instructions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modal Details**: Expandable content view for detailed articles

## Structure

```
Support/
├── index.html          # Main HTML structure
├── styles.css          # Apple-inspired styling
├── script.js           # JavaScript functionality
├── data.js             # Support content data structure
└── README.md           # This file
```

## Usage

Simply open `index.html` in a web browser. No build process or dependencies required.

## Data Structure

The support content is organized in `data.js` with the following structure:

- **topics**: Popular topics and quick access items
- **troubleshooting**: Common issues and their solutions
- **education**: Educational content and best practices
- **howtos**: Step-by-step how-to guides
- **bestPractices**: Best practices for using the system

## Integration with Notion

The data structure in `data.js` can be easily populated from a Notion database or API. To integrate with Notion:

1. Set up a Notion integration
2. Create a database with columns matching the data structure
3. Fetch data from Notion API
4. Transform the data to match the `supportData` structure
5. Populate the data object

## Customization

- **Colors**: Modify CSS variables in `styles.css` (`:root` section)
- **Content**: Update `data.js` with your own support content
- **Categories**: Add or modify product categories in `index.html` and `data.js`
- **Styling**: Adjust styles in `styles.css` to match your brand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Nimbus Healthcare. All rights reserved.
