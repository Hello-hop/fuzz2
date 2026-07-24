# 📋 TODO — Fuzz & Friture

> Mis à jour automatiquement à chaque migration d'article.
> Dernière mise à jour : article 4 (Wah Wah)

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

---

## ⚙️ ACTIONS TECHNIQUES

### À faire par toi
- [ ] **Ajouter les domaines réseau** dans les paramètres Claude (permettrait de supprimer 80% des téléchargements manuels ci-dessus) :
  `upload.wikimedia.org` · `commons.wikimedia.org` · `hello-hop.github.io`
  → Paramètres Claude → outil d'exécution de code / analyse de données → domaines autorisés
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

### ✅ Migrés (4/19)
- [x] La Guerre des Fuzz → `articles/la-guerre-des-fuzz.html`
- [x] Comment choisir ses pédales d'effets → `articles/comment-choisir-ses-pedales.html`
- [x] Tube Screamer → `articles/tube-screamer.html`
- [x] Wah Wah → `articles/wah-wah.html`

### ⏳ Restants (15)
- [ ] Fuzz mythique et disputée : la plus sous-cotée
- [ ] Dallas Arbiter Fuzz Face
- [ ] Top 7 pédales overdrive 2026
- [ ] Overdrive : la pédale incontournable
- [ ] Ces overdrives qui ont rendu vos amplis accros
- [ ] Klon vs clones
- [ ] Chorus
- [ ] Flanger : mode avion
- [ ] Flanger : les 3 pédales de légende
- [ ] Phaser : quand la guitare se met à respirer
- [ ] Ordre des pédales (PILIER)
- [ ] Les 6 pédales indispensables
- [ ] Guide ampli combo débutant
- [ ] Pédales IA en 2026
- [ ] Boss PX-1 Plugout FX

### ❌ Abandonné
- Comparatif Fuzz Face / Big Muff / Boss FZ-5 (doublon de "La Guerre des Fuzz")

---

## 💡 COMMENT M'ENVOYER LES IMAGES

Télécharge-les, puis envoie-les dans la conversation. Pas besoin de les renommer :
je m'occupe du nommage, de l'optimisation (compression) et de l'intégration.
Tu peux grouper plusieurs images en un seul envoi.
