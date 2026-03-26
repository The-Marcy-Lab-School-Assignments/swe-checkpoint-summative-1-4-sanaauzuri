# Short Response Questions

Answer each question completely but concisely. Use proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or MDN, but do NOT copy and paste definitions verbatim — write answers in your own words.

You can earn up to **6 points per question** (3 points for technical content, 3 points for writing quality).

Before submitting, use a spell checker to ensure your responses are free of grammar and spelling errors.

---

### Question 1: Scope

The following code throws a `ReferenceError` at runtime. Explain **why** this error occurs. Your answer must use the word **scope**.

```js
const calculateFinalPrice = (price, hasCoupon) => {
  const taxMultiplier = 1.1;
  if (hasCoupon) {
    let finalPrice = (price - 5) * taxMultiplier;  
  } else {
    let finalPrice = price * taxMultiplier;
  }
  return finalPrice;
}

calculateFinalPrice(50, true);
```

**Your Answer:**

A `ReferenceError` occurs because the variable `finalPrice` is declared within an ***if/else block***.  So, when we return `finalPrice` outside of the ***if/else block***, the variable cannot be accessed/referenced outside of that **block scope**, causing a `ReferenceError`.

### Question 2: Encapsulation and Private Fields

Explain what **encapsulation** means in object-oriented programming. What does the `#` syntax do in a JavaScript class, and why is it useful?

**Your Answer:**

**Encapsulation** is when we place data and the methods that use that data into one object. The `#` syntax can be placed in front of a ***property*** or ***method*** to make it private, it's useful when you want to make ***properties***, like passwords and ***methods***, like password validation accessible only within a specific class.

### Question 3: Flexbox vs. CSS Grid

Explain the difference between **Flexbox** and **CSS Grid** and provide an example of a component of a website that would use each.

**Your Answer:**


**Flexbox** is a `display` type arranges elements horizontally or vertically (single dimension), while **CSS Grid** is a `display` type that arranges elements in rows and columns
(two dimensions). On a website, **Flexbox** can be used on a `<nav>` section to align the item horizontally with spacing, and **CSS Grid** can be used as a photo gallery so photos can be shown across rows and columns.

### Question 4: Async Execution Order

In what order will the numbers be logged when this code runs? List them and explain why they appear in that order.

```js
console.log('1');

const loadRecipe = async (id) => {
  console.log('2');
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  console.log('3');
  return data;
};

loadRecipe(1);
console.log('4');
```

**Your Answer:**

The numbers will be logged:
1:



---
