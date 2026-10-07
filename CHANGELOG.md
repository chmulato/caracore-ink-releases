# Changelog — Cara Core Ink Agenda

Todos os cambios notáveis neste projeto são documentados neste arquivo.

## [2.0.1] - 07 de outubro de 2026

Correções do QA da v2.0.0 (07/10/2026). Detalhe em [`RELEASE_NOTES_v2.0.1.md`](RELEASE_NOTES_v2.0.1.md).

### Corrigido
- Importação CSV idempotente; conflitos de horário viram aviso com lista de ignorados.
- pt-BR fixo na tela, no gráfico e no PDF (R$ 350,00 · 07/10/2026 · outubro de 2026).
- Pacote sem login de demonstração, seeds, scripts de desenvolvimento nem formulário de exemplo.
- PDF: data sem quebra, “−” e “·” visíveis, mês em português.
- Contraste, acentos e termos pt-BR; janela cabe em 1366×768; diálogos escuros.

### Adicionado
- Sessão com horário em minutos, duração (30 min a 8 h) e valor; check “Pagou”.
- Dashboard → Resultados (faturamento, ticket médio, saldo e média mensal).
- Orçamentos: Novo/Editar. Aba Clientes: lista, busca, novo e editar.
- `.inkbak` com senha (AES-256-GCM), pasta/nome escolhidos, sem sobrescrever; backup automático com opção de desligar.
- Log em arquivo com rotação; “Lembrar senha” com segredo por instalação; runtime sem jdwp/jshell/compiler.
- Jar ofuscado com ProGuard (a v2.0.0 publicada saiu sem ofuscação).

### Loja
- Download, guia de instalação, primeiro acesso (passo 1 de 3 direto na primeira abertura), manual, tecnologia e home alinhados à v2.0.1.
- Notas da v2.0.0: removida a promessa de automação de backup na 2.1 (o backup automático já existia).

## [loja] - 09 de setembro de 2026

### Alterado
- **Roadmap:** PWA depois do Hub e do FRO (**não antes de 2028**; browser; **sem** `.dmg`/`.deb` nativos). Página `pwa.html`. Não substitui o download Windows v2.0.0.
- Home: um cartão de novidade; CTAs e grelha de links ficam no **Baixar Windows** (PWA não compete como segundo produto). `download.html` só Windows + uma linha honesta: sem nativo Mac/Linux.
- A linha «macOS/Linux em breve» da tag 2.0.0 é histórica: **não** haverá DMG/DEB.
- Guia `artifacts/instalacao-windows.html` alinhado à v2.0.0 estável (setup + ZIP, Java 25, SHA oficiais). Sem RC8 / Java 21.
- Guias macOS/Linux apontam para a novidade PWA, não para DMG/DEB “em breve”.
- Página `primeiro-acesso.html` e seção no guia: criar responsável com celular + senha local (fluxo real do app; sem usuário seed; sem credenciais de PDV).
- Wiki (`projeto-ink.html#primeiros-passos`) espelha o mesmo fluxo.
- Home e `download.html`: markup sem vazamento de comentário; v2.0.0 / Windows dito uma vez no banner; menos eco de versão/stack.

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
