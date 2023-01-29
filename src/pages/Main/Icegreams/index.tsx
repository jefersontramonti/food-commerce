import { Head } from '../../../components/Head'
import React, { useEffect, useState } from 'react'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getIceCreams } from '../../../services/api'

export default function Icegreams() {
  const [iceGreams, setIceGreams] = useState([])

  useEffect(() => {
    (async () => {
      const iceGreamRequest = await getIceCreams()

      setIceGreams(iceGreamRequest.data)
      })()
  }, [])
  return (
    <>
      <Head title={'Sorvetes'} description={'Nossos melhores Sorvetes'} />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceGreams}/>
    </>
  )
}
