---
title: "Tableaux Js Foreach"
date: 2021-02-21T12:19:17+01:00
draft: true
tags: ["Javascript"]
---

# La méthode forEarch sur les tableaux en javascript.

Cette méthode permet de parcourir un tableau et d'effectuer une opération sur chaque élément parcourus, cette méthode **ne modifie pas** les éléments du tableau parcouru.

<!--more-->

```js
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((item, index) => {
    console.log(`a[${index}] = ${item}`)
})
```
