![Texte alternatif](front/public/logo.svg)
# Divine Delivery

## Description du site web
Divine Delivery est bien plus qu'un simple service de livraison d'anges gardiens. C'est une plateforme révolutionnaire qui connecte les individus aux ressources célestes dont ils ont besoin pour surmonter les défis de la vie quotidienne. Grâce à une technologie de pointe de téléportation, Divine Delivery offre des interventions instantanées, permettant aux anges gardiens qualifiés d'être présents en un clin d'œil où qu'ils soient nécessaires.

Les services de Divine Delivery sont conçus pour répondre à une variété de besoins, qu'il s'agisse de situations d'urgence, de guérison émotionnelle, de conseils spirituels, de protection ou simplement d'une présence réconfortante. Les anges de Divine Delivery sont sélectionnés avec soin pour leur sagesse, leur compassion et leur capacité à offrir un soutien divin adapté à chaque situation.

En plus des interventions individuelles, Divine Delivery propose des espaces de discussion virtuels où les utilisateurs peuvent échanger avec d'autres personnes confrontées à des défis similaires, créant ainsi une communauté de soutien bienveillante et inspirante.

Avec Divine Delivery, chaque individu peut accéder à l'aide divine dont il a besoin, quand il en a besoin, offrant ainsi un nouveau niveau de confort, de guérison et d'inspiration dans la vie de tous les jours.

## Technologies utilisées pour la création de notre site web
- React JS, Typescript, Vite JS, Sass, boostrap pour le côté client
- Node JS, Express JS, mongoDB pour le côté serveur
- Python, Plask, Tensorflow pour l' Intelligence Artificielle Metatron
- Figma, Adobe Illustrator pour la réalisation de la maquette
  
## Prérequis pour lancer notre site web en local
- Node.js
- MongoDB
- npm 

## Installation pour tester le site en local

1. Cloner le projet depuis GitHub :

   ```bash
   git clone https://github.com/KiritoEM/webcup-2024-Trimobe


2. Configuration du coté serveur
     - ```bash
        cd backend
  
     - Créer un fichier .env
       ```bash
         PORT=<port>
         MONGODB_URI_ONLINE=mongodb+srv://<username>:<password>@cluster0.pjbqsve.mongodb.net/trimobe?retryWrites=true&w=majority&appName=Cluster0
         MONGODB_URI_LOCAL=mongodb://127.0.0.1:27017/<bdname>
         SECRET_KEY=<secret_key>
       ```
       
     - Installer les dépendences et lancer l'application
       ```bash
         npm install
         npm run dev
    
3. Configuration du coté client
     - ```bash
        cd front
       
     - changer les url suivants dans le fichier "authServices.ts" si vous voulez utiliser le serveur local:
       ```bash
         "https://trimobe.madagascar.webcup.hodi.host/api/auth/register" => "http://localhost:<port>/api/auth/register"
         "https://trimobe.madagascar.webcup.hodi.host/api/auth/login" => "http://localhost:<port>/api/auth/login"
       ```
       
     - Installer les dépendences et lancer l'application
      ```bash
         npm install
         npm run dev


## Membres de l' équipe Trimobe
- [MAHAZARA Ginot D'Avis](https://www.facebook.com/junnotdavis.mahazara) 
- [RAKOTOMALALA Herifanantenana Andriantseheno](https://www.facebook.com/herifanantenana.rakotomalala)  
- [EMADISSON Nirina Johannès Loick](https://www.facebook.com/profile.php?id=100087576726611) 
- [RABEMANANTSOA Sedra Ny Aina Barthélemy](https://www.facebook.com/leboss214)
