# Cara Core Ink Agenda — Loja e Releases

Canal público de distribuição, vitrine e documentação de delivery do **Cara Core Ink Agenda**: sistema de gestão para estúdios de tatuagem com agenda de sessões, controle financeiro e painel de resultados.

Plataforma alvo: **Desktop (Windows + Linux no RC1) — Java 21, JavaFX 21**. Armazenamento local no computador do usuário.
Lançamento oficial: **26 de Junho de 2026**.

---

## Produto

O Ink Agenda é desenvolvido para tatuadores e estúdios que precisam de uma ferramenta confiável para:

- organizar agendamentos em calendário visual (cliente, data, horário, valor);
- controlar entradas e saídas (receitas e despesas por período);
- acompanhar indicadores de desempenho (faturamento, saldo, painel consolidado).

O código-fonte e o desenvolvimento ficam no repositório **caracore-ink** (oficina). Este repositório — **caracore-ink-releases** — é o canal público de releases, vitrine da loja e documentação de delivery.

---

## Versão atual

| Campo | Valor |
|-------|-------|
| Versão | 2.0.0-RC1 |
| Artefatos | AgendaInk-2.0.0-RC1-windows.zip (Windows) · agenda-ink_2.0.0_amd64.deb (Linux) |
| Status | Pré-lançamento — stable em 26/06/2026 |
| Plataforma | Windows 10/11 64 bits (ZIP) · Ubuntu/Debian amd64 (DEB) |
| Repositório de release | github.com/chmulato/caracore-ink-releases/releases |

### Atualização operacional — 07/04/2026

- Delivery Linux RC1 efetuado anteriormente no mesmo dia.
- Delivery Windows RC1 concluído em 07/04/2026 na mesma tag `v2.0.0-RC1`, sem recriação da release.
- Checksum SHA256 vigente do artefato Windows: `5f9f4af4c36019ccac901d495976d0cb4cb33b18aea6401d8a670f3318ace488`
- Checksum MD5 vigente do artefato Windows: `51339e6459b3ecf51c73b9a86c997d07`

O processo de delivery agora aceita publicação por plataforma na mesma release, preservando assets já publicados de outros sistemas operacionais.

---

## Funcionalidades implementadas (v2.0.0-RC1)

### Arquitetura e dados
Java 21, JavaFX 21, SQLite local em `AppData/Local/CaraCore/AgendaInk`. No primeiro acesso, o banco é criado automaticamente e vinculado ao hardware do computador (HardwareID via `app_identity`).

### Fluxo de trabalho
Orçamento → Pago → Sessão → Aftercare. Dashboard unificado de agendamentos, tarefas pendentes e resumo financeiro.

### Aftercare
Alertas automáticos aos 3 e 30 dias após a sessão, processados com Java Virtual Threads.

### Cofre de segurança
Exportação de dossiê de dados (formato `.inkbak`, GZIP comprimido), restauração com validação de HardwareID, aviso ao usuário quando o backup supera 7 dias sem atualização.

### Build
- Distribuição portátil: `mvn package` gera `target/dist` com `agenda.jar`, `lib/` e `run.bat`.
- Instalador Windows: `mvn package -Pinstaller` gera executável autocontido em `target/installer` (sem console, ícone oficial).
- Notas de lançamento: `RELEASE_NOTES.md` na oficina (`agenda-java/`).

---

## Estrutura do repositório

| Caminho | Conteúdo |
|---------|----------|
| Raiz | README.md, VERSION, LICENSE, .gitignore |
| docs/ | Portal da loja (GitHub Pages): index.html, download.html, tecnologia.html, canal-feedback.html, wiki/, artifacts/ |
| docs/assets/ | CSS, JS e imagens do portal (ink-portal.css, ink.js, loja.js, Bootstrap, evolution-status) |
| Releases | Artefatos versionados publicados em github.com/chmulato/caracore-ink-releases/releases |

---

## Portal da loja (GitHub Pages)

O portal está publicado em `ink.caracore.com.br` via GitHub Pages (branch `master`, pasta `/docs`).

Padrão visual das lojas do ecossistema Cara Core: tema escuro, fonte Inter, accent verde (#3fb950), ouro (#d4a853), azul (#58a6ff), breadcrumb e rodapé institucionais, evolution-status (badge de fase do produto), canal de feedback.

Para ativar o GitHub Pages em um fork ou repositório novo: Settings → Pages → Deploy from a branch → `master` → `/docs`. O arquivo `.nojekyll` presente em `docs/` impede o processamento Jekyll.

---

## Ecossistema Cara Core

| Papel | Repositório / Endereço |
|-------|------------------------|
| Oficina (código-fonte) | caracore-ink |
| Loja (vitrine e releases) | caracore-ink-releases (este repositório) |
| Matriz (portfólio institucional) | caracore.com.br |

---

## Branch

Este repositório utiliza exclusivamente a branch `master`. Não existe branch `main`.

---

## Licença

Licenciamento proprietário institucional da Cara Core Informática. Consulte [LICENSE](LICENSE).

