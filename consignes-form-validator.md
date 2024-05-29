# Mini-Projet POO en JS : validation de formulaire

## Étape 0 :

Dans votre dossier `sites/js/bre02-poo-js` créez un dossier `form-validator`.

Vous réaliserez votre mini projet dedans.


## Étape 1 : Le HTML

Créez un formulaire en HTML qui permet de créer un nouvel utilisateur.

Les champs d'un utilisateur :

- Nom _lastName_ (obligatoire)
- Prénom _firstName_ (obligatoire)
- Pseudo _nickName_ (obligatoire)
- Email _email_ (obligatoire)
- Mot de passe _password_ (obligatoire)
- Confirmation de mot de passe _confirmPassword_ (obligatoire)
- Biographie _biography_


## Étape 2 : La classe User

Vous allez devoir créer une classe `User` en JavaScript, qui représente les données des utilisateurs. Elle devra avoir toutes les informations de l'utilisateur en attributs, ainsi que des getters et des setters pour chacun de ces attributs.

Son constructeur prend tous les paramètres en attribut mais attention, les champs non obligatoires ont la valeur `null` par défaut dans les paramètres du constructeur.


## Étape 3 : sauvegarder le formulaire dans une instance

Lorsque votre formulaire est soumis, vous devez récupérer la valeur des champs pour créer une instance de la classe `User`.

Vérifiez en faisant un `console.log` de votre instance que tout est bien rempli.


## Étape 4 : les méthodes de validation

Pour l'instant notre classe `User` a des attributs, des accesseurs, un constructeur mais pas de méthodes. Nous allons donc créer des méthodes qui vont nous permettre de valider que nos champs sont valides.

Vous allez devoir créer les méthodes suivantes :

- `validateFirstName`
- `validateLastName`
- `validateNickName(nameList)`
- `validateEmail`
- `validatePassword`
- `validateBiography`
- `validate`

Votre méthode `validate` doit appeler toutes les autres.

## Étape 5 : les critères de validité

Vous allez devoir remplir vos méthodes de façon à ce qu'elles retournent true si la validation passe et false sinon.

Le prénom et le nom doivent faire entre 2 et 64 caractères.

Le pseudo ne doit pas déjà exister dans la liste passée en paramètres et doit faire entre 2 et 64 caractères.

Le format de l'adresse email oit être valide (demandez à ChatGPT l'expression régulière qui permet de vérifier ça).

Le mot de passe doit faire plus e 12 caractères, contenir au moins une majuscule, un chiffre et un caractères spécial. Les deux mots de passe doivent correspondre.

La biographie de doit faire entre 128 et 512 caractères.

Vos champs texte ne peuvent pas contenir que des espaces.


## Étape 6 : les erreurs

Ajoutez un paragraphe permettant d'afficher une erreur en rouge sous chacun des champs de votre formulaire.

Vous allez ajouter un nouvel attribut à votre classe, l'attributs `errors`. Dans votre constructeur, initialisez `errors` comme un tableau vide.

Chacune de vos erreurs sera représentée par un objet simple :

```js
{
	field: "firstName",
	message : "The first name must be between 2 and 64 characters"
}
```

Votre attribut `errors` contiendra donc autant de ces objets que vous avez d'erreurs.

Pour pouvoir ajouter des erreurs vous allez devoir créer deux nouvelles méthodes : 

- `addError(error)` qui rajoute une erreur dans votre attribut `errors`
- `resetErrors()` qui vide votre tableau d'erreurs

Appelez votre méthode `resetErrors` au début de votre méthode `validate`.

Appelez `addError` à chaque fois que vous trouvez une erreur dans vos méthodes de validation.


## Étape 7 : soumission du formulaire

Lorsque vous soumettez le formulaire, après avoir instancié votre `User` appelez sa méthode `validate`, si jamais elle retourne des erreurs, affichez les messages des erreurs dans les bons paragraphes de votre formulaire.

