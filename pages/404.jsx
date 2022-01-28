import React from "react"
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from   'next/router'


export default function NotFound(){
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])
    return (
        <div>
            <h1>Página não encontrada</h1>
            <h2>ERROR 404</h2>
            <Link href={'/'}>
                <a>go to home page</a>
            </Link>
        </div>
    )

}

