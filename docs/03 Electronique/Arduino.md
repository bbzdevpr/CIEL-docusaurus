---
sidebar_label: 'Arduino'
sidebar_position: 3
---


# Bases à connaître pour utiliser un Arduino

Cette page fournit les bases nécessaires pour utiliser un Arduino, ainsi que des exemples de commandes et de code commenté pour bien débuter.

## Qu'est-ce qu'un Arduino ?

Arduino est une plateforme open-source composée de cartes électroniques programmables et d'un environnement de développement (IDE). Elle permet de créer facilement des projets électroniques interactifs.

### Composants d'une carte Arduino :
- **Microcontrôleur** : le "cerveau" de la carte (ex. : ATmega328P pour une Arduino Uno).
- **Pins** : connecteurs permettant d'interagir avec des capteurs, des actionneurs, etc.
  - **Pins numériques** (Digital Pins) : pour envoyer ou recevoir des signaux électroniques.
  - **Pins analogiques** (Analog Pins) : pour lire des signaux analogiques.
- **Port USB** : pour connecter l'Arduino à un ordinateur.
- **Alimentation** : entrée pour brancher une source d'énergie externe.

---

## Installer l'environnement de développement Arduino

1. **Télécharger l'IDE Arduino** : [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. Installer le logiciel en suivant les instructions pour votre système d'exploitation (Windows, macOS, Linux).
3. Connecter votre carte Arduino à l'ordinateur via le câble USB.
4. Dans l'IDE Arduino :
   - Aller dans **Outils > Type de carte** et sélectionner votre modèle (ex. : Arduino Uno).
   - Sélectionner le **port COM** associé à votre Arduino.

---

## Commandes et fonctions de base

Voici quelques commandes de base utilisées en Arduino. Toutes les commandes sont écrites en langage C/C++.

### 1. `pinMode()`

Permet de définir si une broche est utilisée comme entrée ou sortie.

```cpp
void setup() {
  pinMode(13, OUTPUT); // Configure la broche 13 comme sortie
}
