# React Props

Props হলো Component এ data পাঠানোর উপায়।

ঠিক যেমন Function এ argument পাঠাও।

---

## Normal Function

```js
function greet(name) {
  return "Hello " + name;
}

greet("Sanjid"); // argument পাঠালে
```

---

## Component এ Props

```jsx
function Card(props) {
  return <h2>Hello {props.name}</h2>;
}

<Card name="Sanjid" /> // props পাঠালে
```

---

## Multiple Props

```jsx
<Card name="Sanjid" age={21} />
```

React এটাকে এভাবে দেখে:

```js
// Card Function কে এই Object টা পাঠায়

{
  name: "Sanjid",
  age: 21
}
```

---

## Props Receive করা

Card Function টা সেটা receive করে:

```jsx
function Card(props) {
  console.log(props);

  // { name: "Sanjid", age: 21 }

  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}
```

---

# Props আসলে একটা সাধারণ JS Object!

```jsx
<Card name="Sanjid" age={21} />
```

```text
        ↓
```

React একটা Object বানায়:

```js
{
  name: "Sanjid",
  age: 21
}
```

```text
        ↓
```

`Card(props)` function এ পাঠায়

```text
        ↓
```

```js
props.name = "Sanjid"
props.age  = 21
```

```text
        ↓
```

UI তে দেখায়

---

# Props Flow

**Props = Component এর কাছে data পাঠানোর রাস্তা**

```text
Parent
   ↓
props দিয়ে data পাঠায়
   ↓
Child
   ↓
সেই data receive করে দেখায়
```

Props সবসময়:

```text
Parent → Child
```

Props কখনো:

```text
Child → Parent ❌
```

---

# JSX থেকে Props পর্যন্ত

```text
JSX এ যা লিখো
      ↓
React Object বানায়
      ↓
Function এ পাঠায়
```

Example:

```jsx
<Card name="Sanjid" />
```

```text
      ↓
```

```js
{ name: "Sanjid" }
```

```text
      ↓
```

```text
Card(props)
```

---

# Props vs State

| Props                    | State                              |
| ------------------------ | ---------------------------------- |
| Read Only                | Changeable                         |
| শুধু দেখা যায়           | দেখা ও বদলানো যায়                 |
| ❌ Change করা যায় না     | ✅ Change করা যায়                  |
| Parent থেকে Child এ যায় | Component-এর নিজের data manage করে |

### সহজভাবে

```text
Props
  ↓
Read Only
  ↓
শুধু দেখা যায়
❌ Change করা যায় না
```
