import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { navData } from "../../static/NavData"

export default function Header() {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <img src="/images/icons/SampleLogo.svg" />
          {navData.map((item, index) => (
            <>
              <Link style={{ paddingLeft: "1rem" }} to={item.link} key={index}>
                {item.title}
              </Link>
            </>
          ))}
        </MenuWrapper>
        <ButtonWrapper>
          <ButtonOne>Log in</ButtonOne>
          <ButtonTwo>Register</ButtonTwo>
        </ButtonWrapper>
      </Wrapper>
      <ImgWrapper>
        <img src="/images/icons/Hero.svg" />
      </ImgWrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: auto;
  height: 32px;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MenuWrapper = styled.div`
  display: flex;
  /* gap: 30px; */
  align-items: center;
  /* justify-content: space-around; */
  /* grid-template-columns: repeat(4, auto); */
  justify-content: space-between;
  color: #18a0fb;
`
const ButtonWrapper = styled.div`
  gap: 20px;
  display: flex;
  padding: 20px;
  margin: 20px;
`

const ButtonOne = styled.button`
  border: 2px solid #18a0fb;
  color: #18a0fb;
  background-color: white;
  width: 130px;
  height: 40px;
  left: 1328px;
  top: 10px;
  border-radius: 6px;
  cursor: pointer;
`
const ButtonTwo = styled.button`
  border: 2px solid #18a0fb;
  color: white;
  background-color: #18a0fb;
  width: 130px;
  height: 40px;
  left: 1328px;
  top: 10px;
  border-radius: 6px;
  cursor: pointer;
`
const ImgWrapper = styled.div``
