import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef, ReactNode } from 'react'
import { MenuElement, Footer, Header } from '@components'
import { IProduct } from '@interfaces'

const data: IProduct[] = [

]

const Home: NextPage = () => {
    const [fetchedData, setFetchedData] = useState<any[]>([])
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
    const sectionsRef = useRef<Array<HTMLDivElement | null>>([])

    const fetchData = () =>
    {
        fetch('/api/staticdata',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
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

    useEffect(() =>
    {
        scrollTo(currentSectionIndex)
    }, [currentSectionIndex])

    const scrollTo = (index: number) =>
    {
        console.log(sectionsRef, currentSectionIndex)
        sectionsRef.current[index]?.scrollIntoView()
    }

    const handleMainClick = ():void =>
    {
        setCurrentSectionIndex(currentSectionIndex + 1)
    }

    return (
        <>
            <Head>
                <title>Burger King Remastered</title>
            </Head>
            <Header />
            <main onClick={handleMainClick} >
                {
                    fetchedData?.map((product, index) =>
                    (
                        <MenuElement product={product} key={index} reff={(el: any) => sectionsRef.current[index] = el} />
                    ))
                }
            </main>
            <Footer />
        </>
    )
}

export default Home
