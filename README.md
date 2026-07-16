# A7 One — V18 Cookie Consent / LGPD

## Incluído
- Banner de cookies exibido na primeira visita.
- Botões:
  - Aceitar todos
  - Recusar opcionais
  - Configurar
- Modal com categorias:
  - Necessários
  - Preferências
  - Estatísticas
  - Marketing
- Escolha salva no navegador por `localStorage`.
- Link “Configurações de cookies” no rodapé.
- Banner também disponível na Política de Privacidade.
- Layout responsivo para desktop, tablet e celular.

## Preparação para Analytics, Ads e Pixel
Scripts opcionais devem ser adicionados com este formato:

```html
<script type="text/plain" data-cookie-category="analytics">
  // Google Analytics ou Microsoft Clarity
</script>

<script type="text/plain" data-cookie-category="marketing">
  // Google Ads ou Meta Pixel
</script>
```

Eles somente serão ativados após autorização para a respectiva categoria.

## Importante
Atualmente o site está preparado para as ferramentas, mas nenhum ID de Google Analytics,
Google Ads ou Meta Pixel foi inserido neste pacote.

## Publicação
Descompacte o ZIP e envie todo o conteúdo interno para a raiz do mesmo repositório GitHub.

Cache atualizado: 1784231502
