# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/qr-code-component-using-css-flexbox-wlkqMbKLoC)
- [Live Site URL](https://frontendmentor-blog-preview-card-roan.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling

### What I learned

#### Applying a custom solid box shadow

```html
<article
  className="bg-white w-[370px] rounded-2xl flex flex-col p-4 gap-4 border border-black shadow-black shadow-solid"
>
  {...}
</article>
```

```css
theme: {
  extend: {
    boxshadow: {
      solid: "8px 8px 0 0";
    }
  }
}
```

### Useful resources

- [Solid Drop Shadow using Tailwind CSS](https://www.bradient.com/posts/solid-drop-shadow-using-tailwind-css/) - This helped me understand how to create a solid box shadow using Tailwind CSS.

## Author

- Website - [Matthew](https://mw138-portfolio.vercel.app/)
- Frontend Mentor - [@mw-138](https://www.frontendmentor.io/profile/mw-138)
