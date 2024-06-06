3wa-bre02
Consignes du mini-projet Pizzeria
Étape 1 :

Récupérez tous les fichiers du projet. Gardez la même architecture de dossiers et fichiers.

Ne créez pas de dossiers séparés pour les étapes, le projet est un tout.
Étape 2 : Créer la classe Ingredient

Vous allez commencer par créer une classe Ingredient dans un fichiers classes/ingredient.js.

Un Ingredient a deux attributs :

    Un name qui est une chaine de caractères
    Un file qui est une chaine de caractère

Ses attributs seront privés, et ils auront tous les deux des getters et setters.

Votre constructeur prendra ces deux attributs en paramètre et les initialisera.
Étape 3 : Créer le tableau des ingrédients

Dans votre index.js, une fois le DOM chargé, vous allez créer un tableau vide que vous appelerez availableIngredients.

Vous allez instancier une classe Ingredient pour chacun des ingrédients suivants :

    Bacon : assets/img/bacon.png
    Carotte : assets/img/carrots.png
    Fromage : assets/img/cheese.png
    Oeuf : assets/img/egg.png
    Aubergine : assets/img/eggplant.png
    Fromage de chèvre : assets/img/goat-cheese.png
    Miel : assets/img/honey.png
    Champignon : assets/img/mushroom.png
    Olive : assets/img/olive.png
    Piment : assets/img/pepper.png
    Pomme de terre : assets/img/potato.png
    Tomate : assets/img/tomato.png

Vous allez ensuite une par une, les ajouter dans le tableau availableIngredients.
Étape 4 : Générer le HTML des Ingrédients

Dans votre index.html vous avez une intégration en dur de la liste des ingrédients (dans la section#stage). Vous allez devoir faire en sorte de la générer en JavaScript.

Vous allez donc dans votre index.js, une fois le DOM chargé et le tableau availableIngredients rempli devoir parcourir ce tableau et générer le HTML nécessaire pour afficher tout ça.

N’oubliez pas de commenter le HTML de démonstration de départ pour bien voir celui que vous avez généré en JS apparaitre.

Dans le HTML de démonstration, Tomate et Fromage sont sélectionnés par défaut, cela n’est pas le cas dans votre version c’était pour que vous puissiez voir à quoi ça ressemble (et deviner comment c’est fait en observant le code).
Étape 5 : Dynamiser la liste des ingrédients

Faites en sorte que lorsque l’on clique sur un des ingrédients de la liste dans la section#stage :

    s’il est sélectionné, on le désélectionne
    s’il n’est pas sélectionné on le sélectionne

Étape 6 : Créer la classe

Vous allez maintenant créer une classe Pizza dans un fichier classes/pizza.js.

Une Pizza a un seul attribut, appelé ingredients.

Son constructeur ne prend pas de paramètres, par contre il initialise l’attribut ingredients comme un tableau vide.

Son attribut ingredients a un getter mais pas de setter.

Pizza a par contre trois méthodes :

    addIngredient(ingredient) qui ajoute au tableau l’ingrédient passé en paramètres
    removeIngredient(ingredient) qui retire du tableau l’ingrédient passé en paramètres
    display() qui permet d’afficher la Pizza dans l’aside (laissez la vide pour le moment)

On ajoute les nouveaux ingrédients à la fin du tableau. Par contre quand on veut retirer un ingrédient, il faut remplacer le tableau ingredients par un nouveau tableau qui ne contient pas l’ingrédient que l’on souhaite retirer.
Étape 7 : Sélectionner des ingrédients

Lorsque vous allez cliquer sur l’un des ingrédients dans la section#stage vous allez devoir vérifier si une Pizza est en cours de composition. S’il n’y en a pas, instanciez-en une.

Si l’ingrédient était sélectionné, retirez le de la Pizza, sinon ajoutez le.

Une fois que c’est fait, actualisez l’<aside> en utilisant la méthode display de la Pizza (vous allez remplir la méthode display à l’étape suivante).
Étape 8 : Dynamiser la composition de la pizza

Dans l’<aside> de votre HTML vous avez un ul qui va contenir la liste des ingrédients de la Pizza.

Faites en sorte que lorsque l’on appelle la méthode display d’une Pizza, cette liste d’ingrédients soit mise à jour.

Attention dependant le bouton commander doit rester disponible et tout en bas de la liste.
Étape 9 : Commander une pizza

Lorsque vous cliquez sur le bouton commander, lancez le temps de cuisson de la Pizza, elle met une seconde à cuire par ingrédient qui la compose.

Lorsqu’une pizza est commandée la liste de ses ingrédients se réinitialise. La section#stage doit revenir à son état initial et l’aside ne doit plus contenir d’ingrédients.
Étape 10 : La pizza est prête

Lorsque la pizza est prête (à la fin de son temps de cuisson donc) faites en sorte d’afficher l’image de Pizza et le message Pizza prête! en bas de l’aside.

L’image et le message s’effacent au bout de 5 secondes.
