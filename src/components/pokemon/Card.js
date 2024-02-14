import {useEffect, useState, memo} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Card = ({data}) => {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState()
  const [isError, setIsError] = useState(false)

  const getPokemonData = () => {
    axios
      .get(`${data.url}`)
      .then(res => {
        setPokemonData(res.data)
        setLoading(false)
        setIsError(false)
      })
      .catch(setIsError(true))
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardStyle>
          <img src={pokemonData.sprites.front_default} alt="pokemon img" />
          <div>NO.{pokemonData.id}</div>
          <div>{data.name}</div>
        </CardStyle>
      )}
    </>
  )
}

export default memo(Card)

const CardStyle = styled.div`
  width: 100px;
  height: 200px;
  border: 1px solid #dddd;
`
