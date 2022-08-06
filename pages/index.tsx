import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { MenuElement } from '@components'
import { IProduct } from '@interfaces'

const data: IProduct[] = [

]

const Home: NextPage = () => {
    const [fetchedData, setFetchedData] = useState<any[]>([])

    const fetchData = () =>
    {
        fetch('/api/staticdata',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        // .then(res => console.log(res))
        .then(res => res.json())
        .then(data => 
        {
            const parsedData = JSON.parse(data).data
            setFetchedData(parsedData)
        })
    }

    useEffect(() =>
    {
        fetchData()
    }, [])

    return (
        <>
            <Head>
            <title>Burger King Remastered</title>
            </Head>
            {
                fetchedData?.map((product) =>
                (
                    <MenuElement product={product}/>
                ))
            }
        </>
    )
}

export default Home
