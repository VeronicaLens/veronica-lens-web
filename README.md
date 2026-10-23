# VeronicaLens Web

Landing page oficial do VeronicaLens, um aplicativo de exploracao do ceu, registro de astrofotos e aprendizado de astronomia.

O site apresenta os recursos do aplicativo e disponibiliza as paginas publicas de politica de privacidade e exclusao de conta.

## Tecnologias

- HTML5, CSS3 e JavaScript.
- Icones Lucide armazenados localmente.
- Google Fonts na landing page.
- GitHub Actions para validacao e deploy no Render.

Site estatico, sem framework ou etapa de build.

## Executar localmente

Abra `public/index.html` no navegador ou, com Node.js e npm instalados, execute na raiz do repositorio:

```sh
npx serve public
```

Acesse o endereco informado pelo servidor no terminal.

## Estrutura

```text
public/
	index.html
	assets/
	css/
		style.css
	js/
		main.js
		lucide.min.js
	privacidade/
		index.html
	excluir-conta/
		index.html
.github/
	workflows/
		ci.yml
		deploy.yml
```

## Paginas

| Caminho | Conteudo |
| --- | --- |
| `/` | Apresentacao do aplicativo |
| `/privacidade/` | Politica de privacidade |
| `/excluir-conta/` | Exclusao de conta e dados |

As paginas legais sao acessiveis sem login ou JavaScript. O botao de solicitacao de exclusao abre o cliente de e-mail; ele nao executa a exclusao automaticamente.

## Personalizacao

- Conteudo e links: `public/index.html`.
- Cores, tipografia e responsividade: `public/css/style.css`.
- Menu e dialogos: `public/js/main.js`.
- Imagens e marcas: `public/assets/`.

Os botoes `data-download` exibem um aviso de disponibilidade enquanto o aplicativo nao possui link de publicacao configurado. Para direcionar a loja, substitua-os por links para a listagem oficial.

## Validacao

Na raiz do repositorio:

```sh
npx --yes html-validate@11 "public/**/*.html"
node --check public/js/main.js
```

## Deploy

O Render serve a pasta `public`, sem comando de build. Os workflows do GitHub Actions validam o HTML e acionam o deploy das branches `main` (producao) e `qual` (homologacao).

O workflow de deploy utiliza o secret `RENDER_DEPLOY_HOOK_URL` e a variavel `RENDER_SERVICE_URL` nos respectivos ambientes do GitHub.

As URLs HTTPS publicas de `/privacidade/` e `/excluir-conta/` podem ser cadastradas na Play Console. No aplicativo, `EXPO_PUBLIC_PRIVACY_POLICY_URL` recebe a URL definitiva da politica de privacidade.

## Contato

Bianca Lorenzini - [biancalorenzini.dev@gmail.com](mailto:biancalorenzini.dev@gmail.com).

## Licenca

Consulte [LICENSE](LICENSE). Os icones Lucide mantem o aviso de licenca ISC em `public/js/lucide.min.js`.