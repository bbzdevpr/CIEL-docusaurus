@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
title Menu Git & Docusaurus
color 0A

:MENU
cls
echo ===================================================
echo           🧭 MENU GIT & DOCUSAURUS
echo ===================================================
echo.
echo   [1] Vérifier l'état du dépôt (git status)
echo   [2] Récupérer les dernières modifications (git pull)
echo   [3] Ajouter, valider et envoyer vos changements (git add / commit / push)
echo   [4] Lancer le site localement (npm start)
echo   [5] Construire la version statique (npm run build)
echo   [6] Déployer le site (npm run deploy)
echo   [7] Télécharger un nouveau projet depuis GitHub (git clone)
echo   [8] Gérer le proxy (activer / désactiver)
echo   [9] Ajouter tous les nouveaux fichiers (git add .)
echo   [0] Quitter
echo.
set /p choix="➡  Entrez le numéro de votre choix : "

if "%choix%"=="1" goto GIT_STATUS
if "%choix%"=="2" goto GIT_PULL
if "%choix%"=="3" goto GIT_PUSH
if "%choix%"=="4" goto DOCUSAURUS_START
if "%choix%"=="5" goto DOCUSAURUS_BUILD
if "%choix%"=="6" goto DOCUSAURUS_DEPLOY
if "%choix%"=="7" goto GIT_CLONE
if "%choix%"=="8" goto PROXY_MENU
if "%choix%"=="9" goto GIT_ADD
if "%choix%"=="0" goto END

echo.
echo ❌ Option invalide. Veuillez réessayer.
pause
goto MENU


:: ---------- GIT ----------
:GIT_STATUS
cls
echo ===================================================
echo 🟢 GIT STATUS
echo ===================================================
pause
git status
pause
goto MENU


:GIT_PULL
cls
echo ===================================================
echo 🔄 GIT PULL
echo ===================================================
pause
git pull
pause
goto MENU


:GIT_PUSH
cls
echo ===================================================
echo 🚀 GIT ADD / COMMIT / PUSH
echo ===================================================
set /p msg="💬 Message du commit : "
git add .
git commit -m "%msg%"
git push
pause
goto MENU


:GIT_ADD
cls
echo ===================================================
echo 📁 GIT ADD
echo ===================================================
echo.
echo Cette commande ajoute tous les fichiers nouveaux ou modifiés
echo à la zone de préparation (staging area) sans commit ni push.
echo.
pause
git add .
echo ✅ Tous les fichiers ont été ajoutés !
echo.
echo Voici l'état actuel du dépôt :
echo ---------------------------------------------------
git status
echo ---------------------------------------------------
pause
goto MENU


:GIT_CLONE
cls
echo ===================================================
echo 📦 GIT CLONE
echo ===================================================
set /p repo="🔗 Entrez l'URL du dépôt GitHub : "
if "%repo%"=="" (
    echo ❌ Aucune URL saisie. Retour au menu.
    pause
    goto MENU
)
set /p folder="📁 Nom du dossier local (laisser vide pour le nom par défaut) : "

if "%folder%"=="" (
    git clone %repo%
) else (
    git clone %repo% %folder%
)

echo ✅ Téléchargement terminé !
pause
goto MENU


:: ---------- DOCUSAURUS ----------
:DOCUSAURUS_START
cls
echo ===================================================
echo 🧱 DOCUSAURUS START
echo ===================================================
pause
npm start
pause
goto MENU


:DOCUSAURUS_BUILD
cls
echo ===================================================
echo 🏗️  DOCUSAURUS BUILD
echo ===================================================
pause
npm run build
pause
goto MENU


:DOCUSAURUS_DEPLOY
cls
echo ===================================================
echo 🚢 DOCUSAURUS DEPLOY
echo ===================================================
pause
npm run deploy
pause
goto MENU


:: ---------- PROXY ----------
:PROXY_MENU
cls
echo ===================================================
echo 🌐 GESTION DU PROXY (http://10.0.0.1:3128)
echo ===================================================
echo.
echo   [1] Activer le proxy
echo   [2] Désactiver le proxy
echo   [0] Retour au menu principal
echo.
set /p proxychoix="➡  Entrez le numéro de votre choix : "

if "%proxychoix%"=="1" goto PROXY_ON
if "%proxychoix%"=="2" goto PROXY_OFF
if "%proxychoix%"=="0" goto MENU

echo ❌ Choix invalide.
pause
goto PROXY_MENU


:PROXY_ON
cls
echo 🌐 Activation du proxy...

:: --- Git ---
git config --global http.proxy http://10.0.0.1:3128
git config --global https.proxy http://10.0.0.1:3128

:: --- VS Code ---
set "settingsPath=%APPDATA%\Code\User\settings.json"
if not exist "%settingsPath%" (
    echo { > "%settingsPath%"
    echo     "http.proxy": "http://10.0.0.1:3128" >> "%settingsPath%"
    echo } >> "%settingsPath%"
) else (
    powershell -Command "(Get-Content '%settingsPath%') -replace '\"http.proxy\": ?\"[^\"]*\"', '\"http.proxy\": \"http://10.0.0.1:3128\"' | Set-Content '%settingsPath%'"
)

echo ✅ Proxy activé !
pause
goto MENU


:PROXY_OFF
cls
echo 🔌 Désactivation du proxy...

:: --- Git ---
git config --global --unset http.proxy
git config --global --unset https.proxy

:: --- VS Code ---
set "settingsPath=%APPDATA%\Code\User\settings.json"
if exist "%settingsPath%" (
    powershell -Command "(Get-Content '%settingsPath%') -replace '\"http.proxy\": ?\"[^\"]*\"', '\"http.proxy\": null' | Set-Content '%settingsPath%'"
)

echo ✅ Proxy désactivé !
pause
goto MENU


:END
cls
echo 👋 Fermeture du script...
timeout /t 1 >nul
exit
