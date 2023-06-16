import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Card from '../components/pokemon/Card'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styled from 'styled-components'

const Pokemon = () => {
  const target = useRef(null)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState()
  const [pokemonCount, setPokemonCount] = useState(0)
  const [isError, setIsError] = useState(false)

  const getPokemonData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then(res => {
        pokemonData
          ? setPokemonData(preData => preData.concat(res.data.results))
          : setPokemonData(res.data.results)
        setLoading(false)
        setIsError(false)
      })
      .catch(setIsError(true))
  }

  const getPokemonTotalCount = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        setPokemonCount(res.data.count)
        setLoading(false)
        setIsError(false)
      })
      .catch(setIsError(true))
  }

  const [observe, unobserve] = useIntersectionObserver(() => {
    setOffset(prev => prev + 20)
  })

  useEffect(() => {
    getPokemonTotalCount()
    getPokemonData()
  }, [])

  useEffect(() => {
    if (offset < pokemonCount) observe(target.current)
    if (pokemonCount > 0 && pokemonCount <= offset) unobserve(target.current)
  }, [pokemonData])

  useEffect(() => {
    if (offset) getPokemonData()
  }, [offset])

  return (
    <PokemonStyle>
      {pokemonData?.map((data, index) => (
        <Card key={index} data={data} />
      ))}
      <div ref={target} style={{width: '100%', height: 30}} />
    </PokemonStyle>
  )
}

export default Pokemon

const PokemonStyle = styled.div`
  margin-top: 200px;
`
