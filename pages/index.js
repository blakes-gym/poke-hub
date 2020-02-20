import fetch from 'isomorphic-unfetch'
import Gradient from '../components/Gradient'
import Type from '../components/Type'

export default function Index({ pokemon }) {
  return (
    <div>
      {pokemon.map(pokemon => (
        <div
          className="border-bottom border-secondary"
          key={` pokemon-${pokemon.number}`}
        >
          <Gradient
            pokemon={pokemon}
            opacity={'7'}
            className="d-flex align-items-center"
          >
            <div className="pl-3">
              <strong>{pokemon.number}</strong>
            </div>
            <div
              className="py-2 d-flex justify-content-center"
              style={{ width: 100 }}
            >
              <img src={pokemon.icon} style={{ width: 'auto', height: 50 }} />
            </div>
            <div
              className="border border-dark bg-white"
              style={{ lineHeight: 1, padding: 5, fontSize: 14 }}
            >
              {pokemon.name}
            </div>
            <div className="ml-auto mr-1 text-center" style={{ width: 65 }}>
              <Type type={pokemon.type1} />
              {pokemon.type2 && <Type type={pokemon.type2} />}
            </div>
          </Gradient>
        </div>
      ))}
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch(process.env.SERVER + '/pokemon')
  const json = await res.json()
  return {
    pokemon: json
  }
}
