# Gestion de l'erreur 429 - API Gemini

## Problème
L'API Gemini a des limites de requêtes gratuites :
- **15 requêtes par minute** (RPM)
- **1 million de tokens par jour** (TPD)

## Solutions

### 1. **Attendre entre les requêtes**
Si vous testez plusieurs fois rapidement, attendez 1 minute entre chaque test.

### 2. **Passer à un tier supérieur**
Visitez [Google AI Studio](https://aistudio.google.com/) pour augmenter vos quotas :
- Aller dans **Billing** / **Facturation**
- Activer la facturation pour obtenir des quotas plus élevés

### 3. **Optimiser les appels**
Le code a déjà été optimisé pour :
- N'appeler l'API qu'une seule fois par photo
- Afficher un message d'erreur clair en cas de limite atteinte
- Permettre à l'utilisateur de réessayer plus tard

## Message utilisateur
Quand la limite est atteinte, l'utilisateur voit :
> "Limite de requêtes atteinte. Veuillez réessayer dans quelques instants."

## Vérifier votre quota
1. Allez sur [Google AI Studio](https://aistudio.google.com/)
2. Cliquez sur **API Keys** > Votre clé
3. Consultez l'utilisation dans **Usage & Billing**
