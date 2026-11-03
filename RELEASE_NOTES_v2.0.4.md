# Cara Core Ink Agenda v2.0.4

> Windows (instalador e ZIP) e Linux (.deb). O pacote macOS não faz parte desta versão.

Atualização corretiva do Desktop. Bases das versões 2.0.1, 2.0.2 e 2.0.3 abrem na 2.0.4 sem perda de dados; não há mudança de esquema. O executável **não tem assinatura digital**: o SmartScreen ou o antivírus pode avisar ou bloquear a abertura. Não há promessa de instalação sem alertas.

## Destaques

- **Pagou na lista do dia:** a caixa nasce desmarcada, acompanha o recebimento real e, ao desmarcar, pede confirmação e estorna o lançamento no Financeiro. O estado continua correto ao fechar e reabrir.
- **Lembrar da minha senha:** ao reabrir, celular e senha são preenchidos por até 12 horas. No Windows, a credencial é protegida pelo DPAPI, sem texto legível no disco; no Linux, é cifrada com AES-GCM e um segredo desta instalação. Clicar em **Sair** apaga a credencial.
- **Atualizações:** em **Configurações → Verificar atualizações**, o aplicativo consulta o canal oficial apenas quando você clica. A resposta precisa de assinatura digital Ed25519 válida; links de download só são aceitos de `github.com/chmulato` e de `*.caracore.com.br`, sempre por HTTPS; o SHA-256 é conferido antes de abrir o instalador. Se a assinatura ou o hash não baterem, o download não é oferecido e o aplicativo avisa que não foi possível validar a atualização. A consulta envia somente a versão instalada e a plataforma.

## Outras correções

- Instalação nova deixa de mostrar «último backup há mais de 7 dias»; sem backup registrado, o texto passa a ser «Você ainda não fez nenhum backup», e o aviso só aparece depois do primeiro acesso.
- Bloqueio por tentativas mostra o tempo restante sem revelar se o celular existe.
- «Novo orçamento» rola em telas pequenas, com Salvar e Cancelar acessíveis em 1366×768 e com escala de 125%.
- Código de emergência mascarado, com opção de mostrar; «Copiar todos» e «Salvar em .txt» continuam disponíveis.
- Nomes longos na lista do dia terminam em reticências e continuam completos na dica.
- Metadados do pacote Linux corrigidos (UTF-8) e mantenedor preenchido com `Cara Core Informática <suporte@caracore.com.br>`.

## Integridade dos artefatos

`checksum.sha256`, `checksum.md5` e `SHA256SUMS` passam a listar todos os arquivos publicados na release: instalador Windows, ZIP portátil e pacote Linux. Os hashes oficiais ficam nesses arquivos, na página de download e no canal de atualização.

O runtime Java 25 está embutido. Faça backup dos dados antes de atualizar.
