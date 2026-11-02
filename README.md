# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Preparação v2.0.2](https://img.shields.io/badge/Preparação-v2.0.2%20Windows-yellow?style=for-the-badge&logo=windows)](https://ink.caracore.com.br/download.html)
[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal público de distribuição, vitrine e download do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem (agenda de sessões, financeiro e painel de resultados). Dados locais no computador do usuário; funciona offline por padrão.

**Lançamento oficial:** 26 de junho de 2026.

> **Candidata local:** v2.0.2 — **não publicada**. A loja continua apontando para a v2.0.1 até a aprovação e publicação dos artefatos.

## Novidade

**PWA em roadmap (não antes de 2028)** — o mesmo Ink da v2, instalável no browser (Windows, Mac, Linux, Android e tablet). Não haverá `.dmg` nem `.deb` nativos. Página: [pwa.html](https://ink.caracore.com.br/pwa.html). Não altera o download Windows desta loja.

---

## Produto

O Ink Agenda é para tatuadores e estúdios que precisam:

- organizar agendamentos em calendário visual (cliente, data, horário, duração, valor e check de pago);
- consultar a lista do dia;
- controlar entradas, saídas e saldo por período;
- acompanhar indicadores de desempenho e faturamento;
- cadastrar clientes e orçamentos;
- manter dados locais com backup `.inkbak` com senha e backup automático.

O código-fonte fica no repositório **caracore-ink** (oficina). Este repositório, **caracore-ink-releases**, é a loja (GitHub Pages = [ink.caracore.com.br](https://ink.caracore.com.br/)) e o canal de artefatos.

---

## Versão atual

| Campo | Valor |
| ----- | ----- |
| Versão candidata | `2.0.2` (manutenção do Desktop Windows) |
| Publicação | pendente de aprovação (linha 2.0 lançada em 26/06/2026) |
| Status | Desktop Windows no ar (único download desta loja) |
| Plataformas nesta tag | Windows 10/11 64 bits (setup + ZIP) |
| Release publicada | [v2.0.1 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.1) |
| Loja | [ink.caracore.com.br](https://ink.caracore.com.br/) |

### Artefatos candidatos v2.0.2 (Windows; publicação pendente)

| Plataforma | Artefato | SHA256 |
| ---------- | -------- | ------ |
| Windows (setup) | `AgendaInk-2.0.2-windows-setup.exe` | `f9dde7c521dd64c39ee5dfa3c62bdb8c09f000bf7083c34e15fe47bc0a6cfa54` |
| Windows (portable) | `AgendaInk-2.0.2-windows.zip` | `ab66a21bb39ab597757374ac1b4e280c1129171de54b71f36bacfe90e9171a94` |
| Checksums | `checksum.sha256` | arquivo candidato local; ainda não publicado |

Runtime Java 25 embutido. O usuário final não precisa instalar JDK. Dados em `%LOCALAPPDATA%\CaraCore\AgendaInk\`.

---

## Instalação (Windows)

1. Baixe `AgendaInk-2.0.2-windows-setup.exe` **ou** `AgendaInk-2.0.2-windows.zip` após a publicação.
2. Valide o hash com o `checksum.sha256` da tag v2.0.2.
3. Setup: execute o instalador. Portable: extraia o ZIP e abra `AgendaInk\AgendaInk.exe`.

---

## Verificação de integridade

PowerShell, na pasta dos arquivos:

```powershell
(Get-FileHash .\AgendaInk-2.0.2-windows-setup.exe -Algorithm SHA256).Hash
(Get-FileHash .\AgendaInk-2.0.2-windows.zip -Algorithm SHA256).Hash
```

Compare com `checksum.sha256` da tag v2.0.2 após a publicação.

---

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download Windows](https://ink.caracore.com.br/download.html)
- [PWA](https://ink.caracore.com.br/pwa.html)
- [Wiki do produto](https://wiki.caracore.com.br/projeto-ink.html)
- [Oficina (código)](https://github.com/chmulato/caracore-ink)

---

**Cara Core Informática** · CNPJ 23.969.028/0001-37
