# useState — কেন দরকার?

## মূল প্রশ্ন: UI কেন পরিবর্তন হয়?

যখন কোনো data বদলায়, তখন screen বদলায়।

**এটাই সব।**

---

## সাধারণ Variable দিয়ে হয় না কেন?

ধরো:

```js
let count = 0;

function handleClick() {
  count = count + 1;

  console.log(count); // ঠিকই বাড়ছে
}
```

`count` বাড়ছে — কিন্তু screen বদলাচ্ছে না।

কারণ **React জানেই না যে কিছু বদলেছে।**

React কে "বলতে" হবে যে —

> "এই data বদলেছে, এখন আবার render করো।"

---

# React এর কাজ কীভাবে?

React মূলত এই কাজ করে:

```text
Data
 ↓
UI
```

Data বদলালে:

```text
Data change
     ↓
UI নতুন করে আঁকে
```

কিন্তু এই **"data বদলেছে"** কথাটা React কে কেউ না বললে সে বসে থাকে।

---

# useState হলো সেই "বলার" Mechanism

```js
const [count, setCount] = useState(0);
```

```js
setCount(1);
```

`setCount(1)` মানে:

```text
1. count কে 1 করো

2. React কে বলো —
   "এই component আবার render করো"

3. তখন full component re-render হয়
```

---

# এক লাইনে

> **useState = data store করো + বদলালে React কে জানাও**

সাধারণ variable শুধু data store করে, কিন্তু বদলানোর খবর React কে দেয় না।

```text
সাধারণ Variable
       ↓
Data store করে
       ↓
React কে জানায় না ❌
       ↓
UI update হয় না
```

অন্যদিকে:

```text
useState
   ↓
Data store করে
   ↓
React কে জানায়
   ↓
Component re-render
   ↓
UI update ✅
```

---

## useState লাগে কেন?

> **useState লাগে কারণ React কে জানাতে হয় — "value change হয়েছে, UI update করো"**

---

# সারসংক্ষেপ

`useState` আসলে দুটো কাজ একসাথে করে —

1. **Value রাখে**
2. **React কে বলে "এই component আবার আঁকো।"**

সাধারণ variable শুধু value রাখতে পারে, React কে জানাতে পারে না।

তাই screen বদলায় না।

---

# 🔥 IMPORTANT CONCEPT (Must Understand)

👉 `setCount()` call হলে:

* ✔️ state up
