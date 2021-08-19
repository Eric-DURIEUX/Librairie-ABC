Ce que l'on a :

catalog : un tableau d'objets de tous les produits;
cart : un tableau d'objets contenant les produits choisis.

Fonctions à coder :

function getProducts(category){
    // retourne un tableau de tous les produits du catalog dont la categorie est passés en paramètre. Si pas de categorie, on ne filtre pas.
}

function decreaseQuantity(refProduct){
    // diminie la quantité d'un produit du panier (dont la ref est 'refProduct') si elle est égale à 1 sinon, on appelle la fonction removeProductFromCart(refProduct)
}

function increaseQuantity(refProduct){
    // augmente la quantité d'un produit du panier (dont la ref est 'refProduct')
}

function addProductToCart(refProduct){
    // ajoute un produit au panier (dont la ref est 'refProduct') si il n'est pas présent. Sinon, on
     appelle la fonction increaseQuantity(refProduct) si le produit existe déjà
}

function removeProductFromCart(refProduct){
    // supprime un produit du panier (dont la ref est 'refProduct')
}

function totalCart(){
    // retourne le montant total des produits du panier
}

function showProducts(productsArray){
    // affiche dans une div tous les produits du tableau "productsArray" généré par getProducts(category);
}

function showProductsForCart(){
    // affiche dans une div tous les produits du panier
}

function getPositionFromCart(refProduct){
    // si un produit est présent dans le panier on retourne son index, sinon on retourne false
}

function getPositionFromCatalog(refProduct){
    // si un produit est présent dans le catalog on retourne son index, sinon on retourne false
}

function createCard(id){
    // retourne une div html pour la page des catégories avec un id unique passé en paramètre
}

function createLineInModal(id){
    // retourne une div html pour la modal avec un id unique passé en paramètre
}

function getQuantity(refProduct){
    // retourne la quantité d'un produit du panier
}

function getProduct(ref){
    // retourne un objet produit (dont la ref est 'refProduct')
}