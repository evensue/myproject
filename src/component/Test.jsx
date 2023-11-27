/**@jsxImportSource @emotion/react*/
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const Test = () => {
  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgColor = isScroll ? 'white' : 'black';
  const color = isScroll ? 'black' : 'white';
  const box = css`
        width: 100vw;
        height:50px;
        background-color: ${bgColor};
        color: ${color};
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
          :hover {
            background-color: white;
            color: black;
          }
        `
  const listbox = css`
        width:70%;
        display: flex;
        
        justify-content: space-between;
      `
  const content = css`
        width: 100%;
        height: 500px;
        background-color: white;
        color: black;
        position: relative;
        animation-name: example;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        display: flex;
          
      
      
        @keyframes example {
          0% {
            top: 50px;
            opacity: 0;
          }
          100% {
            top: 50px;
            opacity: 1;
          }
        }
      `
  const list = css`
        cursor: pointer;
        height:50px;
        display: flex;
        
        align-items: center; 
        div{
        margin: 0 20px ;
      }
      `
  const login = css`
        display: flex;
        justify-content: flex-end;
      `
  const contentLeft=css`
        background-color:	#F0F0F0 ;
        width:20%;
        text-align: center;
        ul{
          list-style-type: none;
          li{
            margin: 50px 0;
          }
        }
       
      `
  const contentRight=css`
        background-color:  white ;
        width:80%;
      `
  return (
    <>
      <div css={box} >
        <div css={listbox}>
          <div css={list}>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Home</div>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>產品</div>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>解決方案</div>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>體驗APP</div>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>價格</div>
          </div>
          <div css={login}>
            <div >sign in</div>
            <div>login</div>
          </div>
        </div>
      </div>
      {isHover && (
        <div css={content} >
          <div css={contentLeft}>
            <ul>
              <li><a href='#'>全部產品</a></li>
              <li>精選推薦</li>
              <li>通訊服務</li>
              <li>Meta元宇宙</li>
              <li>擴展服務</li>
            </ul>
          </div>
          <div css={contentRight}>
           456
          </div>
        </div>
      )}
    </>)
}


export default Test;
