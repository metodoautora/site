# Método Autora — Página de vendas

Página de vendas (one-page) para o produto **Método Autora**, da Prof.ª Dra. Stephanie Ribeiro.
Site estático em HTML, CSS e JavaScript — **sem instalação, sem build**. Basta abrir o arquivo
ou publicar em qualquer hospedagem.

## Como visualizar no computador

Abra o arquivo `index.html` com duplo clique (ele abre no navegador).

Ou, se quiser servir localmente (recomendado), rode no terminal dentro da pasta do projeto:

```bash
python3 -m http.server 8000
```

E acesse `http://localhost:8000` no navegador.

## O que você precisa editar (rápido)

### 1) WhatsApp e link de compra
Abra o arquivo `script.js`. No topo há um bloco `CONFIG`. Edite apenas ele:

- `whatsapp`: seu número no formato internacional, só números. Ex.: `5511999999999`
  (55 = Brasil, 11 = DDD, restante = número).
- `whatsappMensagem`: a mensagem que já aparece escrita quando a pessoa abre o WhatsApp.
- `checkout`: o link de pagamento do seu produto (Hotmart, Kiwify, Eduzz, Stripe etc.).

Todos os botões de "comprar" e "WhatsApp" do site usam automaticamente esses valores.

### 2) Fotos da professora
Coloque as fotos reais na pasta `assets/` e troque os nomes no arquivo `styles.css`:

- Foto do topo (hero): procure por `assets/stephanie.svg` e troque pelo nome da sua foto,
  ex.: `assets/stephanie.jpg`.
- Foto da seção "A professora": procure por `assets/stephanie-2.svg` e troque igual.

Use fotos na vertical (proporção aproximada 4:5) para ficarem bonitas.

### 3) Textos, preço e módulos
Tudo no arquivo `index.html`. Os trechos mais importantes para revisar:

- **Preço**: procure por `R$ 997` e `R$ 97` na seção da oferta (`id="oferta"`).
- **Módulos**: seção `id="modulos"` — ajuste títulos e descrições conforme o conteúdo real.
- **Depoimentos**: seção `id="depoimentos"` — troque pelos depoimentos reais das alunas.
- **E-mail de contato**: procure por `contato@metodoautora.com.br` no rodapé.

## Como publicar na internet (grátis)

Qualquer uma destas opções funciona arrastando a pasta inteira:

- **Netlify**: acesse netlify.com → "Add new site" → "Deploy manually" → arraste a pasta.
- **Vercel**: vercel.com → importe a pasta.
- **GitHub Pages**: suba os arquivos em um repositório e ative o Pages.

Depois você pode apontar seu domínio próprio (ex.: `metodoautora.com.br`) para o site.

## Estrutura dos arquivos

```
metodo-autora/
├── index.html      → conteúdo e seções da página
├── styles.css      → design, cores e responsividade
├── script.js       → WhatsApp, checkout e animações (EDITE O CONFIG AQUI)
├── assets/         → imagens (troque os placeholders pelas fotos reais)
└── README.md       → este guia
```
