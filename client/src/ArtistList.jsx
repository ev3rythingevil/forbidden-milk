import {Link} from 'react-router-dom'


function ArtistList({results}){

return(
    <>
    {results.map(a => <Link to={`/artists/${a.id}`}>{a.name}</Link>)}
    </>
)
}

export default ArtistList