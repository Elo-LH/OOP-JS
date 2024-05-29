---
theme: theme.json
author: Gaellan
date: May 29th, 2024
paging: Page %d sur %d
---

# La POO en JavaScript

## Plan du cours

### Qu'est-ce que la POO

### Les classes

### Les méthodes

### Les attributs

### this

### Le constructeur

### Instancier une classe

### private vs public

### Les accesseurs

### L'héritage

### La composition

### Les modules

---

# La POO en JavaScript

## Qu'est-ce que la Programmation Orientée Objet

La Programmation Orientée Objet c'est une notion fondamentale des langages hauts niveaux. L'idée de base est la suivante : je veux représenter quelque chose, n'importe quoi. La chose que je veux représenter a des caractéristiques qui lui sont propres, et des comportements qui lui sont propres.

Par exemple, si je veux définir une voiture on pourrait parler :

- de sa marque
- son modèle
- son année de construction
- ...

Une voiture ça peut faire pas mal de choses :

- démarrer
- freiner
- tourner
- ...

En sortie d'usine, deux voitures ont beau avoir exactement les mêmes caractéristiques et comportements, il y a toujours deux objets physiques distincts, qui iront à deux propriétaires différent-e-s.

C'est cette idée que nous allons modéliser avec la Programmation Orientée Objet. Pour ça nous allons utiliser différents outils et concepts.

Le cours qui suit va vous décrire le principe de programmation orientée objet et vous montrer son implémentation en JavaScript.

---

# La POO en JavaScript

## Les classes

Une classe c'est l'entité qui va représenter notre idée. Si je reste sur l'exemple de la voiture, la classe c'est la voiture.

Ses caractéristiques sont appelées des attributs. Ses comportements sont appelés des méthodes.

