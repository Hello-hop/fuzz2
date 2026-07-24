# 📋 TODO — Fuzz & Friture

> Mis à jour automatiquement à chaque migration d'article.
> Dernière mise à jour : article 14 (Ampli combo)

---

## 🖼️ IMAGES À TÉLÉCHARGER

### 🔴 Priorité haute — incohérences visibles
Ces images sont actuellement remplacées par des substituts qui ne correspondent pas
(ex : une photo de pédale sous le nom d'un guitariste).

| # | Image à trouver | Où la chercher | Utilisée dans |
|---|---|---|---|
| 1 | **Slash** (portrait/live) | commons.wikimedia.org/wiki/Category:Slash_(musician) | Wah Wah — Maîtres de la Wah |
| 2 | **Kirk Hammett** (portrait/live) | commons.wikimedia.org/wiki/Category:Kirk_Hammett | Wah Wah — Maîtres de la Wah |
| 3 | **Steve Vai** (portrait/live) | commons.wikimedia.org/wiki/Category:Steve_Vai | Wah Wah — Maîtres de la Wah |

### 🟠 Priorité moyenne — mauvais modèle de pédale
La pédale affichée n'est pas le bon modèle.

| # | Image à trouver | Où la chercher | Utilisée dans |
|---|---|---|---|
| 4 | **Dunlop Cry Baby GCB95** | jimdunlop.com → recherche "GCB95" | Wah Wah + Guide (fiche + Où acheter) |
| 5 | **Vox V847** | voxamps.com → wah pedals | Wah Wah (fiche + Où acheter) |
| 6 | **Cry Baby 535Q** | jimdunlop.com → recherche "535Q" | Wah Wah (fiche + Où acheter) |
| 7 | **Morley Bad Horsie 2** | morleypedals.com | Wah Wah (fiche + Où acheter) |
| 8 | **Boss DD-3T** | boss.info/fr/products/dd-3t/ (Gallery) | Guide (fiche + Où acheter) |
| 9 | **MXR Dyna Comp M102** | jimdunlop.com → recherche "M102" | Guide (fiche + Où acheter) |
| 10 | **Maxon OD-9** | maxonfx.com | Tube Screamer (fiche + Où acheter) |
| 11 | **JHS Bonsai** | jhspedals.info | Tube Screamer (fiche + Où acheter) |

### 🟢 Optionnel — améliorations
| # | Image | Note |
|---|---|---|
| 12 | Photos de concert des guitaristes | Règle des 3 images/article : pédale + guitariste + concert |

### 🔴 Nouveaux manques (articles 6-8)
| # | Image à trouver | Où la chercher | Utilisée dans |
|---|---|---|---|
| 13 | **Keith Richards** | commons.wikimedia.org/wiki/Category:Keith_Richards | Fuzz sous-cotée — Maîtres du Fuzz |
| 14 | **Billy Corgan** | commons.wikimedia.org/wiki/Category:Billy_Corgan | Fuzz sous-cotée — Maîtres du Fuzz |
| 15 | **Gary Moore** | commons.wikimedia.org/wiki/Category:Gary_Moore | Top 7 overdrive — Maîtres |
| 16 | **Joe Bonamassa** | commons.wikimedia.org/wiki/Category:Joe_Bonamassa | Top 7 overdrive — Maîtres |
| 17 | **Boss BD-2 Blues Driver** | boss.info → BD-2 | Top 7 overdrive (fiche + Où acheter) |
| 18 | **Fulltone OCD** | fulltone.com | Top 7 overdrive (fiche + Où acheter) |
| 19 | **ProCo RAT 2** | ratdistortion.com | Top 7 overdrive (fiche + Où acheter) |
| 20 | **Boss OD-3** | boss.info → OD-3 | Top 7 overdrive (fiche + Où acheter) |
| 21 | **MXR M77 Custom Badass** | jimdunlop.com → M77 | Top 7 overdrive (fiche + Où acheter) |

### 🟠 Nouveaux manques (articles 9-11)
| # | Image à trouver | Où la chercher | Utilisée dans |
|---|---|---|---|
| 22 | **Boss CE-1 / CE-2** (pédales) | boss.info → CE-2W | Chorus (fiches + Où acheter) |
| 23 | **EHX Small Clone** | ehx.com → Small Clone | Chorus (fiche + Où acheter) |
| 24 | **TC Corona Chorus** | tcelectronic.com | Chorus (fiche + Où acheter) |
| 25 | **MXR Phase 90** (pédale) | jimdunlop.com → M101 | Phaser (fiche + Où acheter) |
| 26 | **EHX Small Stone** | ehx.com → Small Stone | Phaser (fiche + Où acheter) |
| 27 | **Mu-Tron Bi-Phase** | reverb.com (vintage) | Phaser (fiche + Où acheter) |
| 28 | **Brian May** (portrait) | commons.wikimedia.org/wiki/Category:Brian_May | Phaser — Sorciers du Phasing |
| 29 | **Eddie Van Halen** (portrait) | commons.wikimedia.org/wiki/Category:Eddie_Van_Halen | Flanger — Quatre sweeps |
| 30 | **Mark Lettieri** (portrait) | commons.wikimedia.org | Flanger — Quatre sweeps |

---

## ⚙️ ACTIONS TECHNIQUES

### À faire par toi
- [ ] **Ouvrir l'accès réseau de Claude** (supprimerait ~80% des téléchargements manuels ci-dessus)
  **Chemin exact** : icône de profil (en bas à gauche) → **Paramètres** → **Capacités** →
  section « Exécution de code et création de fichiers » → **Liste d'autorisation de domaines**
  → choisir **« Tous les domaines »**
  ⚠️ Note : ajouter des domaines un par un ne fonctionne pas tant que le mode reste
  sur « Gestionnaires de paquets uniquement » (bug connu). Il faut basculer sur « Tous les domaines ».
  ℹ️ Réversible : tu peux revenir au mode restreint après la migration.
- [ ] **Vérifier le rendu** des articles migrés sur mobile
- [ ] **Décider** : garder les photos de presse (Gilmour, Jack White, SRV…) ou les remplacer par des Wikimedia (licences libres) — enjeu juridique pour un site monétisé

### À faire plus tard (après migration complète)
- [ ] Activer le domaine fuzz-et-friture.fr sur GitHub Pages (DNS Hostinger)
- [ ] Redirections 301 des anciennes URLs WordPress
- [ ] **301 spécifique** : `comparatif-fuzz-face-big-muff-boss-fz5` → `la-guerre-des-fuzz` (doublon abandonné)
- [ ] Sitemap.xml + robots.txt
- [ ] Resoumettre le sitemap à Google Search Console
- [ ] Export/backup complet WordPress avant résiliation
- [ ] Résilier l'hébergement Hostinger (garder le domaine)
- [ ] Désactiver les scénarios Make + trigger Apps Script (devenus inutiles)

---

## 📄 MIGRATION DES ARTICLES

### ✅ Migrés (14/19)
- [x] La Guerre des Fuzz → `articles/la-guerre-des-fuzz.html`
- [x] Comment choisir ses pédales d'effets → `articles/comment-choisir-ses-pedales.html`
- [x] Tube Screamer → `articles/tube-screamer.html`
- [x] Wah Wah → `articles/wah-wah.html`
- [x] Ordre des pédales (PILIER) → `articles/ordre-des-pedales.html`
- [x] Klon vs clones → `articles/klon-vs-clones.html`
- [x] Top 7 pédales overdrive → `articles/top-7-overdrive.html`
- [x] Fuzz mythique et sous-cotée → `articles/fuzz-sous-cotee.html`
- [x] Chorus → `articles/chorus.html`
- [x] Phaser → `articles/phaser.html`
- [x] Flanger : mode avion → `articles/flanger-mode-avion.html`
- [x] Dallas Arbiter Fuzz Face → `articles/dallas-arbiter-fuzz-face.html`
- [x] Les 6 pédales indispensables → `articles/6-pedales-pedalboard.html`
- [x] Guide ampli combo débutant → `articles/ampli-combo-debutant.html`

### ⏳ Restants (5)
- [ ] Overdrive : la pédale incontournable
- [ ] Ces overdrives qui ont rendu vos amplis accros
- [ ] Flanger : les 3 pédales de légende
- [ ] Pédales IA en 2026
- [ ] Boss PX-1 Plugout FX

### ⚠️ À arbitrer — doublon détecté
- **« Overdrive : la pédale incontournable »** reprend exactement les mêmes 7 produits et la même
  structure que « Top 7 pédales overdrive » (déjà migré). Publier les deux nuirait au SEO
  (contenu dupliqué). Deux options : (a) l'abandonner et faire une 301 vers `top-7-overdrive.html`,
  (b) le réécrire en article pédagogique « qu'est-ce qu'un overdrive » sans liste de produits.
  **→ Ton arbitrage nécessaire.**

### ❌ Abandonné
- Comparatif Fuzz Face / Big Muff / Boss FZ-5 (doublon de "La Guerre des Fuzz")

---

## 💡 COMMENT M'ENVOYER LES IMAGES

Télécharge-les, puis envoie-les dans la conversation. Pas besoin de les renommer :
je m'occupe du nommage, de l'optimisation (compression) et de l'intégration.
Tu peux grouper plusieurs images en un seul envoi.
