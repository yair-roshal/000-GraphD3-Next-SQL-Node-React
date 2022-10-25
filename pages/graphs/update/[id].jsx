import { UpdateGraph } from 'components/crudComponents'
import axios from 'axios'

export default UpdateGraph

export async function getServerSideProps({ params }) {
    let res = await axios.get(`http://localhost:5000/${params.id}`).catch(error => {
        console.log(error)
    })

    return {
        props: { ...res.data }[0],
    }
}
