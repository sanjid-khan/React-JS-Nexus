# React State, Re-render & UI Update

## 🔥 1. State গুলো কী করছে?

```jsx
const [search, setSearch] = useState("");
const [priceFilter, setPriceFilter] = useState(false);
const [discountFilter, setDiscountFilter] = useState(false);
const [sortType, setSortType] = useState(null);
```

👉 এগুলো সব **React state**

মানে:

* `search` → input box text
* `priceFilter` → true/false filter
* `discountFilter` → true/false filter
* `sortType` → sorting type

---

## 🔥 2. State change হলে কী হয়?

👉 React rule:

```text
State change
     ↓
Component re-render
     ↓
UI update
```

### উদাহরণ:

যখন তুমি লিখো:

```js
setSearch("shirt");
```

👉 React করে:

* ✔️ `search` update
* ✔️ `App()` আবার run হয়
* ✔️ UI re-render হয়

---

## 🔥 3. Re-render মানে কী এখানে?

👉 React আবার পুরো function চালায়:

```js
function App() {
```

👉 আবার সব execute হয়:

* state values new থাকে
* filters apply হয়
* products আবার calculate হয়
* UI আবার generate হয়

---

## 🔥 4. `getProcessedProducts()` কখন run হয়?

```js
const products = getProcessedProducts();
```

👉 এটা প্রতিবার **re-render** এ run হয়।

### Flow:

```text
যখন state change হয়:
        ↓
App() re-run
        ↓
getProcessedProducts()
        ↓
filter + sort
        ↓
new products array
        ↓
map() → Card render
```

---

## 🔥 5. `map()` কীভাবে re-render trigger করে?

```js
products.map(...)
```

👉 React:

* নতুন array পায়
* প্রতিটা item → `<Card />`
* UI আবার redraw করে

---

## 🔥 6. Button click → কী হয়?

উদাহরণ:

```jsx
onClick={() => setPriceFilter(!priceFilter)}
```

👉 Flow:

```text
priceFilter true/false change
        ↓
App() re-run
        ↓
getProcessedProducts() run
        ↓
filtered list update
        ↓
UI update
```

---

## 🔥 7. Search input কীভাবে re-render করে?

```jsx
onChange={(e) => setSearch(e.target.value)}
```

👉 Flow:

```text
user type করে
     ↓
setSearch update হয়
     ↓
App() re-run
     ↓
filter apply হয়
     ↓
matching products show হয়
```

---

## 🔥 8. Sort button কী করে?

```js
setSortType("price");
```

👉 Flow:

```text
sortType change
      ↓
App re-run
      ↓
.sort() run
      ↓
sorted array return
      ↓
UI update
```

---

# 🔥 BIG PICTURE — সব একসাথে

```text
User Action (click/type)
        ↓
    setState()
        ↓
React triggers re-render
        ↓
      App() runs again
        ↓
getProcessedProducts() runs
        ↓
  filter/sort applied
        ↓
 products array updated
        ↓
  map() → Card components
        ↓
      UI update
```

---

# ⚠️ Important Concept (Interview Level)

👉 React re-render মানে:

```text
❌ DOM update না

✔️ function আবার run হয়
✔️ Virtual DOM rebuild হয়
✔️ diff করে actual DOM update করে
```

---

# 🔥 9. এই Code-এর Real Problem (Important)

```jsx
key={ind}
```

👉 index use করা safe না (real world)

### Better:

```jsx
key={item.id}
```

---

# 🔥 Final Summary

👉 তোমার code এ re-render হয় যখন:

* ✔️ search change
* ✔️ filter toggle
* ✔️ sort change

👉 প্রতিবার:

```text
state change
     ↓
App re-run
     ↓
products recompute
     ↓
UI update
```

---

# 🔥 এক লাইনে মনে রাখো

> **“React re-renders the whole component function whenever state changes, and rebuilds UI based on new output.”**
