import { Head } from '../../../components/Head'
import React, { useEffect, useState } from 'react'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getBurgers } from '../../../services/api'

export default function Burgers() {

  const [burgers, setBurguers] = useState([])

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers()

      setBurguers(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title={'Hambúrgueres'} description={'Nossos melhores Burguers'} />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
