import React from "react"
import styled from "styled-components"
import { bodyData } from "../../../static/BodyData"

export default function BodySection() {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img src="/images/icons/Rectangle.svg" />
        </ImageWrapper>
        <BodyWrapper>
          {bodyData.map((item, index) => (
            <TextWrapper>
              <h2 style={{ fontSize: "24px", fontWeight: "700" }} key={index}>
                {item.title}
              </h2>
              <p>{item.paragraph}</p>
            </TextWrapper>
          ))}
        </BodyWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`
const ImageWrapper = styled.div`
  width: 750px;
  /* height: 440px; */
  /* left: 80px; */
  /* top: 80px; */
  padding: 30px;
`
const BodyWrapper = styled.div`
  display: flex;
  width: 16px;
  padding: 5rem;
  margin: 20px;
  align-items: center;
  width: 686px;
  height: 36px;
  left: 914px;
  top: 225px;
`

const TextWrapper = styled.div`
  padding: 20px;
`
