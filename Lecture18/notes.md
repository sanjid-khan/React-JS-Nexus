<!-- **************************************************-->
1: color

<!-- bg-red-500 -->
color intensity: 50 to 950

<!-- green orange sky blue -->
<!-- white and black don't have any intensity -->

<!-- text-color-intensity -->



<!-- *************************************************** -->
2:Border

<!-- border --> It will add default border with size 1px
<!-- border-2 --> 2px border
<!-- border-color-intensity -->

<!-- border-t, border-r, border-b, border-l -->
top, right bottom left
<!-- border-t-2 --> border top 2px



<!-- *************************************************** -->
3: Margin
<!-- m-1 --> here 1 points to 4px , 0.25rem, margin of 4px on all side
<!-- mx-1 -->horizontal margin
<!-- ny-1 -->vertical margin
<!-- mt mb ml mr -->



<!-- ***************************************************-->
4: padding
<!-- p-1 --> here 1 points to 4px, padding of 4px on all side:  (16px===1rem)
<!-- px-1 -->Horizontal padding
<!-- py-1 -->Vertical padding
p-[1px]
<!-- pt pb pl pr -->



<!-- ***************************************************-->


 Class       Font Size (rem)   Font Size (px)
 text-xs     0.75rem           12px
 text-sm     0.875rem          14px
 text-base   1rem              18px (default)
 text-lg     1.125rem          18px
 text-xl     1.25rem           28px
 text-2xl    1.5rem            24px
 text-3xl    1.875rem          38px
 text-4xl    2.25rem           36px
 text-5xl    3rem              48px


<!-- ***************************************************-->

border-radius

rounded
xs, sm, md,lg, xl, 2xl 











<!-- ***************************************************** -->


 Core Utilities (প্রায় সব প্রকল্পে লাগবে)
1. লেআউট (Layout)
css
flex, grid, block, inline-block, hidden
items-center, justify-between, justify-center
flex-col, flex-row
gap-4, space-x-4, space-y-4

2. স্পেসিং (Spacing)
css
/* Margin */
m-4, mx-4, my-4, mt-4, mb-4, ml-4, mr-4
/* Padding */
p-4, px-4, py-4, pt-4, pb-4, pl-4, pr-4

3. টাইপোগ্রাফি (Typography)
css
text-sm, text-base, text-lg, text-xl, text-2xl
font-bold, font-semibold, font-normal
text-center, text-left, text-right
text-white, text-gray-700
leading-relaxed, tracking-wide

4. কালার (Colors)
css
bg-white, bg-gray-100, bg-blue-500, bg-red-600
text-black, text-gray-800
border-gray-300
hover:bg-blue-600, focus:bg-blue-700

5. বর্ডার ও রাউন্ডেড (Borders)
css
border, border-2, border-b
rounded, rounded-lg, rounded-full
border-gray-200

6. সাইজ ও পজিশন (Sizing & Position)
css
w-full, w-1/2, w-64, min-w-fit, max-w-screen-md
h-screen, h-32, min-h-screen
relative, absolute, fixed, sticky
top-0, bottom-0, left-0, right-0

7. ডিসপ্লে (Display)
css
block, inline-block, inline, flex, grid
hidden, visible
overflow-hidden, overflow-auto

8. ইফেক্টস (Effects)
css
shadow, shadow-lg, shadow-md
opacity-50, opacity-100
transition, duration-300, ease-in-out

9. ইন্টারঅ্যাক্টিভিটি (Interactivity)
css
cursor-pointer, cursor-not-allowed
select-none
hover:scale-105, active:scale-95
focus:outline-none, focus:ring-2

🎯 রেসপনসিভ ডিজাইনের জন্য (Must Have)
css
sm:, md:, lg:, xl:, 2xl:
sm:text-lg, md:flex, lg:w-1/2

🔥 সব প্রকল্পে ব্যবহারের টিপস:
1. বেসিক টেমপ্লেট (Basic Template)
html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">
  <!-- আপনার কন্টেন্ট -->
</body>
</html>

2. প্রতি প্রজেক্টে রাখুন এই ক্লাসগুলো:
css
/* Container */
container mx-auto px-4

/* Card Style */
bg-white rounded-lg shadow-md p-6

/* Button Style */
bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition

/* Form Input */
border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500

/* Grid Layout */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

3. Customization (tailwind.config.js)
javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981',
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




<!-- ***************************************************** -->

🎯 1) Layout & Display — structure‑ইফেক্ট

block, inline, inline-block

flex, inline-flex

grid, inline-grid

hidden — hide element

container, box-border, overflow-auto


📦 2) Flexbox & Grid — responsive layout

flex-row, flex-col

justify-start, justify-center, justify-between

items-center, items-start, items-end

gap-4, gap-x-2, gap-y-6

grid-cols-2, grid-cols-3, grid-rows-2


📏 3) Spacing — Margin / Padding

Margin: m-1, mt-4, mb-2, mx-auto

Padding: p-2, pt-3, px-4, py-6

Space between children: space-x-4, space-y-2


📐 4) Sizing — Width / Height

w-full, w-1/2, w-screen

h-full, h-12, h-screen

max-w-lg, min-h-0


✏️ 5) Typography — Text & Font

Font size: text-sm, text-base, text-xl, text-4xl

Font weight: font-light, font-bold, font-semibold

Text align: text-left, text-center, text-right

Font style: italic, not-italic

Line height: leading-normal, leading-loose

Letter spacing: tracking-tight, tracking-wide


🎨 6) Color — Text / BG / Border

Text color: text-white, text-gray-500, text-red-600

Background: bg-blue-500, bg-gray-100, bg-black

Border: border, border-gray-300, border-2

Rounded corners: rounded, rounded-lg, rounded-full


🧱 7) Position & Z‑Index

static, relative, absolute, fixed, sticky

Position values: top-0, right-4, bottom-2, left-3

Z index: z-10, z-50


✨ 8) Effects — Shadow, Opacity

Shadows: shadow-sm, shadow, shadow-lg, shadow-none

Opacity: opacity-50, opacity-100

Cursor: cursor-pointer, cursor-not-allowed


🔁 9) Transitions & Animation

transition, transition-colors, transition-all

Durations: duration-200, duration-500

Timing: ease-in, ease-out, ease-in-out

Animations: animate-spin, animate-ping


📱 10) Responsive & State Variant Prefixes

Tailwind অপেক্ষাকৃত mobile‑first, তাই সাধারণত ছোট স্ক্রিনে আগে লিখে বড় স্ক্রিনে পরিবর্তন করা হয়:

Breakpoints:

sm:, md:, lg:, xl:
→ যেমন: md:flex, lg:text-xl

State variants:

hover:bg-blue-700, focus:outline-none, active:scale-95