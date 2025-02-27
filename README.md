# HTML

### 1. Structure de Document HTML5

Chaque document HTML commence par la déclaration de type `<!DOCTYPE html>`, indiquant au navigateur qu'il s'agit d'un document HTML5. Voici la structure de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la Page</title>
</head>
<body>
    <!-- Contenu de la page -->
</body>
</html>
```

### 2. Balises Essentielles HTML

#### 2.1 Structure et Texte
- **`<h1> - <h6>`** : Titres (de `<h1>` le plus important à `<h6>` le moins important).
- **`<p>`** : Paragraphe de texte.
- **`<br>`** : Saut de ligne (autonome).
- **`<hr>`** : Ligne horizontale pour séparer les sections.

#### 2.2 Conteneurs et Organisation
- **`<div>`** : Conteneur de bloc polyvalent.
- **`<span>`** : Conteneur en ligne pour styliser une partie de texte.

#### 2.3 Médias et Liens
- **`<a href="URL">...</a>`** : Hyperlien, avec `target="_blank"` pour ouvrir dans un nouvel onglet.
- **`<img src="image.jpg" alt="Description de l'image">`** : Image, avec `alt` pour l'accessibilité.
- **`<audio>` et `<video>`** : Éléments multimédias, avec attributs comme `controls`, `autoplay`, `loop`.

#### 2.4 Listes
- **`<ul>`** : Liste non ordonnée (à puces) contenant des `<li>`.
- **`<ol>`** : Liste ordonnée (numérotée) contenant des `<li>`.
- **`<li>`** : Élément de liste.

#### 2.5 Tableaux
- **`<table>`** : Conteneur principal pour un tableau.
- **`<tr>`** : Ligne du tableau.
- **`<td>`** : Cellule de données.
- **`<th>`** : En-tête de tableau.

#### 2.6 Formulaires et Interactions Utilisateur
- **`<form action="URL" method="POST/GET">...</form>`** : Formulaire HTML.
- **`<input type="text">`** : Champs de texte.
- **`<button>`** : Bouton de soumission.
- **`<select>`** : Liste déroulante avec des `<option>`.
- **`<label for="id">`** : Étiquette pour associer le texte à un élément de formulaire, améliorant l'accessibilité.

### 3. Attributs HTML

Les attributs ajoutent des informations supplémentaires à une balise :

- **`id`** : Identifiant unique pour l’élément.
- **`class`** : Classe pour appliquer des styles à plusieurs éléments.
- **`src`** : Spécifie la source d’un fichier (images, scripts).
- **`href`** : URL cible d’un lien `<a>`.
- **`alt`** : Texte alternatif pour les images.

### 4. Balises Sémantiques HTML5

HTML5 a introduit des balises sémantiques pour améliorer l'organisation et l'accessibilité des pages :

- **`<header>`** : Section d'en-tête pour titres et navigation.
- **`<footer>`** : Section de pied de page pour informations de contact.
- **`<nav>`** : Contient des liens de navigation.
- **`<article>`** : Contenu indépendant, comme un article de blog.
- **`<section>`** : Section thématique.
- **`<aside>`** : Informations complémentaires ou barre latérale.
- **`<main>`** : Contenu principal de la page.



# CSS :

### 1. Inclusion de CSS
- **En ligne** : 
  - Utilise l'attribut `style` dans les balises HTML pour des styles spécifiques à un élément.
  
- **Interne** : 
  - Utilise la balise `<style>` dans la section `<head>` du document HTML pour des styles applicables uniquement à cette page.
  
- **Externe** : 
  - Crée un fichier CSS séparé et l'inclut avec `<link rel="stylesheet" href="style.css">`. Cette méthode est la plus efficace pour le réemploi des styles sur plusieurs pages.

### 2. Sélecteurs CSS
- **Type** : Cible tous les éléments d'un type (ex. : `div`, `p`).
- **Classe** : Cible les éléments ayant une classe spécifique (ex. : `.ma-classe`).
- **Identifiant** : Cible un élément avec un identifiant unique (ex. : `#mon-id`).
- **Combinés** : Cible des éléments selon leur relation (ex. : `div p` cible tous les `<p>` dans des `<div>`).
- **Attribut** : Cible les éléments selon la présence ou la valeur d'un attribut (ex. : `input[type="text"]`).
- **Pseudo-classes** : Cible les éléments dans des états spécifiques (ex. : `:hover`, `:first-child`).
- **Pseudo-éléments** : Cible des parties spécifiques d'un élément (ex. : `::before`, `::after`).

