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
- `components/layout/` — Header e Footer
- `components/home/` — Seções da homepage (Hero, Serviços, Sobre, etc.)
- `components/ui/` — Tag, Button, Card
- `public/images/` — Imagens estáticas (substitua placeholders quando tiver os assets finais)

## Licença

Projeto privado — BT Comunicação.