En JavaScript on définit une classe en utilisant le mot clé `class` et en donnant un nom à cette classe (ici le nom c'est `Voiture`).

```js
class Voiture{
    // ...
}
```

---

# La POO en JavaScript

## Les méthodes

Les méthodes sont donc les comportements de la classe. En pratique, ce sont des fonctions contenues dans la classe.

```js
class Voiture {

    demarrer()
    {

    }

    freiner()
    {

    }
}
```

---

# La POO en JavaScript

## Les attributs

Les attributs sont donc les caracteristiques de la classe. En pratique ce sont des variables contenues dans la classe.

```js
class Voiture {
    marque;
    modele;
    nbPortes;
}
```

Si on ajoute ceci à ce que l'on a déjà :

```js
class Voiture {
    marque;
    modele;
    nbPortes;

    demarrer()
    {

    }

    freiner()
    {

    }
}
```

---

# La POO en JavaScript

## this

Lorsque l'on se trouve dans une classe, pour accéder à ses attributs et ses méthodes, nous allons utiliser le mot clé `this`.

```js
class Voiture {
    marque;
    modele;
    nbPortes;

    demarrer()
    {
        console.log(`Je démarre la voiture de marque ${this.marque}`);
    }
}
```

---

# La POO en JavaScript

## Le constructeur

Le concept de notre voiture est à présent défini, mais il faut à présent fabriquer les vrais objets voiture qui sortiront de l'usine pas juste leur concept.

Pour cela en POO on parle d'instancier une classe. La classe est un concept, un guide sur comment doit être construite la chose.

La donnée que l'on va manipuler dans le code s'appelle donc une instance de classe.

Pour pouvoir être instanciée la classe va contenir une méthode spéciale que l'on appelle le constructeur.

```js
class Voiture{
    constructor(marque, modele, nbPortes){
    
    }
}
```

Si on ajoute ceci à ce que l'on a déjà :

```js
class Voiture{
    marque;
    modele;

    constructor(marque, modele){
        this.marque = marque;
        this.modele = modele;
    } 

    demarrer()
    {
    }

    freiner()
    {
    }
}
```

---

# La POO en JavaScript

## Instancier une classe

Une fois que notre classe a un constructeur nous pouvons créer des instances de celle-ci. Pour ça nous allons utiliser le mot-clé `new`.

```js
let voitureDeMarc = new Voiture("Opel", "Corsa", 3);
let voitureDePaul = new Voiture("Nissan", "Micra", 5);
```

`voitureDeMarc` et `voitureDePaul` sont deux instances différentes de la classe `Voiture`.

---

# La POO en JavaScript

## private vs public

En programmation, l'idée est parfois aussi de prévenir les problèmes potentiels. Pour cela on limite ce qui peut être modifié dans notre classe et comment.

On déclare donc que certaines choses sont publiques (on peut les appeler en dehors de la classe) ou bien privée (on ne peut y accéder que depuis l'intérieur de la classe).

Une habitude en POO, est que les attributs soient privés et que les méthodes soient publiques. Si l'on ne précise rien, en JavaScript les attributs et méthodes sont publics. Nous allons donc utiliser le symbole `#` pour signaler que nos attributs sont privés.

```js
class Voiture {
    #marque;
    #modele;
    #nbPortes;

    constructor(marque, modele, nbPortes)
    {
        this.#marque = marque;
        this.#modele = modele;
        this.#nbPortes = nbPortes;
    }
}
```

---

# La POO en JavaScript

## Les accesseurs

Une fois que nous avons rendus nos attributs privés nous allons créer des méthodes spéciales qui vont permettre de les manipuler depuis l'exterieur de la classe.

Les méthodes qui permettent de lire les attributs sont appellées des getters.
Les méthodes qui permettent de modifier les attributs sont appellées des setters.

On appelle l'ensemble des getters et des setters les accesseurs (ils permettent d'accéder aux attributs).

En JavaScript nous allons déclarer nos getters avec le mot clé `get` et nos setters avec le mot clé `set`.

```js
class Voiture {
    #marque;

    constructor(marque)
    {
        this.#marque = marque;
    }

    get marque (){
        return this.#marque;
    }

    set marque (marque){
        this.#marque = marque;
    }
}
```

Ensuite si je veux appeler mes accesseurs en dehors de ma classe :

```js
let voiture = new Voiture("Opel", "Corsa", 5);

console.log(voiture.getMarque()); // Opel
voiture.setMarque("Nissan");
console.log(voiture.getMarque()); // Nissan
```

---

# La POO en JavaScript

## L'héritage

L'héritage en Programmation Orientée Objet, c'est une façon d'organiser les données pour regrouper celles qui ont des attributs et méthodes en commun.

Si l'on reste dans notre exemple de la voiture : Toutes les voitures ont une marque, un modèle et un nombre de portes. Par contre certaines ont des moteurs thermiques, d'autres des moteurs électriques.

Voiture serait donc la classe mère, et les classes VoitureThermique et VoitureElectrique les classes filles.

En JavaScript, on indique qu'une classe hérite d'une autre (elle en est la classe fille) en utilisant le mot clé `extends`.

### La classe mère

```js
class Voiture {
    #marque;
    // ...

    constructor(marque)
    {
        this.#marque = marque;
    }

    get marque (){
        return this.#marque;
    }

    set marque (marque){
        this.#marque = marque;
    }
}
```

---

# La POO en JavaScript

## L'héritage

### Les classes filles

La classe fille `VoitureThermique` :

```js
class VoitureThermique extends Voiture {
    #reservoir;

    constructor(marque, modele, nbPortes, reservoir)
    {
        super(marque, modele, nbPortes);
        this.#reservoir = reservoir;
    }

    get reservoir (){
        return this.#reservoir;
    }

    set reservoir (reservoir){
        this.#reservoir = reservoir;
    }
}
```

---

# La POO en JavaScript

## L'héritage

### Les classes filles

La classe fille `VoitureElectrique` :

```js
class VoitureElectrique extends Voiture {
    #batterie;

    constructor(marque, modele, nbPortes, batterie)
    {
        super(marque, modele, nbPortes);
        this.#batterie = batterie;
    }

    get batterie (){
        return this.#batterie;
    }

    set batterie (batterie){
        this.#batterie = batterie;
    }
}
```

Et donc si je veux instancier une classe fille :

```js
let tesla = new VoitureElectrique("Tesla", "S", 5, "Lithium");
```

### super

Dans l'exemple au dessus, vous remarquez que nous utilisons la fonction `super` dans notre constructeur. Cette fonction est utilisée pour passer les paramètres nécessaires au constructeur de la classe mère.

---

# La POO en JavaScript

## La composition

La composition c'est le fait qu'une classe peut être un attribut d'une autre classe.

Par exemple j'ai des personnages :

```js
class Character {
    #name;
    #healthPoints;
    
    constructor(name, healthPoints) {
        this.#name = name;
        this.#healthPoints = healthPoints;
    }
    
    get name (){
        return this.#name;
    }
    
    set name(name) {
        this.#name = name;
    }
    
    get healthPoints (){
        return this.#healthPoints;
    }
    
    set healthPoints (points) {
        this.#healthPoints = healthPoints;
    }
}
```

---

# La POO en JavaScript

## La composition

et j'ai des épées : 

```js
class Sword {
    #hand;
    #damages;
    
    constructor(hand = "right", damages = 1)
    {
        this.#hand = hand;
        this.#damages = damages;
    }
    
    get hand () {
        return this.#hand;
    }
    
    set hand (hand) {
        this.#hand = hand;
    }
    
    get damages () {
        return this.#damages;
    }
    
    set damages (damages) {
        this.#damages = damages;
    }
}
```

---

# La POO en JavaScript

## La composition

je voudrais que mon personnage puisse avoir une épée dans chaque main.

```js
class Character {
    #name;
    #healthPoints;
    #rightHandWeapon;
    #leftHandWeapon;
    
    constructor(name, healthPoints, rightHandWeapon, leftHandWeapon) {
        this.#name = name;
        this.#healthPoints = healthPoints;
        this.#rightHandWeapon = rightHandWeapon;
        this.#leftHandWeapon = leftHandWeapon;
    }
    
    get name (){
        return this.#name;
    }
    
    set name(name) {
        this.#name = name;
    }
    
    //...
```

```js
let rightSword = new Sword("right", 10);
let leftSword = new Sword("left", 8);
let hero = new Character("Gurdil", 150, rightSword, leftSword);
```

Gurdil a maintenant une épée dans chaque main.

---

# La POO en JavaScript

## Les modules

Pour mieux gérer ses fichiers, on utilise le système des modules pour pouvoir organiser tout ça.

Imaginons que notre classe `Voiture` soit dans un fichier `voiture.js`.

Pour pouvoir utiliser des modules vous allez devoir changer la façon d'appeler le JavaScript dans votre HTML : 

```html
<script type="module" src="index.js"></script>
```

---

# La POO en JavaScript

## export

Dans le fichier `voiture.js` je vais devoir exporter ma classe `Voiture` pour pouvoir l'utiliser ailleurs. Pour faire ça je vais utiliser le mot clé `export` :

```js
class Voiture {
    #marque;
    #modele;
    #nbPortes;

    constructor(marque, modele, nbPortes)
    {
        this.#marque = marque;
        this.#modele = modele;
        this.#nbPortes = nbPortes;
    }

    get marque (){
        return this.#marque;
    }

    set marque (marque){
        this.#marque = marque;
    }
}

export { Voiture };
```

---

# La POO en JavaScript

## import

Et dans mon fichier `index.js` je vais devoir importer ma classe pour pouvoir l'utiliser :

```js
import { Voiture } from './voiture.js';

window.addEventListener("DOMContentLoaded", function(){

    let voiture = new Voiture("Opel", "Corsa", 5);

});
```

