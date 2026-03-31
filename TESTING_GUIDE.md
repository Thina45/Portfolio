# Quick Testing Guide

## 🧪 How to Test the Changes

### 1. Mobile Hamburger Menu

**Desktop View (> 768px):**
- [ ] Hamburger button should NOT be visible
- [ ] Desktop navigation should be visible
- [ ] Contact button should be visible

**Mobile View (< 768px):**
- [ ] Hamburger button should be visible
- [ ] Click hamburger button
- [ ] Menu drawer should slide down smoothly
- [ ] All navigation links should be visible
- [ ] Click any link - menu should close automatically
- [ ] Click hamburger again - menu should close
- [ ] Hamburger icon should animate (3 lines → X shape)

**Keyboard Navigation:**
- [ ] Tab to hamburger button
- [ ] Press Enter/Space to toggle menu
- [ ] Tab through menu items
- [ ] Press Escape to close menu (optional enhancement)

---

### 2. Button Component

**Functionality:**
- [ ] Click "See my work" button
- [ ] Page should scroll smoothly to counter section
- [ ] Button should have proper hover effects
- [ ] Button should be keyboard accessible (Tab + Enter)

**Accessibility:**
- [ ] Right-click button → Inspect
- [ ] Check that it's a `<button>` element (not `<a>`)
- [ ] Check aria-label attribute exists
- [ ] Test with screen reader (NVDA/JAWS)

---

### 3. SEO Meta Tags

**In Browser DevTools:**
1. Open DevTools (F12)
2. Go to Elements/Inspector tab
3. Expand `<head>` section
4. Verify these tags exist:

```html
<!-- Should see these -->
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://thinakaran.dev">
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="...">
<meta property="og:image" content="...">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
<script type="application/ld+json">
  {"@context": "https://schema.org", "@type": "Person", ...}
</script>
<script type="application/ld+json">
  {"@context": "https://schema.org", "@type": "Organization", ...}
</script>
```

**Test Social Sharing:**
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your portfolio URL
3. Verify Open Graph tags are detected

**Test Rich Snippets:**
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your portfolio URL
3. Verify JSON-LD schemas are detected

---

### 4. Responsive Design

**Test on Different Screen Sizes:**
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px+)
- [ ] Large Desktop (1920px+)

**Use Chrome DevTools:**
1. Press F12
2. Click device toggle (Ctrl+Shift+M)
3. Select different devices from dropdown
4. Test all interactions

---

### 5. Performance Check

**Lighthouse Audit:**
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Check scores for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Expected Results:**
- Accessibility: 90+
- SEO: 90+
- Best Practices: 85+

---

### 6. Accessibility Check

**Using WAVE Browser Extension:**
1. Install [WAVE Extension](https://wave.webaim.org/extension/)
2. Click WAVE icon
3. Check for errors and warnings
4. Verify no critical issues

**Manual Keyboard Navigation:**
- [ ] Tab through all interactive elements
- [ ] All buttons/links should be reachable
- [ ] Focus indicators should be visible
- [ ] No keyboard traps

**Screen Reader Test (Windows):**
- [ ] Use Narrator (Win + Ctrl + Enter)
- [ ] Navigate through page
- [ ] Verify all content is readable
- [ ] Check button labels are announced

---

## 🐛 Troubleshooting

### Hamburger Menu Not Showing
- Check browser width (should be < 768px)
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools console for errors

### Button Not Scrolling
- Verify counter section exists with id="counter"
- Check browser console for JavaScript errors
- Ensure smooth scroll is supported

### SEO Tags Not Showing
- Check page source (Ctrl+U)
- Look in `<head>` section
- Verify no typos in meta tag names

### Mobile Menu Not Closing
- Check if click handler is attached
- Verify closeMobileMenu function is called
- Check for JavaScript errors in console

---

## 📱 Mobile Testing Devices

**Recommended Testing:**
- iPhone 12/13/14 (375px width)
- Samsung Galaxy S21 (360px width)
- iPad (768px width)
- Android tablets (various sizes)

**Use Chrome DevTools Emulation:**
- Pixel 5 (393px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)

---

## ✅ Final Checklist

Before deploying:
- [ ] All hamburger menu interactions work
- [ ] Button component scrolls correctly
- [ ] SEO meta tags are present
- [ ] No console errors
- [ ] Responsive design works on all breakpoints
- [ ] Accessibility score is 90+
- [ ] Mobile menu closes on navigation
- [ ] All links are keyboard accessible

---

**Status:** Ready for Testing ✅