### 3. Propriétés CSS
- **Couleur et Fond** :
  - `color` : Définit la couleur du texte.
  - `background-color` : Définit la couleur d'arrière-plan.
  - `background-image` : Définit une image d'arrière-plan.

- **Typographie** :
  - `font-size` : Taille de la police.
  - `font-family` : Type de police à utiliser.
  - `font-weight` : Épaisseur de la police (normal, bold).
  - `line-height` : Hauteur de ligne pour l'espacement vertical.

- **Marge et Remplissage** :
  - `margin` : Espace extérieur autour d'un élément.
  - `padding` : Espace intérieur entre le contenu et la bordure.
  - `margin-top`, `margin-right`, `margin-bottom`, `margin-left` : Contrôle des marges individuelles.

- **Dimension** :
  - `width` : Largeur de l’élément.
  - `height` : Hauteur de l’élément.
  - `max-width` / `max-height` : Dimensions maximales.
  - `min-width` / `min-height` : Dimensions minimales.

- **Bordure** :
  - `border` : Définit le style, la largeur et la couleur de la bordure.
  - `border-radius` : Arrondit les coins d'un élément.
  - `border-style`, `border-width`, `border-color` : Propriétés individuelles pour la bordure.

- **Affichage** :
  - `display` : Définit comment un élément est affiché (block, inline, flex, grid, none).
  - `position` : Définit la méthode de positionnement (static, relative, absolute, fixed, sticky).
  - `z-index` : Définit l'ordre d'empilement des éléments.

- **Autres propriétés** :
  - `opacity` : Définit la transparence d'un élément.
  - `overflow` : Contrôle le comportement lorsque le contenu déborde (visible, hidden, scroll, auto).
  - `box-shadow` : Ajoute une ombre à un élément.
  - `transition` : Gère les transitions de propriété CSS.

### 4. Modèle de Boîte
- **Structure** :
  - **Contenu** : Le contenu réel de l'élément.
  - **Padding** : Espace entre le contenu et la bordure.
  - **Bordure** : La ligne qui entoure l'élément.
  - **Margin** : Espace extérieur autour de l'élément.

### 5. Responsive Design
- **Unités relatives** : Utilisation de `em`, `rem`, `vw`, `vh`, et `%` pour une mise en page adaptable.
- **Media Queries** : Permet d'appliquer des styles conditionnels en fonction de la taille de l'écran.


# JavaScript :

