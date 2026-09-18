# Redux Toolkit

## Installation

```bash
npm install react-redux
```

```bash
npm install @reduxjs/toolkit
```

---

# Slice

## Initial State

`initialState` একটা object-এর ভিতরে রাখা হয়।

```js
const initialState = {
  count: 0
};
```

`reducers` হচ্ছে একটা function, তার ভিতরে function দেওয়া হয়।

---

## Slice-এর State Structure

যদি:

```js
const initialState = {
  count: 0
};
```

তাহলে Store-এ:

```js
state = {
  sliceCount1: {
    count: 0
  }
};
```

এজন্য component এ:

```js
state.sliceCount1.count
```

---

# Store

Store-এ state structure এমন হতে পারে:

```js
state = {
  sliceCount1: {
    count: 0
  }
};
```

এজন্য component এ:

```js
state.sliceCount1.count
```

---

# Counting

```js
const count = useSelector(
  (state) => state.sliceCount1.count
);
```

Redux store থেকে `count` আনলাম।

```text
sliceCount1 = store key
.count      = slice এর data
```

### Important

```text
useSelector
    ↓
Redux state পড়তে
```

```text
useDispatch
    ↓
Action পাঠাতে
```

---

# Dispatch

`dispatch` হচ্ছে একটা function।

### কাজ:

> Store-এ action পাঠানো।

---

# Global Redux State

Redux store-এর global state একটা বড় object-এর মতো থাকতে পারে:

```js
const state = {
  slice1: {
    count: 0
  },

  slice2: {
    count: 2,
    name: "Rohit"
  },

  slice3: {
    login: true
  }
};
```

এজন্য component এ:

```js
state.slice1.count
```

---

# createSlice()

`createSlice()` আসলে একটা object return করে।

এই object-এর ভিতরে ২টা গুরুত্বপূর্ণ জিনিস থাকে:

```text
actions
reducer
```

---

# 🔵 `slice.actions` কেন ব্যবহার করা হয়?

```js
export const {
  Increment,
  Decrement,
  Reset
} = reactslicer.actions;
```

👉 এখানে `actions` মানে হলো **action creator functions**।

---

## 📦 Action Creator কী?

এটা এমন function, যেটা call করলে একটা **action object** তৈরি করে।

উদাহরণ:

```js
Increment();
```

👉 এটা return করবে:

```js
{
  type: "slice1/Increment"
}
```

---

# 🧠 বাস্তবে কীভাবে কাজ করে?

যখন তুমি লিখো:

```js
dispatch(Increment());
```

Redux-এর কাছে যায়:

```js
{
  type: "slice1/Increment"
}
```

👉 মানে তুমি Redux-কে বলছো:

> **"Increment নামে কাজটা করো"**

---

# 🟢 `slice.reducer` কেন export করা হয়?

```js
export default reactslicer.reducer;
```

👉 এটা হলো **main reducer function**।

এই reducer-কে আমরা Store-এ ব্যবহার করি:

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

## 1️⃣ UI থেকে dispatch করো

```js
dispatch(Increment());
```

↓

## 2️⃣ Action তৈরি হয়

```js
{
  type: "slice1/Increment"
}
```

↓

## 3️⃣ Reducer এটা ধরে

```js
Increment: (state) => {
  state.count = state.count + 1;
}
```

↓

## 4️⃣ State update হয়

```text
count: 0
   ↓
count: 1
   ↓
count: 2
   ↓
count: 3
```

---

# 🎯 সহজভাবে মনে রাখো

```text
actions
   ↓
কি করতে হবে
(command)
```

```text
reducer
   ↓
কিভাবে state change হবে
```

---

# ⚡ Short Summary

### `reactslicer.actions`

👉 Action বানানোর জন্য।

### `reactslicer.reducer`

👉 State change করার logic।

---

# 💥 সহজ Analogy

ধরো:

```text
actions
   ↓
📩 চিঠি
(instruction পাঠানো)
```

আর:

```text
reducer
   ↓
🧠 সেই চিঠি পড়ে কাজ করা
```

---

# 🔄 Redux Toolkit পুরো Flow

```text
UI
 ↓
dispatch()
 ↓
Action Creator
 ↓
Action Object
 ↓
Reducer
 ↓
State Update
 ↓
Redux Store
 ↓
useSelector()
 ↓
Component
 ↓
UI Update
```
