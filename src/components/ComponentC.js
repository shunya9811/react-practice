import　{useContext} from 'react'
import { UserCount } from '../App'

const ComponentC = () => {
    const count = useContext(UserCount)
    return (
        <div>
            <p>Componet C</p>
            <p>{ count }</p>

            <UserCount.Consumer>
                {(count) => {
                    return <p>{count}</p>;
                }}
            </UserCount.Consumer>
        </div>
    )
}

export default ComponentC