1. [Bases de JavaScript](#1-bases-de-javascript)  
   - [Variables et Types de Données](#11-variables-et-types-de-données)  
   - [Opérateurs](#12-opérateurs)  
   - [Structures Conditionnelles](#13-structures-conditionnelles)  

2. [Boucles](#2-boucles)  
   - [Boucle For](#21-boucle-for)  
   - [Boucle While](#22-boucle-while)  
   - [Boucle Do...While](#23-boucle-dowhile)  

3. [Fonctions](#3-fonctions)  
   - [Déclaration de Fonction](#31-déclaration-de-fonction)  
   - [Fonction Anonyme](#32-fonction-anonyme)  
   - [Fonction Fléchée](#33-fonction-fléchée)  
   - [Fonction Auto-Exécutée (IIFE)](#34-fonction-auto-exécutée-iife)  

4. [Objets et Tableaux](#4-objets-et-tableaux)  
   - [Objets](#41-objets)  
   - [Tableaux](#42-tableaux)  

5. [Programmation Asynchrone](#5-programmation-asynchrone)  
   - [Callback](#51-callback)  
   - [Promises](#52-promises)  
   - [Async/Await](#53-asyncawait)  

6. [API Web](#6-api-web)  
   - [Fetch API](#61-fetch-api)  
   - [Événements](#62-événements)  

7. [Concepts Avancés](#7-concepts-avancés)  
   - [Closures](#71-closures)  
   - [Modules](#72-modules)  

8. [Optimisation et Meilleures Pratiques](#8-optimisation-et-meilleures-pratiques)  
   - [Gestion de la Mémoire](#81-gestion-de-la-mémoire)  
   - [Optimisation des Performances](#82-optimisation-des-performances)


## **1. Bases de JavaScript**  

### **1.1 Variables et Types de Données**  
```javascript
let nom = "Jean";  
let age = 25;  
let actif = true;  
let utilisateur = { nom: "Jean", age: 25 };  
let couleurs = ["rouge", "vert", "bleu"];  
let inconnu = null;  
let nonDefini;  
```

### **1.2 Opérateurs**  
```javascript
console.log(5 + 2);  // Addition  
console.log(5 === 2); // Comparaison stricte  
console.log(true && false); // Opérateur logique  
```

### **1.3 Structures Conditionnelles**  
```javascript
let x = 10;  
if (x > 5) {  
  console.log("Supérieur à 5");  
} else {  
  console.log("Inférieur ou égal à 5");  
}
```


## **2. Boucles**  

### **2.1 Boucle For**  
```javascript
for (let i = 0; i < 5; i++) {  
  console.log(i);  
}
```

### **2.2 Boucle While**  
```javascript
let i = 0;  
while (i < 5) {  
  console.log(i);  
  i++;  
}
```

### **2.3 Boucle Do...While**  
```javascript
let j = 0;  
do {  
  console.log(j);  
  j++;  
} while (j < 5);
```


## **3. Fonctions**  

### **3.1 Déclaration de Fonction**  
```javascript
function saluer(nom) {  
  return "Bonjour, " + nom;  
}
console.log(saluer("Alice"));
```

### **3.2 Fonction Anonyme**  
```javascript
const addition = function (a, b) {  
  return a + b;  
};
console.log(addition(2, 3));
```

### **3.3 Fonction Fléchée**  
```javascript
const multiplier = (a, b) => a * b;  
console.log(multiplier(3, 4));
```

### **3.4 Fonction Auto-Exécutée (IIFE)**  
```javascript
(function () {  
  console.log("Fonction auto-exécutée !");
})();
```


## **4. Objets et Tableaux**  

### **4.1 Objets**  
```javascript
let personne = {  
  prenom: "Jean",  
  nom: "Dupont",  
  age: 30,  
  nomComplet: function () {  
    return this.prenom + " " + this.nom;  
  }  
};
console.log(personne.nomComplet());
```

### **4.2 Tableaux**  
```javascript
let nombres = [1, 2, 3, 4, 5];  
console.log(nombres.length);
```


## **5. Programmation Asynchrone**  

### **5.1 Callback**  
```javascript
function obtenirDonnees(callback) {  
  setTimeout(() => {  
    callback("Données reçues");  
  }, 2000);  
}
obtenirDonnees(data => console.log(data));
```

### **5.2 Promises**  
```javascript
function obtenirDonnees() {  
  return new Promise((resolve) => {  
    setTimeout(() => resolve("Données reçues"), 2000);  
  });  
}
obtenirDonnees().then(data => console.log(data));
```

### **5.3 Async/Await**  
```javascript
async function fetchData() {  
  let data = await obtenirDonnees();  
  console.log(data);  
}
fetchData();
```


## **6. API Web**  

### **6.1 Fetch API**  
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")  
  .then(response => response.json())  
  .then(data => console.log(data))  
  .catch(error => console.error(error));
```

### **6.2 Événements**  
```javascript
document.getElementById("btn").addEventListener("click", () => {  
  alert("Bouton cliqué !");
});
```


## **7. Concepts Avancés**  

### **7.1 Closures**  
```javascript
function externe() {  
  let compteur = 0;  
  return function interne() {  
    compteur++;  
    console.log(compteur);  
  };
}
const incrementer = externe();  
incrementer();  
incrementer();
```

### **7.2 Modules**  
```javascript
export const saluer = (nom) => `Bonjour, ${nom}`;  
export default function somme(a, b) {  
  return a + b;  
}
```

---

## **8. Optimisation et Meilleures Pratiques**  

### **8.1 Gestion de la Mémoire**  
```javascript
let map = new WeakMap();  
let obj = { cle: "valeur" };  
map.set(obj, "Bonjour");  
obj = null;  
```

### **8.2 Optimisation des Performances**  
```javascript
const factorialMemo = (function () {  
  let cache = {};  
  return function (n) {  
    if (n in cache) return cache[n];  
    return (cache[n] = n === 0 ? 1 : n * factorialMemo(n - 1));  
  };  
})();
console.log(factorialMemo(5));
```

---

<h3 align="center"> 🧑🏻‍💻 | Made By : <a href="https://github.com/mohamedtalhaouii" target="_blank">Mohamed Talhaoui</a></h3>

