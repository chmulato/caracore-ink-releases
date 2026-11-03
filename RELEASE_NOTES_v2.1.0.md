# Cara Core Ink Agenda v2.1.0

> Windows 10/11, ZIP portátil com runtime Java 25 embutido. O instalador com wizard é gerado no pipeline com WiX. macOS e Linux continuam sem pacote nesta linha; a 3.0 atenderá pelo navegador.

Release de produto do Desktop. Bases das versões 2.0.1 a 2.0.4 abrem na 2.1.0 com migração automática para o esquema V25. Sem preferência gravada, o perfil Tatuador continua sendo o padrão. O executável **não tem assinatura digital**: o SmartScreen ou o antivírus pode avisar ou bloquear a abertura.

## Destaque — produto metamórfico

Um único executável para três rotinas de hora marcada. O operador escolhe o perfil no primeiro acesso, ou depois em **Config → Identidade e Visual do Posto**, e o aplicativo muda a identidade visual e o vocabulário sem reinstalação.

| Perfil | Identidade | Paleta |
|---|---|---|
| Tatuagem & Arte Corporal | Lilás clássico | `#a855f7`, `#c084fc`, `#7c3aed` |
| Odontologia & Saúde | Azul turquesa | `#06b6d4`, `#22d3ee`, `#0891b2` |
| Beleza & Estética | Dourado champagne | `#eab308`, `#facc15`, `#d97706` |

## Primeiro acesso

- O perfil é escolhido antes do celular do responsável e aplicado imediatamente na cena, sem reiniciar o aplicativo.
- A escolha fica gravada em `app_preferences` (chave `ui.skin`).
- Ao concluir a identificação, o catálogo financeiro do responsável nasce com as sugestões de receita daquele nicho. Catálogos já existentes ou personalizados não são alterados.
- O fluxo de criação de senha, recuperação e login permanece o mesmo.

## Terminologia contextual

| Skin | Sessão | Cliente | Espaço | Valor |
|---|---|---|---|---|
| Tatuador | Sessão | Cliente | Estúdio | Valor da sessão (R$) |
| Dentista / Saúde | Consulta | Paciente | Consultório | Valor da consulta (R$) |
| Beleza & Estética | Procedimento | Cliente | Espaço | Valor do procedimento (R$) |

O título da janela reflete o espaço de trabalho (`Ink Agenda 2.1.0 — Estúdio`, `— Consultório` ou `— Espaço`), e o diálogo de agendamento usa o termo de cliente e de sessão do perfil ativo.

## Persistência local e compatibilidade

- **V24** cria a tabela `app_preferences`, usada para a preferência visual por instalação.
- **V25** acrescenta ao catálogo financeiro as sugestões de receita de Odontologia e Beleza & Estética; as linhas do Tatuador continuam válidas.
- Nenhum dado existente é reescrito pela troca de skin.
- O mesmo executável atende aos três nichos; não há instaladores separados por especialidade.
- Windows 10/11 com runtime Java 25 embutido. Faça backup dos dados antes de atualizar.

## Integridade dos artefatos

Os hashes oficiais ficam em `checksum.sha256`, `checksum.md5` e `SHA256SUMS` na release, ao lado do ZIP. No PowerShell:

```powershell
(Get-FileHash .\AgendaInk-2.1.0-windows.zip -Algorithm SHA256).Hash
```

## Loja

A vitrine em https://ink.caracore.com.br/ passa a usar o padrão visual institucional Cara Core, rodapé de quatro colunas e a demonstração metamórfica com troca de termos, paleta e foto por especialidade.
