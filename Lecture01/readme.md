# React — createRoot, Fiber & Batching

```js
const element = React.createElement("h1", {}, "Hello Coder Army");

ReactDOM.render(element, document.getElementById('root'));
```

**element: 50 card pade hue hai**

এটা simple — একটা function call, একবার DOM এ ঢুকিয়ে দাও, শেষ।

React এর কোনো "control" নেই, সে শুধু execute করে চলে যায়।

---

## ReactDOM.createRoot()

```js
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// React root container
Reactroot.render(element);
```

এটা দুই ধাপে কাজ করে —

### ধাপ ১ — createRoot()

React বলছে:

> "এই div#root আমার দখলে, আমি এখানে একটা fiber tree বানাচ্ছি।"

Fiber tree হলো React এর internal data structure যেখানে সে পুরো app এর component গুলো track করে।

### ধাপ ২ — root.render()

React বলছে:

> "এখন আমার fiber tree দেখে Virtual DOM বানাও, তারপর real DOM এ apply করো।"

---

## Fiber কী জিনিস?

মনে করো তোমার app এ অনেক কাজ একসাথে হচ্ছে — animation, data fetch, user input। আগের React সব কাজ একসাথে করতো, মাঝপথে থামতে পারতো না। ফলে app freeze হতো।

Fiber হলো React এর নতুন engine যেটা কাজকে ছোট ছোট টুকরায় ভাগ করে। জরুরি কাজ (যেমন user এর typing) আগে করে, কম জরুরি কাজ পরে করে।

### আগে (v17)

```text
কাজ ১ → কাজ ২ → কাজ ৩
(থামানো যায় না)
```

### এখন (v18)

```text
কাজ ১ → থামো → কাজ ৩ (জরুরি) → আবার কাজ ২
```

---

## Batching কী?

```js
// আগে React (v17) — তিনটা আলাদা re-render হতো

setCount(1);

setName("Rahim");

setAge(25);
```

```js
// React 18 — তিনটা একসাথে, মাত্র একটা re-render

// এটাই Automatic Batching
```

---

## React 18 এ createRoot()

```js
const element = React.createElement("h1", {}, "Hello Coder Army");

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(element);
```

অথবা:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
```

React 18 এ Concurrent Mode introduce হয়েছে।

এখন React DOM render directly control করে fiber tree।

```text
createRoot() → root fiber node তৈরি করে।
```

পরে:

```text
root.render()
```

→ React কে বলে "এই element এর জন্য fiber tree থেকে virtual DOM থেকে real DOM update করো"।

সংক্ষেপে, createRoot gives React a “root object” to manage the app.

---

## ReactDOM.render vs createRoot()

### ReactDOM.render

```text
ReactDOM.render
↓
একবার DOM render করে
↓
Simple
```

### ReactDOM.createRoot(root).render()

```text
ReactDOM.createRoot(root).render()
↓
React কে control দেয়
↓
Fiber
↓
Concurrent Mode
↓
Automatic Batching
↓
Efficient DOM Updates
```

---

## Internal Working

```text
createRoot()
     ↓
Root Object তৈরি করে
     ↓
Root Fiber তৈরি করে
     ↓
Fiber Tree track করে
     ↓
root.render()
     ↓
Virtual DOM / React Elements
     ↓
Real DOM update
```

---

## Summary

```text
ReactDOM.render
→ একবার DOM render করে, simple

ReactDOM.createRoot(root).render()
→ React কে control দেয় fiber + concurrent mode + batching জন্য

Internal:
root object বানায়
→ fiber tree track করে
→ DOM efficiently update করে
```
