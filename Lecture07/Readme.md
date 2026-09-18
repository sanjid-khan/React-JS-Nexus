# useEffect

## useEffect-এর ভূমিকা

`useEffect` হল React-এর **"escape hatch"** বা **"প্রস্থান পথ"** যখন:

* বাইরের সিস্টেমের সাথে সংযোগ দরকার (DOM, API, WebSocket, etc.)
* Side effects পরিচালনা করতে হবে
* React state এবং বাইরের জগতের মধ্যে Synchronization করতে হবে

---

# useEffect এর কাজ

`useEffect` React কে বলে:

> **"এই কাজটা render হওয়ার পর করো, এবং যখন dependency `[color]` change হবে তখনই আবার করো।"**

ফলে:

* DOM manipulation safe ভাবে হয়।
* শুধু তখনই execute হয় যখন `color` change হয়।
* React এর lifecycle ঠিক থাকে।

---

# সহজ কথায়

`useEffect` ব্যবহার করা মূল কারণ:

> **এটা DOM manipulation বা side effect handle করতে সাহায্য করে।**

তুমি state update করছো:

```js
setColor(...)
```

↓

Re-render হবে

↓

তারপর `useEffect` trigger হবে

↓

Background color change হবে।

এটা React best practice।

---

# Side Effect কী?

**Side effect handle করার React-এর official way হচ্ছে `useEffect`।**

`document.body` React element না, তাই direct DOM manipulation হচ্ছে → এটা **side effect**, যা React এ `useEffect` দিয়ে handle করতে হয়।

---

# useEffect ব্যবহার করবেন যখন:

* External API call করতে হবে
* Global DOM পরিবর্তন করতে হবে (যেমন: `document.title`, `body.classList`)
* Event listener add/remove করতে হবে `window/document`-এ
* `setInterval/setTimeout` ব্যবস্থাপনা
* Third-party library integration (যেমন: Google Maps, D3.js)

---

# সহজ Rule

```text
React এর বাইরে কিছু করতে হলে
          ↓
   useEffect ব্যবহার করো
```

এখানে:

```text
document.body
     ↓
React এর বাইরে
     ↓
useEffect দরকার ✅
```

---

# ❌ Render-এর ভিতরে API Call

```js
function App() {
  fetch('/api/data'); // ❌ প্রতি render এ call হবে!

  return <div>...</div>;
}
```

React যতবার render করে, ততবার এই code চলবে।

State বদলালে render,

render মানে আবার `fetch`,

`fetch` মানে হয়তো আবার state বদলাল,

মানে আবার render...

```text
State change
     ↓
Render
     ↓
fetch()
     ↓
State change
     ↓
Render
     ↓
fetch()
     ↓
...
```

**Infinite loop হতে পারে।**

---

# ✅ useEffect হলো সেই নিরাপদ জায়গা

React বলছে:

> **"ঠিক আছে, render শেষ হলে এই কাজগুলো করো। কিন্তু আমার render process এর মাঝখানে না।"**

```js
useEffect(() => {
  fetch('/api/data'); // render শেষে একবার চলবে
}, []); // [] মানে শুধু প্রথমবার
```

---

# এক লাইনে

> **useEffect = "React, তুমি তোমার কাজ শেষ করো, তারপর আমি বাইরের জগতের সাথে কথা বলব।"**

Render এর পরে controlled ভাবে side effect চালানোর জন্য `useEffect` লাগে।

---

# React এ দুইটা জিনিস আলাদা

## 1. Render Logic

```jsx
return <div>...</div>;
```

UI তৈরি করার logic।

## 2. Side Effects

```text
DOM change
API call
Event listener
Timer
WebSocket
Third-party library
```

---

# 🔥 Final Rule

```text
React এ দুইটা জিনিস আলাদা:

1. Render Logic
       ↓
   UI return

2. Side Effects
       ↓
DOM change, API call, etc.

        ↓

useEffect
        ↓
Side Effect handle করার proper জায়গা
```
