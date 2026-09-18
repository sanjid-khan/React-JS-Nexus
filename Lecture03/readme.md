# JSX & Babel

```js
// এটা Browser বোঝে না ❌

const element = <h1>Hello World</h1>;
```

---

## JSX

```jsx
const element = <h1>Hello World</h1>;
```

**Babel রূপান্তর করে দেয়:**

```js
const element = React.createElement(
  "h1",
  null,
  "Hello World"
);
```

Browser এখন এটা বুঝতে পারে ✅

---

## JSX → Babel → React

### JSX Code

```jsx
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
```

### Babel বানাই

```js
function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Hello"),
    React.createElement("p", null, "World")
  );
}
```

---

## Complete Flow

```text
JSX
  ↓
Babel
  ↓
React.createElement()
  ↓
React
  ↓
Virtual DOM (JS Object)
  ↓
ReactDOM.render()
  ↓
Real DOM (HTML Element)
```

---

# JSX থেকে Real DOM পর্যন্ত

## ধাপ ১ — আপনি লিখলেন JSX

```jsx
const el = <h1 className="title">Hello</h1>;
```

---

## ধাপ ২ — Babel রূপান্তর করলো

```js
const el = React.createElement(
  "h1",
  { className: "title" },
  "Hello"
);
```

---

## ধাপ ৩ — React বানালো JS Object (Virtual DOM)

```js
const el = {
  type: "h1",
  props: {
    className: "title",
    children: "Hello"
  }
};
```

---

## ধাপ ৪ — ReactDOM সেটাকে Real HTML এ রাখলো

```html
<h1 class="title">Hello</h1>
```

**← Browser এ দেখা যায়**

---

# Complete Flow

```text
JSX
 ↓
React.createElement()
 ↓
Virtual DOM
 ↓
ReactDOM
 ↓
Real DOM
```

```text
(Babel)       (React)       (JS Object)       (HTML Element)
```

---

# সহজ Rule 🎯

> **{} এর ভেতরে শুধু এমন কিছু লেখো যেটা একটা value দেয়!**
