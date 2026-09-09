# Changelog — Cara Core Ink Agenda

Todos os cambios notáveis neste projeto são documentados neste arquivo.

## [loja] - 09 de setembro de 2026

### Alterado
- Home e `download.html`: markup sem vazamento de comentário; v2.0.0 / Windows dito uma vez no banner; menos eco de versão/stack.
- `download.html`: sem “publica hoje”; um só bloco PowerShell; SHA256 do ZIP e do setup visíveis na página; macOS/Linux continuam Em breve.
- README e release notes da loja: somente Windows nesta tag; macOS/Linux em breve (sem artefato real).

## [2.0.0] - 26 de junho de 2026

### Adicionado
- ✅ **Versão estável oficial** para produção
- ✅ **Distribuição Windows** na tag v2.0.0:
  - Windows: setup (`.exe`) e portable ZIP (runtime Java 25 embutido)
  - macOS/Linux: em breve (sem artefato real nesta tag)
- ✅ **Runtime Java 25 embutido** no pacote Windows (setup + ZIP)
- ✅ **Obfuscação de bytecode** com ProGuard para segurança
- ✅ **Verificação de integridade** com SHA256 checksums
- ✅ **Release notes oficial** com instruções de instalação por plataforma
- ✅ **Documentação UTF-8 correto** em todas as plataformas

### Alterado
- 🔄 Atualizado README.md com referências à v2.0.0 (anterior referenciava RC8)
- 🔄 Ajustado encoding de todos os arquivos de documentação para UTF-8 sem BOM
- 🔄 Sincronização completa entre loja e repositório de releases

### Corrigido
- 🐛 Problemas de encoding em documentação HTML e Markdown
- 🐛 BOM UTF-8 removido de arquivos de releases

### Deprecated
- ⚠️ v2.0.0-RC8 e anteriores agora obsoletos

---

## [2.0.0-RC8] - 15 de maio de 2026

### Adicionado
- ✅ Corrigido launcher jpackage incompatibility com JavaFX Application
- ✅ Implementado Dedicated non-JavaFX launcher (AgendaInkLauncher)
- ✅ Validado: Smoke test RUNNING_AFTER_20S

### Alterado
- 🔄 Refresh de distribuição RC8 (Windows ZIP, macOS DMG, Linux DEB)
- 🔄 Checksums oficiais centralizados em arquivo único

---

## [2.0.0-RC7] - 10 de maio de 2026

### Adicionado
- ✅ Suporte a macOS DMG e Linux DEB na linha RC7

---

## [2.0.0-RC6] - 05 de maio de 2026

### Adicionado
- ✅ Hardening de segurança adicional

---

## [2.0.0-RC5] - 01 de maio de 2026

### Adicionado
- ✅ Suporte inicial a múltiplas plataformas

---

## [2.0.0-RC4] - 28 de abril de 2026

### Adicionado
- ✅ Release Candidate 4

---

## [2.0.0-RC3] - 25 de abril de 2026

### Adicionado
- ✅ Release Candidate 3

---

## [2.0.0-RC1] - 20 de abril de 2026

### Adicionado
- ✅ Primeira Release Candidate da série 2.0.0
- ✅ Gestão de agenda com calendário visual
- ✅ Controle financeiro integrado
- ✅ Painel de indicadores de desempenho
- ✅ Armazenamento local com SQLite
- ✅ Interface Desktop com JavaFX 21
- ✅ Runtime Java 21 embutido

---

## Convenções de Versioning

Este projeto segue [Semantic Versioning](https://semver.org/):

- **MAJOR** (2.0.0): Mudanças incompatíveis na API ou funcionalidades principais
- **MINOR** (.X.0): Novas funcionalidades compatíveis com versões anteriores
- **PATCH** (.X.X): Correções de bugs e ajustes menores

---

## Links de Referência

- **Releases:** [GitHub Releases](https://github.com/chmulato/caracore-ink-releases/releases)
- **Código-fonte:** [caracore-ink (Oficina)](https://github.com/chmulato/caracore-ink)
- **Loja oficial:** [ink.caracore.com.br](https://ink.caracore.com.br/)

---

**Desenvolvido com ❤️ por Cara Core Informática**
