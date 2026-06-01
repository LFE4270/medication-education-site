# Medication Education Hub

A simple, easy-to-use website for patient education about common medications.

## Features

✅ **Search Functionality** - Find medications by name, category, or description  
✅ **Filter by Category** - Browse medications by type (Pain Relief, Antibiotics, Allergies, etc.)  
✅ **Detailed Information** - Each medication includes:
   - Uses and indications
   - Dosage information
   - Common and serious side effects
   - Drug interactions
   - Important precautions and warnings
   - Medical disclaimer

✅ **Responsive Design** - Works on desktop, tablet, and mobile devices  
✅ **Easy to Update** - All medication data stored in a simple JSON file  
✅ **Accessible** - Follows web accessibility best practices

## Quick Start

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "GitHub Pages"
3. Select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be available at: `https://LFE4270.github.io/medication-education-site/`

### 2. View Your Site

Wait about 1-2 minutes for GitHub Pages to deploy, then visit your site!

## File Structure

```
medication-education-site/
├── index.html              # Main page
├── css/
│   └── style.css          # All styling
├── js/
│   └── app.js             # Search, filter, and modal functionality
├── data/
│   └── medications.json   # Medication database
└── README.md              # This file
```

## How to Add or Edit Medications

All medication data is stored in `data/medications.json`. To add new medications:

1. Open `data/medications.json`
2. Add a new medication object in the array following this format:

```json
{
  "id": 9,
  "name": "Medication Name",
  "category": "Pain Relief",
  "icon": "💊",
  "shortDescription": "Brief description",
  "description": "Detailed description of what it is",
  "uses": [
    "Use 1",
    "Use 2"
  ],
  "howToUse": "Instructions for use",
  "dosage": "Dosage information",
  "sideEffects": [
    "Side effect 1",
    "Side effect 2"
  ],
  "seriousSideEffects": "Information about serious side effects",
  "drugInteractions": "Information about interactions",
  "precautions": [
    "Precaution 1",
    "Precaution 2"
  ]
}
```

3. Commit and push your changes
4. GitHub Pages will automatically update within 1-2 minutes

### Available Categories

- Pain Relief
- Antibiotic
- Allergy
- Cold & Flu
- Blood Pressure

To add a new category:
1. Add it to the filter buttons in `index.html`
2. Update the CSS color scheme in `css/style.css`
3. Add medications with that category to `medications.json`

## Customization

### Change Site Title
Edit `index.html` line 5: `<title>Your New Title</title>`

### Change Header/Logo
Edit the `.logo` text in the navigation bar in `index.html`

### Customize Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #10b981;    /* Green */
    --accent-color: #f59e0b;       /* Orange */
    --danger-color: #ef4444;       /* Red */
}
```

## Important Legal Notes

⚠️ **Medical Disclaimer**: This website is for educational purposes only. The information provided is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making any decisions related to medication.

✓ Consider consulting with medical professionals to review content accuracy  
✓ Include clear disclaimers throughout the site  
✓ Keep information up-to-date with latest medical knowledge

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

### To add more medications:
Edit `data/medications.json` following the format of existing entries

### To change colors:
Edit the CSS variables at the top of `css/style.css`

### To modify the layout:
Edit `index.html` and `css/style.css`

## License

This project is provided as-is for educational purposes.

---

**Created with ❤️ for patient education**
