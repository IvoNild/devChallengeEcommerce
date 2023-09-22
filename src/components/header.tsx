"use client"

import {styled} from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"

const SairaStencil = Saira_Stencil_One({ 
  weight: ['400',],
  subsets: ['latin'] })

interface HeaderProps{
}

const TagHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 160px;

    >div{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:24px;
    }
`

const Logo = styled.a`
    font-weight:400;
    font-size:40px;
    line-height:150%;
    color:var(--logo-color);
`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Logo className={SairaStencil.className}>E-commerce</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Procura por algo específico?" />
                <CartControl />                
            </div>
        </TagHeader>
    )
}

