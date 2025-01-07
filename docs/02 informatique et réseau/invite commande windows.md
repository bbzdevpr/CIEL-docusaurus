---
sidebar_position: 1
---

# Les principales commandes CMD Windows

Ce cours présente les commandes les plus utiles de l'invite de commandes Windows (CMD).

## Introduction

L'invite de commandes (CMD) est un interpréteur de commandes intégré à Windows. Il permet d'interagir avec le système d'exploitation en tapant des commandes textuelles. Bien que l'interface graphique soit privilégiée par la plupart des utilisateurs, le CMD reste un outil puissant pour automatiser des tâches, résoudre des problèmes et accéder à des fonctionnalités avancées.

## Navigation et gestion des fichiers

| Commande        | Description                                                                 | Exemples                                                                                             |
|-----------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `dir`           | Affiche la liste des fichiers et dossiers du répertoire courant.             | `dir /a` (tous les fichiers), `dir /b` (noms seulement), `dir /s` (sous-répertoires), `dir *.txt`       |
| `cd`            | Change le répertoire courant.                                               | `cd nom_du_dossier`, `cd ..`, `cd \`                                                                |
| `md` ou `mkdir` | Crée un nouveau répertoire.                                                  | `md nom_du_nouveau_dossier`                                                                         |
| `rd` ou `rmdir` | Supprime un répertoire.                                                     | `rd nom_du_dossier` (vide), `rd /s`, `rd /s /q`                                                        |
| `copy`          | Copie des fichiers.                                                          | `copy fichier1.txt fichier2.txt`, `copy *.txt nouveau_dossier`                                       |
| `move`          | Déplace des fichiers ou renomme des dossiers.                                | `move fichier.txt nouveau_dossier`, `move ancien_nom_dossier nouveau_nom_dossier`                       |
| `del` ou `erase`| Supprime des fichiers.                                                     | `del fichier.txt`, `del *.txt`, `del /f /q *.txt`                                                     |
| `ren` ou `rename`| Renomme des fichiers.                                                       | `ren ancien_nom.txt nouveau_nom.txt`                                                                 |

## Informations système

| Commande      | Description                               | Exemples                                    |
|---------------|-------------------------------------------|---------------------------------------------|
| `systeminfo`  | Affiche des informations détaillées sur le système. |                                             |
| `ver`         | Affiche la version de Windows.            |                                             |
| `hostname`    | Affiche le nom de l'ordinateur.           |                                             |
| `tasklist`    | Liste les processus en cours d'exécution. |                                             |
| `taskkill`    | Arrête un processus.                      | `taskkill /IM nom.exe`, `taskkill /PID PID` |

## Réseau

| Commande   | Description                                   | Exemples                                                        |
|------------|-----------------------------------------------|-----------------------------------------------------------------|
| `ipconfig` | Affiche la configuration IP.                 | `ipconfig /all`, `ipconfig /release`, `ipconfig /renew`           |
| `ping`     | Vérifie la connectivité avec un hôte.         | `ping adresse_ip_ou_nom_de_domaine`                             |
| `tracert`  | Affiche le chemin suivi par les paquets.      | `tracert adresse_ip_ou_nom_de_domaine`                          |
| `netstat`  | Affiche les connexions réseau.                 |                                                                 |

## Autres commandes utiles

| Commande | Description                                        | Exemples                                   |
|----------|----------------------------------------------------|--------------------------------------------|
| `cls`    | Efface l'écran de la console.                      |                                            |
| `help`   | Affiche l'aide sur les commandes.                 |                                            |
| `attrib` | Modifie les attributs des fichiers.               | `attrib +h fichier.txt`, `attrib -h fichier.txt`|
| `fc`     | Compare deux fichiers.                               |                                            |
| `sfc`    | Vérifie l'intégrité des fichiers système.         | `sfc /scannow`                               |

## Fichiers batch (.bat)

Les fichiers batch permettent d'automatiser des séquences de commandes. Un fichier batch est un fichier texte avec l'extension `.bat` contenant une série de commandes CMD.

**Exemple :**

```batch
@echo off
echo Bonjour le monde !
pause