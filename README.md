# A7 One Signature Static V1

Versão visual nova da A7 One, sem Next.js, npm ou dependências.

## Por que esta versão não dá erro de npm
Ela é 100% estática:
- index.html
- styles.css
- script.js
- assets/

A Vercel publica diretamente, sem instalar pacotes.

## Importante para substituir o projeto anterior
Apague do GitHub os arquivos antigos:
- app/
- components/
- package.json
- package-lock.json
- next.config.*
- next-env.d.ts
- tsconfig.json

Depois envie somente os arquivos desta pasta.
