# BT Comunicação — Site

Site institucional da BT Comunicação (agência de marketing e relações públicas). Next.js, TypeScript e Tailwind CSS, preparado para deploy na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto (e configure as mesmas variáveis no painel da Vercel para produção):

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp com DDI, sem espaços nem símbolos (ex: `5511999999999`). Usado nos botões "Fale no WhatsApp". |

Se não for definida, será usado um número placeholder.

## Build e deploy (Vercel)

```bash
npm run build
npm run start
```

Na [Vercel](https://vercel.com), conecte o repositório e faça o deploy. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` em **Settings → Environment Variables**.

## Estrutura

- `app/` — Layout, página inicial e estilos globais
- `app/favicon.ico` — Favicon (aba do navegador)
- `app/icon.png` — Ícone PNG 96×96 (pwa/navegadores)
- `app/apple-icon.png` — Ícone Apple Touch (home screen)
- `components/layout/` — Header e Footer
- `components/home/` — Seções da homepage (Hero, Serviços, Sobre, etc.)
- `components/ui/` — Tag, Button, Card
- `public/` — Assets estáticos:
  - `logo_bt.png` — Logo principal (header e imagem Open Graph / redes sociais)
  - `favicon.ico`, `favicon.svg`, `favicon-96x96.png` — Origens dos ícones (os usados pelo site ficam em `app/`)

## Licença

Projeto privado — BT Comunicação.
