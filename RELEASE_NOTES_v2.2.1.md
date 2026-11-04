# Cara Core Ink Agenda v2.2.1

> Windows 10/11 (ZIP portátil e instalador com wizard gerado no pipeline com WiX) e Linux Ubuntu/Debian (`.deb`), ambos com runtime Java 25 embutido. macOS não tem instalador nesta linha; a 3.0 atenderá pelo navegador, não antes de 2028.

Release de correção sobre a 2.1.0. Demonstração e manual de primeiro acesso continuam os mesmos: três perfis em um executável e bases das versões 2.0.1 a 2.0.4 abrindo com migração automática. O executável **não tem assinatura digital**: o SmartScreen ou o antivírus pode avisar ou bloquear a abertura.

## Destaque — download da atualização corrigido

O botão **«Baixar e abrir instalador»**, dentro do próprio aplicativo, falhava em **toda** tentativa nas versões 2.1.0 e 2.2.0. Ao servir o arquivo, o GitHub responde com redirecionamento (HTTP 302) para o domínio de assets; o app pedia a URL original e aceitava apenas resposta direta (200), então desistia com a mensagem «Não foi possível baixar o instalador agora».

| Item | Antes (2.1.0 / 2.2.0) | Agora (2.2.1) |
|---|---|---|
| Resposta do GitHub | 302 → não seguia | segue até 5 saltos |
| Destino aceito | só a URL original | `github.com/chmulato`, `*.githubusercontent.com`, `*.caracore.com.br`, sempre HTTPS |
| Verificação final | SHA-256 do manifesto assinado | inalterada: SHA-256 do manifesto assinado é obrigatório |
| Efeito | `DOWNLOAD_FAILED`, nenhum arquivo | download completo e abertura do instalador |

Cada salto é validado pela mesma política de URL — um redirecionamento para domínio fora da lista é recusado (`UNSAFE_DOWNLOAD_URL`) antes de qualquer download. Se o SHA-256 não bater, o instalador temporário é apagado e a atualização não é aberta.

## Alcance da correção

| Quem | O que muda |
|---|---|
| Usuário novo | Nenhuma mudança de jornada: baixa pela loja e instala a 2.2.1. |
| Usuário na 2.1.0 ou 2.2.0 | Essas versões **continuam** com o botão de download quebrado; baixam a 2.2.1 pela página de download uma vez. Da 2.2.1 em diante a atualização volta a funcionar pelo próprio app. |
| Usuário na 2.0.1–2.0.4 | Mesmo caminho da loja; a base migra na abertura. |

## Dependências

- Jackson 3.1.1 → **3.1.7** (`jackson-core`, `jackson-databind`; `jackson-annotations` 2.21). A triagem de 18 achados OSV da 3.1.1 fica encerrada pelo bump; varredura SCA do artefato publicado não foi executada nesta release.

## Compatibilidade

- Sem mudança de esquema: nenhuma migração nova; a base nasce ou permanece na V26.
- Mesmo banco local em `%LOCALAPPDATA%\CaraCore\AgendaInk\agenda.db` (Windows) e `~/.caracore-ink/` (Linux).
- Mesma chave de assinatura do canal (`ink-2026-11`); manifesto da 2.2.1 verificado pelo aplicativo antes de oferecer o download.

## Integridade dos artefatos

| Arquivo | Tamanho | SHA-256 |
|---|---|---|
| `AgendaInk-2.2.1-windows-setup.exe` | 62.947.840 B | `39eafa4af39a439cf5c905ad08d4f552fd6cfbe1ef98f54b4c937bfc270c124b` |
| `AgendaInk-2.2.1-windows.zip` | 61.477.189 B | `4baf257d5136bb497f93c2927ec8ec536af91c853219bb71d0abe6e1deef98b1` |
| `agenda-ink-2.2.1-linux.deb` | 53.419.622 B | `1b89bb7655bf504ab6e19c702e70d78e32683ef3b7653cbfe8227d1f841cef14` |

Os hashes oficiais também ficam em `checksum.sha256`, `checksum.md5`, `SHA256SUMS` e `checksum-linux-2.2.1.txt` na release.

## Verificação realizada antes da publicação

- Testes do atualizador: 19/19 verdes, incluindo redirecionamento 302→200 com SHA, redirecionamento para host fora da política, redirecionamento sem `Location` e limite de saltos.
- Gate completo `mvn verify` (Java 25): 713 testes, 0 falhas.
- Canal real: manifesto 2.2.1 assinado, aceito pelo código corrigido; download de 62.927.360 bytes (2.2.0) pela URL que redireciona, com SHA-256 conferido, antes da troca do canal.
- Artefato publicado: a classe do atualizador dentro do `agenda.jar` da 2.2.1, executada contra o canal real, ofereceu a 2.2.1 a partir da 2.1.0 e **baixou** o setup publicado (62.947.840 bytes, SHA-256 conferido); a partir da 2.2.1 respondeu «versão atual».
- Portable 2.2.1 aberta com banco em diretório de teste: título `Ink Agenda 2.2.1 — Estúdio`.

## Limites conhecidos

- O instalador continua sem assinatura digital (Authenticode: `NotSigned`, o mesmo da 2.1.0).
- Linux: o `.deb` 2.2.1 não foi instalado nesta homologação.
- O clique real no botão dentro do app 2.1.0 → oferta da 2.2.1 não foi medido com a interface; a medição foi feita na classe publicada contra o canal real.
