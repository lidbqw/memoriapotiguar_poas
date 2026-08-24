import { imageUrl } from '@/services/api'

export const gastronomia = [
  ['Recanto da Tapera', 'taapera.jpg', 'O Recanto da Tapera faz da gastronomia uma extensão da sua própria história, servindo o autêntico sabor do Seridó. O cardápio foca na culinária afetiva, com pratos regionais que resgatam o tempero das famílias sertanejas.'],
  ['Gastrobar', 'Gastrobar.jpg', 'A gastronomia do Gastrobar, na Serra do João do Vale, é uma celebração da regionalidade com sofisticação. O cardápio eleva ingredientes do Sertão e valoriza a experiência sensorial, o clima e a paisagem.'],
  ['Praça dos Trailers', 'Trailers.jpg', 'A Praça dos Trailers é um ponto de encontro de Caicó, onde a gastronomia de rua e o convívio se misturam. É espaço para sanduíches, carne de sol e sabores populares ao ar livre.'],
  ['Tempero da Terra', 'terra.jpg', 'O Tempero da Terra, em Caicó, destaca-se pela comida regional e caseira, em ambiente acolhedor no centro da cidade. É uma parada especial para quem busca sabores autênticos do Sertão.'],
  ['Mozafla Restaurante', 'mozafla.jpg', 'Em Cruzeta, o Mozafla é referência em comida caseira no Seridó, com atendimento familiar e tempero regional que valoriza a sensação de acolhimento.'],
  ['Restaurante do Zorro', 'zorro.jpg', 'Em Jucurutu, o Restaurante do Zorro é conhecido pela culinária regional às margens da BR-226, combinando hospitalidade, comida farta e tempero caseiro.'],
].map(([title, image, text]) => ({ title, image: imageUrl(image), text }))

export const historia = [
  ['Velha Barra de Santana', 'barra.jpg', 'A antiga comunidade de Barra de Santana, em Jucurutu, tornou-se símbolo de transformação com a construção da Barragem de Oiticica. A área foi submersa e os moradores foram realocados, marcando perdas e transformações culturais.'],
  ['Cruzeiro das Almas', 'Cruzeiro_das_Almas.jpg', 'O Cruzeiro das Almas é um importante ponto histórico e de devoção popular de Cruzeta, associado à memória cultural e à religiosidade da população do Seridó.'],
  ['Casa Forte do Cuó', 'forte.png', 'A Casa Forte do Cuó é considerada um marco inicial do povoamento da região do Seridó e está ligada ao contexto colonial e à Guerra dos Bárbaros.'],
  ['Castelo do Engady', 'castelo.jpg', 'O Castelo de Engady, nos arredores de Caicó, destaca-se pela arquitetura singular e por sua relação com estudo, meditação, oração e paisagem sertaneja.'],
  ['Museu do Seridó', 'museu.png', 'O Museu do Seridó, vinculado à UFRN, preserva e divulga a memória da região, com acervo de arte sacra, arqueologia e cultura local.'],
  ['Igreja Matriz de Nossa Senhora dos Remédios', 'igreja.jpg', 'A Igreja Matriz de Nossa Senhora dos Remédios é um marco histórico e religioso de Cruzeta, reunindo tradições, celebrações e elementos da identidade local.'],
].map(([title, image, text]) => ({ title, image: imageUrl(image), text }))
