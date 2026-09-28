# Architecture

## Parcours principal

1. Un commerçant parcourt le catalogue et ajoute des articles au panier.
2. Le panier est transformé en demande de devis avec destination et notes.
3. Un agent reçoit la demande et confirme le prix d'achat, le transport et les délais.
4. Le commerçant accepte le devis puis suit l'expédition jusqu'à Lomé.

## Priorités suivantes

- Authentification JWT et rôles (commerçant, fournisseur, agent, administrateur)
- Connexion PostgreSQL avec migrations et seed de produits
- Paiements Mobile Money (selon le prestataire choisi)
- Suivi logistique et notifications WhatsApp/email
- Interface fournisseur pour gérer les produits et les stocks
