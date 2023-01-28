import { Head } from '../../../components/Head'
import React from 'react'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'


export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
    {
      id: 3,
      snack: 'pizza',
      name: 'Italiana',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 55.90,
      image: 'https://i.imgur.com/zVkRb1e.jpeg',
    },
    {
      id: 4,
      snack: 'pizza',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 5,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
    {
      id: 6,
      snack: 'pizza',
      name: 'Italiana',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 55.90,
      image: 'https://i.imgur.com/zVkRb1e.jpeg',
    },
  ]
  return (
    <>
      <Head title={'Pizzas'} description={'Nosas melhores pizzas'} />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
