# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Download v2.0.0](https://img.shields.io/badge/Download-v2.0.0%20Windows-brightgreen?style=for-the-badge&logo=windows)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0)
[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal público de distribuição, vitrine e download do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem (agenda de sessões, financeiro e painel de resultados). Dados locais no computador do usuário; funciona offline por padrão.

**Lançamento oficial:** 26 de junho de 2026.

> **Canal público:** [`v2.0.0`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0) — **Desktop Windows** (setup + ZIP, runtime Java 25 embutido).

## Novidade

**PWA em 26/06/2027** — o mesmo Ink da v2, instalável no browser (Windows, Mac, Linux, Android e tablet). Não haverá `.dmg` nem `.deb` nativos. Página: [pwa.html](https://ink.caracore.com.br/pwa.html). Não altera o download Windows desta loja.

---

## Produto

O Ink Agenda é para tatuadores e estúdios que precisam:

- organizar agendamentos em calendário visual (cliente, data, horário e valor);
- consultar a lista do dia;
- controlar entradas, saídas e saldo por período;
- acompanhar indicadores de desempenho e faturamento;
- manter dados locais com backup e restauração manuais.

O código-fonte fica no repositório **caracore-ink** (oficina). Este repositório, **caracore-ink-releases**, é a loja (GitHub Pages = [ink.caracore.com.br](https://ink.caracore.com.br/)) e o canal de artefatos.

---

## Versão atual

| Campo | Valor |
| ----- | ----- |
| Versão | `2.0.0` (estável) |
| Publicação | 26 de junho de 2026 |
| Status | Desktop Windows no ar (único download desta loja) |
| Plataformas nesta tag | Windows 10/11 64 bits (setup + ZIP) |
| Release | [v2.0.0 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0) |
| Loja | [ink.caracore.com.br](https://ink.caracore.com.br/) |

### Artefatos v2.0.0 (Windows)

| Plataforma | Artefato | SHA256 |
| ---------- | -------- | ------ |
| Windows (setup) | `AgendaInk-2.0.0-windows-setup.exe` | `7fb35a24a79a05115d021bce6428c938425216a1fcd75a07ff569dd978ff1bba` |
| Windows (portable) | `AgendaInk-2.0.0-windows.zip` (~76 MB) | `3f331dcf8d7f70769debc15f32879338677cfe62c30d19182b931ac07f554832` |
| Checksums | [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.0/checksum.sha256) | arquivo oficial da tag |

Runtime Java 25 embutido. O usuário final não precisa instalar JDK. Dados em `%LOCALAPPDATA%\CaraCore\AgendaInk\`.

---

## Instalação (Windows)

1. Baixe `AgendaInk-2.0.0-windows-setup.exe` **ou** `AgendaInk-2.0.0-windows.zip`.
2. Valide o hash com [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.0/checksum.sha256).
3. Setup: execute o instalador. Portable: extraia o ZIP e abra `AgendaInk\AgendaInk.exe`.

---

## Verificação de integridade

PowerShell, na pasta dos arquivos:

```powershell
(Get-FileHash .\AgendaInk-2.0.0-windows-setup.exe -Algorithm SHA256).Hash
(Get-FileHash .\AgendaInk-2.0.0-windows.zip -Algorithm SHA256).Hash
```

Compare com `checksum.sha256` da tag v2.0.0.

---

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download Windows](https://ink.caracore.com.br/download.html)
- [PWA](https://ink.caracore.com.br/pwa.html)
- [Wiki do produto](https://wiki.caracore.com.br/projeto-ink.html)
- [Oficina (código)](https://github.com/chmulato/caracore-ink)

---

**Cara Core Informática** · CNPJ 23.969.028/0001-37
