<div align="center">

![KFSI Admin UI](docs/readme-banner.svg)

# KFSI Admin UI

A static admin-interface study covering content management and account screens.

**English** · [한국어](README.ko.md)

![project: prototype](https://img.shields.io/badge/project-prototype-2dd4bf?style=flat-square) ![stack: HTML / CSS](https://img.shields.io/badge/stack-HTML%20%2F%20CSS-2dd4bf?style=flat-square)

[Repository](https://github.com/wilgon456/KFSI_webAdmin_rebuild)

</div>

---

## Screens

- Administrator login and home layout.
- Content list, content creation and category management.
- Content move/delete popups.
- Password search, password change and an email verification template.

## Preview locally

```bash
git clone https://github.com/wilgon456/KFSI_webAdmin_rebuild.git
cd KFSI_webAdmin_rebuild
python3 -m http.server 8000
```

Start at **http://localhost:8000**. You can also open individual screens such as **http://localhost:8000/html/home.html** and **http://localhost:8000/html/contentsManagement.html**.

## Project map

| Path | Purpose |
| --- | --- |
| `index.html` | Login screen |
| `html/` | Admin pages and popup layouts |
| `css/` | Page styles and shared layout components |
| `verifyEmailForm.html` | Email verification layout |
| `src/` | Logo asset |

## Scope

This repository demonstrates interface layouts. It does not provide a backend, real authentication or persistent content management. Some links and interactions are placeholders; it is not an official KFSI service.
