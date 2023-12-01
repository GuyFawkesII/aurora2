import React from 'react'
import styled from "styled-components";
import Link from 'next/link'
import {splash} from '../data/home'
import Image from 'next/image';
import { useRouter } from 'next/router';
// import logo from "../../assets/logo-min.png";
const Logo = styled.a`
  color : #6caaff;
  width  : auto;
  padding-top : 18px
`
const Brand = (props) => {
  const {backgroundTransparacy,copy,isMobileView,center} = props
  const logoRatio = 490/100
  function getLogoDimentions(){
    const width = typeof isMobileView !== 'undefined' && isMobileView ? 200 : 200 
    return {
      width : width,
      height : width/logoRatio
    }
  }
  const width = getLogoDimentions().width
  const height = getLogoDimentions().height
  const router = useRouter()
  return (
    <label
      className='logo'
      style={{
        // padding : isMobileView ? "22px 71px 22px 3px" : undefined
        // padding : center ? "22px 0px 22px 3px" : "22px 71px 22px 3px"
      }}
      onClick={()=>router.push('/')}
    >
      <Logo
        // href="/"
        onClick={()=>router.push('/')}
      >
          <Image 
            src="/logo.png"
            alt="logo"
            // layout="fill"
            height={`${height}px`}
            width={`${width}px`}
          />
      </Logo>
    </label>
    )
}
export default Brand