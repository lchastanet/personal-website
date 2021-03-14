---
title: "Trois astuces html"
date: 2021-03-01T12:47:44+01:00
draft: true
---

# 3 astuces à savoir en HTML

Il est possible de ne charger uniquement les image au quand elle deviennent visibles. Pour ce faire il faut ajouter le l'attribut loading à notre image.

<!--more-->

```html
<img src="image.png" loading="lazy" alt="…" width="200" height="200" />
```

Ajouter des suggestions à un input avec la balise datalist.

```html
<label for="country">Choose your country from the list:</label>
<input list="countries" name="country" id="country" />

<datalist id="countries">
    <option value="UK"></option>
    <option value="Germany"></option>
    <option value="USA"></option>
    <option value="Japan"></option>
    <option value="India"></option>
</datalist>
```

La balise base permet d'ajouter dans le head l'url de base afin de ne pas avoir à l'ajouter lorque l'on ajoute une image par exemple.

```html
<head>
    <base href="https://www.twitter.com/" target="_blank" />
</head>

<body>
    <img src="elonmusk" alt="Elon Musk" />
    <a href="BillGates">Bill Gate</a>
</body>
```
