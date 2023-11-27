/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineStar, AiOutlineHeart, AiOutlineSmile } from 'react-icons/ai'; // 导入不同的图标
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';


const Slider = () => {
    
    const [selectedButton, setSelectedButton] = useState(1);
    const content = [
        { id: 1, text: <Tab1 /> },
        { id: 2, text: <Tab2 /> },
        { id: 3, text: <Tab3 /> },
        { id: 4, text: <Tab4 /> },
        { id: 5, text: <Tab5 /> },
    ];
    
    const buttonData = [
        { icon: <AiOutlineCheckCircle />, text: '個性虛擬影像' },
        { icon: <AiOutlineStar />, text: '實時表情互動' },
        { icon: <AiOutlineHeart />, text: '手勢識別' },
        { icon: <AiOutlineSmile />, text: '肢體隨動' },
        { icon: <AiOutlineCheckCircle />, text: '無感延遲' },
    ];

    const handleButtonSelect = (index) => {
        setSelectedButton(index);
    };
    const classroomScene=css`
    @media screen and (max-width: 1440px){
        margin: 0 auto;
    padding-bottom: 1.771vw;
       }
       @media screen and (max-width: 750px){
        display: none;
       }
       
       
    `
    const buttonStyle = css`
  
    display: flex;
    flex-direction: column;
    width: 260px;
    transform: unset;
    margin-right: 50px;
    margin-top: 0;
    @media screen and (max-width: 1440px){
        display: block;
    width: 13.542vw; 
    margin-right: 2.604vw;
    margin-top: 6.25vw;
    }
    @media screen and (max-width: 750px){
        height: 0.8rem;
    margin-bottom: 0.6rem;
    width: 100%;
    padding-left: 0.32rem;
    padding-right: 0.32rem;
    position: relative;
    display: flex;
    transform: unset;
    margin-right: 2.604vw;
    margin-top: 6.25vw;
    }
    
   

    /* 选中按钮的样式 */
   
        
  `
    const buttonContent = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    width: 260px;
    height: 80px;
    padding: 20px 0 20px 35px;
    margin: 0 0 28px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #343864;
    background-color: rgba(133,107,255,.1);
    color:white;
    position: relative;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
    cursor: pointer;
    :hover{
        background: rgba(179, 163, 243, 0.2);
    }
    @media screen and (max-width: 1440px){
        width: 13.542vw;
    height: 4.167vw;
    padding: 1.042vw 0 1.042vw 1.823vw;
    margin-bottom: 1.458vw;
    text-align: center;
    position: relative;
    display: inline-flex;
    justify-self: start;
    -webkit-box-align: center;
    align-items: center;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
    }
    @media screen and (max-width: 750px){
    font-size: .28rem;
    font-weight: 600;
    color:white;
    line-height: .4rem;
    vertical-align: middle;
    white-space: nowrap;  
    max-width: 2.56rem;
    width: auto;
    padding: 0 0.44rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 0.8rem;
    border-radius: 0.16rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    margin: 0 0.24rem 0 0;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    
    }
    

    
  `
    const contentContainer = css`
    
    width: 100%;
    height: 746px;
    position: relative;
    overflow: hidden; /* 隐藏超出容器部分 */
    transition-duration: 300ms;
    transform: translateZ(0);
    @media screen and (max-width: 1440px){
        height: 38.854vw;
    -webkit-box-flex: 1;
    flex: 1;
    }
    @media screen and (max-width: 750px){
        height: auto;
        padding: 0 0.32rem; 
    }
    

  `

    const container = css`
    display:flex;
    flex-direction: row;
    width:1440px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 0;
    overflow: inherit;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 300ms;
    transition-property: opacity;
    @media screen and (max-width: 1440px){
        display: flex;
        flex-direction: row;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal; 
    width: 75vw;
    overflow: inherit;
    
    }
  `
    const icon = css`
    align-items: center;
    font-size: 40px;
    display: block;
    width: 40px;
    height: 50px;
    position: relative;
    margin-right: 18px;
    @media screen and (max-width: 1440px){
        background-position: 0 0;
        font-size:  2.167vw;
        display: block;
    width: 2.083vw;
    height: 2.083vw;
    position: relative;
    margin-right: 0.9375vw;
    
    }
    @media screen and (max-width: 750px){
        display:none;
    }
    
  `

  
  const contentBox=css`
    
    border-radius: 20px;
    border: 1px solid #343864;
    background: rgba(133,107,255,.1);
    color:white;   
    background-position: 140px 210px;
    background-size: 468px 570px;
    height: 518px;
    width: 1130px;
  
    padding: 70px 0 0 80px;
    @media screen and (max-width: 1440px){
        background: rgba(133,107,255,.1) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_microphone.png) no-repeat;
    background-size: 24.375vw 29.6875vw;
    background-position: 7.292vw 10.9375vw;
    border-radius: 1.042vw;
    border: 0.052vw solid #343864;  
    display: flex;
    padding: 3.646vw 0 0 4.167vw;
    width: 58.854vw;
    height: 26.979vw;
    margin-top: 6.25vw;
    position: relative;
    }
    
   
  `
  const contentStyle=css`
    margin-top: 0;
    max-width: 500px;
    display: inline-block;
    text-align: left;
   
    
   
    
  `
  const mclassroomscencewrap=css`
    display:none;
    @media screen and (max-width: 750px){
        display: block;
    }
  `
  const avatarlistscence=css`
    margin: 0 auto;
    padding-bottom: 34px;
    @media screen and (max-width: 1440px){
        padding-bottom: 1.771vw;
    }
    @media screen and (max-width: 750px){
        margin: auto;
    position: relative;
    width: 100%;
    }
    
  `
  const mclassroomscencewrapper=css`
  @media screen and (max-width: 750px){
    display: block;
  }
    
  `

  const mbuttonStyle=css`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    @media screen and (max-width: 750px){
        transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
   
    overflow: auto;
        height: 0.8rem;
    margin-bottom: 0.6rem;
    width: 100%;
    padding-left: 0.32rem;
    padding-right: 0.32rem;  
    position: relative;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    }
  `
  const buttontext=css`
   
   @media screen and (max-width: 1440px){
    
    font-size: 1.146vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    line-height: 1.5625vw;
    width: fit-content;
   }
   @media screen and (max-width: 750px){
    font-size: .28rem;
    font-weight: 600;
   
    line-height: .4rem;
    vertical-align: middle;
    white-space: nowrap;
    height: 0.4rem;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
   }
  `
  const wrapper=css`
    @media screen and (max-width: 750px){
        transform: translate3d(0px, 0px, 0px);
        width: auto;
    -webkit-box-align: start;
    align-items: flex-start;
    flex-wrap: nowrap; 
    
    
    }
  `
  const wrapcontainer=css`
  margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    @media screen and (max-width: 750px){
        margin-top: 0; 
    }
  `
  const scenebanner=css`
  @media screen and (max-width: 750px){
    width: 6.84rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  `
 


    return (
        <>
        <div css={classroomScene}>
            <div css={container}>
                <div css={buttonStyle}>
                    {buttonData.map((button, index) => (
                        <button
                            key={index}
                            css={css`
                        ${buttonContent}; /* 应用共享按钮样式 */
                    `}
                            className={selectedButton === index + 1 ? 'active' : ''}
                            onClick={() => handleButtonSelect(index + 1)}
                        >
                            <span css={icon}>{button.icon}</span>
                            <span css={buttontext}>{button.text}</span>
                        </button>
                    ))}
                </div>
                <div css={contentContainer}
                >
                    <div css={contentBox}>
                    <div css={contentStyle}>{content[selectedButton - 1].text}</div>
                    </div>
                </div>
            </div>
        </div>
        <div css={mclassroomscencewrap}>
            
            
                <div css={avatarlistscence}>
                    <div css={mclassroomscencewrapper}>
                        <div css={mbuttonStyle}>
                            {buttonData.map((button, index) => (
                                <button
                                    key={index}
                                    css={css`
                                ${buttonContent}; /* 应用共享按钮样式 */
                            `}
                                    className={selectedButton === index + 1 ? 'active' : ''}
                                    onClick={() => handleButtonSelect(index + 1)}
                                >
                                    <span css={icon}>{button.icon}</span>
                                    <span css={buttontext}>{button.text}</span>
                                </button>
                            ))}
                        </div> 

                        <div css={wrapcontainer}>
                            <div css={wrapper}>
                                <section css={contentContainer}>
                                    
                                        <div css={scenebanner}>
                                           
                                               {content[selectedButton - 1].text}
                                            
                                        </div>
                                    
                                </section>  
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        </>

    );
};

export default Slider;
