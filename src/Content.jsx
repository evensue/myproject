/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React, { useState,Component } from 'react'
import Slider from "react-slick";
import AppendDots from './Dots';
import Solution from './Solution';
import Mid from './Mid';
import Conform from './Conform';




const Content = () => {
    
    const solution=css`
       
       background-color:#0e041e ;
       @media screen and (max-width: 1440px){
        background-color: #0e041e;
       }
       @media screen and (max-width: 750px){
        margin-top: 0;
       }
       
        
    `
    const audioBanner=css`
        padding-top: 64px;
        height: 840px;
        position: relative;
        @media screen and (max-width: 1440px){
        
        background-size: auto 100%;
        padding-top: 3.333vw;
        height: 43.75vw;
            position: relative;
           }
        @media screen and (max-width: 750px){
        background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_img_live_banner.jpg) no-repeat;
        background-size: 100% auto;
        background-position: 100% 100%;
        padding-top: 0;
        height: 9.9rem;
        width: 100%;
       
       }
       
    `
    const commonBanner=css`
        max-width: 1920px;
        margin: 0 auto;
        padding-top: 130px;
        position: relative;
        @media screen and (max-width: 1440px){
            max-width: 100vw;
    margin: 0 auto;
    padding-top: 6.771vw;  
        }
        @media screen and (max-width: 750px){
        max-width: 7.5rem;
        margin: 0 auto;
        padding-top: 0.84rem;
        position: relative;
        padding-left: 0.32rem;
        background-size: auto 9.9rem;
        }
        
        
    `
    const commonLeft=css`
        position: relative;
        z-index: 4;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            max-width: 75vw;
    margin: 0 auto;
        }
        @media screen and (max-width: 750px){
            max-width: 7.5rem; 
            margin: 0 auto;
          
        }
        
        
    `
    const audioBroadcast=css`
        display: block;
        width: max-content;
        height: 38px;
        background: linear-gradient(180deg,#fffefd,#fcf0e4);
        box-shadow: inset -1px -1px 1px 0 #ffd3a7;
        border-radius: 0 19px 19px 0;
        font-size: 16px;
        font-weight: 600;
        color: #f14a23;
        line-height: 22px;
        padding: 8px 29px 8px 56px;
        margin-bottom: 30px;
        position: relative;
        @media screen and (max-width: 1440px){
            display: block;
        width: max-content;
        height: 1.979vw; 
        background: linear-gradient(180deg,#fffefd,#fcf0e4);
        box-shadow: inset -0.052vw -0.052vw 0.052vw 0 #ffd3a7;
        border-radius: 0 0.99vw 0.99vw 0;
        font-size: .833vw;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #f14a23;
        line-height: 1.146vw;
        padding: 0.417vw 1.51vw 0.417vw 2.917vw;
        margin-bottom: 1.5625vw;
        position: relative; 
        }
        @media screen and (max-width: 750px){
        display: none; 
        
        }
        
    `
    const iconActivity=css`
        position: absolute;
        top: -30px;
        left: -20px;
        width: 68px;
        height: auto;
        @media screen and (max-width: 1440px){
        position: absolute;
        top: -1.5625vw;
        left: -1.042vw;
        width: 3.542vw;
        height: auto;
        }
    `
    const commonTitle=css`
        width: max-content;
        font-size: 80px;
        font-weight: 600;
        color: #fff; 
        letter-spacing: 2px;
        margin-bottom: 20px;
        line-height: 112px;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: 4.167vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    letter-spacing: .104vw;
    margin-bottom: 1.042vw;
    line-height: 5.833vw;
        }
        @media screen and (max-width: 750px){
        font-size: .72rem;
        font-family: PingFangSC-Semibold,PingFang SC;
        color: #fff;
        line-height: .72rem;
        margin-bottom: 0.4rem; 
        
        }
        
    `
    const commonDesc=css`
        max-width: 623px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 500;
        color: hsla(0,0%,100%,.9);
        line-height: 30px;
        @media screen and (max-width: 1440px){
            max-width: 30.156vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.9);
    line-height: 1.5625vw;   
        }
        @media screen and (max-width: 750px){
        font-size: .32rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: .48rem;
        max-width: 6.24rem!important;
        }
       
        
    `
    const tags=css`
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 1.5625vw;
        }
        @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        margin-top: 0.36rem;
        }
        
        
    `
    const tagItem=css`
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 20px;
        padding: 4px 8px;
        margin-right: 8px;
        background: hsla(0,0%,100%,.1);
        border-radius: 2px;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.042vw;
    padding: 0.208vw 0.417vw;
    margin-right: 0.417vw;
    background: hsla(0,0%,100%,.1);
    border-radius: 0.104vw; 
        }
        @media screen and (max-width: 750px){
        padding: 0.06rem 0.12rem;
        font-size: .2rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: .28rem;
        margin-right: 0.12rem;
        background: hsla(0,0%,100%,.1);
        border-radius: 0.04rem;  
        }
        
    `
    const btn=css`
        margin-top: 54px;
        @media screen and (max-width: 1440px){
            margin-top: 2.8125vw;
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 750px){
            margin-top: 0.58rem;
            display: flex;
            flex-direction: row;
        }
    `
    const btnItem=css`
        color: #28292e;
        box-shadow: none;
        
        :first-of-type{
        width: 146px;
        height: 48px;
        background: hsla(0,0%,100%,.9);
        border-radius: 28px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 7px;
        }
        :nth-of-type(2){
        width: 146px;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        @media screen and (max-width: 1440px){
            :first-of-type{
        color: #28292e;
        box-shadow: none;
        width: 7.604vw;
    height: 2.5vw;
    background: hsla(0,0%,100%,.9);
    border-radius: 1.458vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.365vw;}
    :nth-of-type(2){
        width: 7.604vw;
    height: 2.5vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    }
    position: relative;
        }
        @media screen and (max-width: 750px){
        :first-of-type{
            width: 2.56rem;
    height: 0.8rem;
    background: #fff;
    border-radius: 0.56rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .34rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0;
        }
        :nth-of-type(2){
            width: 2.5rem;
    height: 0.8rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .34rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        }
    `
    const commonRight=css`
        width: 1209px;
        position: absolute;
        top: 14px;
        right: 0;
        height: 840px;
        @media screen and (max-width: 1440px){
        width: 62.969vw;
        height: 43.75vw;
        position: absolute;
        top: -3.33vw;
        right: 0; 
        }
        @media screen and (max-width: 750px){
            display: none;
        }
    `
    const img=css`
        width: 861px;
        position: absolute;
        top: 0;
        right: 0;
        height: 840px;
        @media screen and (max-width: 1440px){
            width: 62.969vw; 
            height: 43.75vw;
            
        }
    `
    const apis=css`
        background-color: #0e041e;
        @media screen and (max-width: 1440px){
            background: #0e041e;
        }
        @media screen and (max-width: 750px){
            height: 16.4rem; 
        }
        
        `
    const apisTitle=css`
        font-size: 40px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 56px;
        padding-top: 100px;
        padding-bottom: 13px;
        text-align: center;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.917vw;
    padding-top: 5.208vw;
    padding-bottom: 0.677vw;
    text-align: center;
    position: relative;
    z-index: 1;
    }
        
        @media screen and (max-width: 750px){
        font-size: .56rem;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: .9rem;
        padding-top: 1.2rem;
        padding-bottom: 0.6rem;
        }

    `
    const classroomScene=css`
     @media screen and (max-width: 1440px){
        padding-bottom: 1.771vw;
       }
       @media screen and (max-width: 750px){
        margin: auto;
        position: relative;
        width: 100%;
       }
      
        
    `
    const highQuality=css`
        height: 890px;
        @media screen and (max-width: 1440px){
            height: 46.354vw; 
        }
    `
    const conformWrapper=css`
        background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/xunizhibo-pc.png);
        background-size: cover;
        width: 100%;
        height: 660px;
        @media screen and (max-width: 1440px){
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/xunizhibo-pc.png);
    background-size: cover;
    width: 100%;
    height: 34.375vw;
        }
        @media screen and (max-width: 750px){
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_purple.jpg) no-repeat 50%;
    background-size: cover;
    width: 100%;
    height: auto;
        }
        
    `
    
    
  return (
    <>
    <div css={solution}>
        <div css={audioBanner}>
            <div css={commonBanner}>
                <div css={commonLeft}>
                    <a href='#' target='_blank' css={audioBroadcast} >
                        "暢享實時互動 全線產品1折起"
                        <img src='https://www.zego.im/_nuxt/img/e59189b.png' css={iconActivity}/>
                    </a>
                    <div css={commonTitle}>
                        <h1>虛擬直播</h1>
                    </div>
                    <div css={commonDesc}>
                        <h2>全新直播方式，虚擬形象替代真人出镜，打造不一樣的直播體驗，支持表情随動、手势識別觸發特效等多種玩法</h2>
                    </div>
                    <div css={tags}>
                        <span css={tagItem}>虛擬形象</span>
                        <span css={tagItem}>超低延遲</span>
                        <span css={tagItem}>實時互動</span>
                    </div>
                    <div css={btn}>
                        <div css={btnItem}>
                            免費試用
                            
                        </div>
                        <div css={btnItem}>
                            方案諮詢
                            
                        </div>
                    </div>
                </div>
                <div css={commonRight}>
                    <img src='src\1fcaea26-f886-411b-b522-a0f015891402 (1).png' css={img}/>
                </div>
            </div>
        </div>
        <div css={apis}>
            <div css={apisTitle}>方案優勢</div>
            <div css={classroomScene}>
                <AppendDots/>
            </div>
        </div>
        <div>
            <Solution/>
        </div>
        <div css={highQuality}>
            <Mid/>
        </div>
        <div css={conformWrapper}>
            <Conform/>
        </div>
    </div>
    </>
  )
}

export default Content