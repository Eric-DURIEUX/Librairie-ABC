Quatre objectifs : 
# Afficher les elements dans la page html, depuis JSON
# ajout d'un article dans le tableau du panier
# afficher chaque item présent dans le tableau du panier dans le panier physique/visible
	## ajout direct ou incrémenter de 1 la quantité
	## pouvoir retirer ou ajouter un produit depuis +/-
	## pourvoir supprimer le/les produits
# calculer les prix

=====================================================================================

# Définir le produit dans le HTML
- Les informations des produits sont affichées sur la page html : nom, prix, descriptions etc.
- Et certaines d'entre-elles sont également présentes dans leur balise en tant que valeur de propriétés (à récupérer dans le JS).

- C'est-à-dire :
	* id : référence
	* src de l'image
	* data-name : titre du livre
	* data-price : prix du livre sans le €
	* quantité ?
	* (autre ?) 

# Ajouter produit au panier
- dans le JS : panier = tableau (de tableaux) vide au départ.

Chaque produit a un boutton "ajouter au panier",  au click (EVENT) :
- récupère et vérifie si la référence (ID) qui entre est déjà présente dans la liste (ex : comparer la ref aux autres déjà présentes dans le tableau ?) : 
	* si absent, ajoute le produit :
		- depuis le html (propriétés) récupère le lien de l'image (src de img ou data-src ?), nom (DATA-NAME) et le prix (DATA-PRICE) du produit, et la quantité. 
		- Les met dans un tableau et faire un push pour le mettre dans le tableau du panier.
	* si présent : incrémente et ajoute 1 à la quantité.
- Boucler sur ce tableau pour afficher les données dans le panier HTML physique.
