import {Link} from 'react-router-dom'


function ArtistList({results}){

return(
    <>
    {results.map(a => 
        <li>
        <Link to={`/artists/${a.id}`}>{a.name}</Link>
        </li>
        )}
    </>
)
}

export default ArtistList