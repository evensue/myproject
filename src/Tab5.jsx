/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React from 'react'

const Tab3 = () => {
    const title=css`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`
const connect=css`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`
const content=css`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`
const photo=css`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`
const contentStyle=css`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `
    const mimg=css`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `
 
  return (
    <>
            <div css={contentStyle}>
            <div css={title}>
                無感延遲
            </div>
            <div css={content}>
                超低時延，時延低于 300ms，提升實時互動玩法體驗
            </div>
            
            </div>
                <div css={mimg}><img css={photo} src='https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic5.png'/></div>
                <div css={connect}>
                <div>免費試用</div>
                <div>方案諮詢</div>
            </div>
            
    </>
  )
}

export default Tab3