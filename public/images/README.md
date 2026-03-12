# Imagens do Projeto Velho Hábito

Este diretório contém todas as imagens do website. Abaixo estão as instruções para substituir os placeholders pelas imagens reais.

## Estrutura de Ficheiros

```
public/images/
├── hero-coffee.png       # Imagem principal do Hero (produto em destaque)
├── about-interior.jpg    # Foto do interior do estabelecimento
├── og-image.jpg          # Imagem para Open Graph (partilha em redes sociais)
└── menu/                 # Imagens dos produtos do menu
    ├── espresso.jpg
    ├── cappuccino.jpg
    ├── latte.jpg
    ├── mocha.jpg
    ├── chocolate.jpg
    ├── tea.jpg
    ├── juice.jpg
    ├── tosta.jpg
    ├── croissant.jpg
    ├── club.jpg
    ├── nata.jpg
    └── bolo-chocolate.jpg
```

## Especificações das Imagens

### Hero (`hero-coffee.png`)
- **Formato**: PNG com fundo transparente (preferível) ou JPG
- **Dimensões**: 800x800px mínimo
- **Conteúdo**: Copo/chávena de café premium
- **Notas**: Usar imagem de alta qualidade, o produto será o elemento de destaque

### Interior (`about-interior.jpg`)
- **Formato**: JPG
- **Dimensões**: 800x1000px (aspect ratio 4:5)
- **Conteúdo**: Foto do interior do café, balcão, ou ambiente acolhedor
- **Notas**: Imagem que transmita a atmosfera do espaço

### Open Graph (`og-image.jpg`)
- **Formato**: JPG
- **Dimensões**: 1200x630px (obrigatório para OG)
- **Conteúdo**: Composição com logo + imagem + texto "Velho Hábito"
- **Notas**: Esta imagem aparece quando o site é partilhado em redes sociais

### Menu (pasta `menu/`)
- **Formato**: JPG ou WebP
- **Dimensões**: 400x300px mínimo (aspect ratio 4:3)
- **Conteúdo**: Fotos apelativas dos produtos
- **Notas**: Fundos neutros, boa iluminação, estilo consistente

## Otimização

Antes de fazer upload, optimize as imagens:

1. **Comprimir**: Use ferramentas como TinyPNG, Squoosh, ou ImageOptim
2. **Formato**: Prefira WebP para melhor compressão, com fallback JPG
3. **Resolução**: Forneça @2x para ecrãs retina se possível

## Imagens Placeholder Atuais

Enquanto não tiver as imagens reais, o site usa placeholders do Unsplash ou cores sólidas. Para evitar erros:

1. Crie imagens placeholder simples com as dimensões corretas
2. Ou comente as referências às imagens nos componentes

## Onde Alterar

- **Hero**: `components/Hero.tsx` - linha com `src="/images/hero-coffee.png"`
- **About**: `components/AboutSection.tsx` - linha com `src="/images/about-interior.jpg"`
- **Menu**: `components/MenuGrid.tsx` - array `menuItems` com propriedade `image`

## Ferramentas Recomendadas

- [TinyPNG](https://tinypng.com/) - Compressão
- [Squoosh](https://squoosh.app/) - Conversão e compressão
- [Remove.bg](https://remove.bg/) - Remover fundos
- [Canva](https://canva.com/) - Criar OG image

