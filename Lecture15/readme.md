# Redux Toolkit — createSlice, Actions & Reducer

## `createSlice()`

`createSlice()` আসলে একটা object (বস্তু) return করে।

এই object-এর ভিতরে ২টা গুরুত্বপূর্ণ জিনিস থাকে:

* `actions`
* `reducer`

---

# 🔵 `reactslicer.actions` কেন ব্যবহার করা হয়?

```js
export const { Increment, Decrement, Reset } = reactslicer.actions;
```

👉 এখানে `actions` মানে হলো **action creator functions**।

## 📦 Action Creator কী?

এটা এমন function, যেটা call করলে একটা **action object** তৈরি করে।

উদাহরণ:

```js
Increment()
```

এটা return করবে:

```js
{
  type: "slice1/Increment"
}
```

---

# 🧠 বাস্তবে কীভাবে কাজ করে?

```js
dispatch(Increment())
```

👉 Redux-এর কাছে যায়:

```js
{
  type: "slice1/Increment"
}
```

👉 মানে তুমি Redux-কে বলছো:

> **"Increment নামে কাজটা করো"**

---

# 🟢 `reactslicer.reducer` কেন export করা হয়?

```js
export default reactslicer.reducer;
```

👉 এটা হলো **main reducer function**।

👉 এই reducer-কে আমরা store-এ ব্যবহার করি:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reactslicer";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

# 🔥 পুরো Flow — ধাপে ধাপে

### 1️⃣ তুমি UI থেকে dispatch করো

```js
dispatch(Increment())
```

### 2️⃣ Action তৈরি হয়

```js
{
  type: "slice1/Increment"
}
```

### 3️⃣ Reducer এটা ধরে

```js
Increment: (state) => {
  state.count = state.count + 1;
}
```

### 4️⃣ State update হয়

```text
count: 0 → 1 → 2 → 3
```

---

# 🎯 সহজভাবে মনে রাখো

```text
actions  = 👉 কি করতে হবে (command)

reducer  = 👉 কিভাবে state change হবে
```

---

# ⚡ ছোট করে Summary

```text
reactslicer.actions
        ↓
Action বানানোর জন্য

reactslicer.reducer
        ↓
State change করার logic
```

---

# 💥 সহজ Analogy

ধরো:

```text
actions = 📩 চিঠি (instruction পাঠানো)

reducer = 🧠 সেই চিঠি পড়ে কাজ করা
```

---

# 🧠 প্রশ্ন: `reactslicer.reducer` কেন export করা হয়?

```js
export default reactslicer.reducer;
```

👉 কারণ এটা হলো **Redux state update করার main logic (brain)**।

---

# 🔥 সহজভাবে পুরো বিষয়টা

`createSlice()` তোমাকে ২টা গুরুত্বপূর্ণ জিনিস দেয়:

## 1️⃣ `actions` — কী করতে হবে

```text
Increment()

Decrement()

Reset()
```

👉 এগুলো UI থেকে পাঠানো হয়।

---

## 2️⃣ `reducer` — কীভাবে state change হবে

```js
(state, action) => {
  switch (action.type) {
    case "Increment":
      state.count++;
  }
}
```

👉 এটা হলো আসল **state update করার machine**।

---

# 🧠 Reducer আসলে কী?

👉 Reducer হলো একটা function যা:

```text
(previousState, action) => newState
```

মানে:

1. আগের `state` নেয়
2. `action` দেখে
3. নতুন `state` বানায়

---

# 🚀 কেন Export করা লাগে?

কারণ Redux store-কে বলতে হয়:

> **"এই reducer দিয়েই আমার state handle করবে।"**

---

# 🏪 Store কেন লাগে?

```js
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

👉 এর মানে:

| অংশ              | কাজ                     |
| ---------------- | ----------------------- |
| `counter`        | State-এর নাম / key      |
| `counterReducer` | State update করার brain |

---

# 🧠 বাস্তব উদাহরণ — Bank System

ধরো:

```text
store   = পুরো Bank System

reducer = Cashier System

state   = Account Balance

action  = Deposit / Withdraw Request
```

তুমি বললে:

```js
dispatch(Increment())
```

👉 Cashier (Reducer) করে:

```js
count = count + 1;
```

---

# 🔥 Visual Flow

```text
UI Button Click
       ↓
dispatch(Increment())
       ↓
Action
{ type: "slice1/Increment" }
       ↓
Reducer Runs
       ↓
State Update
       ↓
UI Re-render
```

---

# 🎯 সবচেয়ে গুরুত্বপূর্ণ Line

> `reactslicer.reducer` export করা হয় কারণ:
>
> **এটা ছাড়া Redux Store বুঝতে পারবে না state কীভাবে update করতে হবে।**

---

# ⚡ One-line Summary

> **Reducer হলো state change করার brain, তাই reducer-কে Store-এ দিতে হয়।**
