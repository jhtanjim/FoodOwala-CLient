
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';

const useCarts = () => {


    const { user } = useContext(AuthContext)


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://food-owala-server.vercel.app/carts?email=${user?.email}`)
            return res.json()
        },
    })

    return [cart, refetch]

};

export default useCarts;