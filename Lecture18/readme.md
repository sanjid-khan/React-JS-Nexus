
<!-- Install @tailwindcss/postcss and its peer dependencies via npm. -->
npm install tailwindcss @tailwindcss/postcss

<!-- Create a .postcssrc file in your project root, and enable the @tailwindcss/postcss plugin. -->
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

<!-- Create a ./src/index.css file and add an @import for Tailwind CSS. -->
@import "tailwindcss";


<!-- Run your build process with npx parcel src/index.html. -->
npx parcel src/index.html 


