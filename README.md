# Cara Core Ink Agenda — Releases e Loja

Repositório público de **delivery** e **loja** do **Cara Core Ink Agenda**: sistema profissional para estúdios de tatuagem (agenda de sessões, controle financeiro, painel de resultados).

**Foco:** aplicativo **Windows Desktop** em **Java 21** e **JavaFX 21**. Dados no computador do usuário. **Lançamento oficial: 26 de Junho de 2026.**

---

## O que é o Cara Core Ink Agenda?

O **Ink Agenda** é uma ferramenta para tatuadores e estúdios que desejam:

- Organizar agendamentos em calendário visual (cliente, data, horário, valor)
- Controlar entradas e saídas (receitas e despesas)
- Acompanhar o desempenho (faturamento, saldo, indicadores)

O desenvolvimento e o código-fonte ficam no repositório **caracore-ink** (oficina). Este repositório (**caracore-ink-releases**) é o canal **público** de releases, vitrine e documentação de delivery.

---

## Branch padrão: master

Este repositório usa **somente a branch `master`**. Todos os artefatos, o portal (docs/) e as releases ficam nela. Não há branch `main`.

Se o GitHub ainda tiver `main` como padrão: em **Settings → General → Default branch** altere para **master** e confirme; depois pode remover a branch `main` no remoto se desejar (`git push origin --delete main`).

---

## Ecossistema Cara Core

| Conceito | Significado |
|----------|-------------|
| **Oficina (garagem)** | Repositório de código — **caracore-ink** |
| **Loja** | Vitrine, download e documentação — **caracore-ink-releases** (este repositório) |
| **Matriz** | Apresentação oficial e consultoria — **caracore.com.br** |

---

## O que tem neste repositório?

| Onde | O que tem |
|------|-----------|
| **Raiz** | README, VERSION, .gitignore. |
| **docs/** | Portal da loja (GitHub Pages): index.html, download.html, tecnologia.html, canal-feedback.html. CSS e JS em docs/assets. |
| **Releases** | Artefatos versionados (JAR) publicados em [Releases](https://github.com/chmulato/caracore-ink-releases/releases) quando disponíveis. |

Os clientes são direcionados a este repositório para a vitrine e o download. O portal segue o **padrão das lojas do ecossistema Cara Core** (breadcrumb, rodapé, tema escuro, accent verde/ouro, evolution-status, canal de feedback).

---

## Links

- **Portal da loja (este repo):** [docs/index.html](docs/index.html) — apresentação; [docs/download.html](docs/download.html) — download.
- **Repositório público:** [github.com/chmulato/caracore-ink-releases](https://github.com/chmulato/caracore-ink-releases)
- **Portfólio Cara Core Informática:** caracore.com.br
- **Oficina (código-fonte):** repositório **caracore-ink** (módulo Java 21 em `agenda-java/`)

Para ativar o portal no **GitHub Pages**: em Settings → Pages, escolha *Deploy from a branch*, branch **master**, pasta **/docs**. O arquivo **.nojekyll** em docs/ evita processamento Jekyll. A loja usa somente a branch **master** (padrão); todos os artefatos e o portal ficam nela.

---

## Padrão da loja

- **Breadcrumb:** Cara Core Ink Agenda — Loja · Cara Core Informática (caracore.com.br) [· página atual]
- **Rodapé:** Loja · Repositório caracore-ink-releases · Portfólio e matriz caracore.com.br · **Lançamento oficial: 26 de Junho de 2026**
- **Tema:** escuro (--bg-dark, --bg-card), accent verde (#3fb950), ouro (#d4a853), azul (#58a6ff). Fonte Inter.
- **Páginas:** index (balcão), download, tecnologia, canal-feedback. Evolution-status (badge Seed) e FAB de feedback WhatsApp.

---

*Cara Core Informática — Cara Core Ink Agenda (Java 21, JavaFX, Windows Desktop).*
