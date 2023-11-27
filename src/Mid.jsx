/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React, { useState } from 'react'

const Mid = () => {
    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    const [isHover5, setIsHover5] = useState(false);
    const [isHover6, setIsHover6] = useState(false);

    const resetAllHoverStates = () => {
        setIsHover(false);
        setIsHover2(false);
        setIsHover3(false);
        setIsHover4(false);
        setIsHover5(false);
        setIsHover6(false);
      };

      const handleItemClick = (itemNumber) => {
        resetAllHoverStates();
    
        // Set the clicked item's state to true
        switch (itemNumber) {
          case 1:
            setIsHover(true);
            break;
          case 2:
            setIsHover2(true);
            break;
          case 3:
            setIsHover3(true);
            break;
          case 4:
            setIsHover4(true);
            break;
          case 5:
            setIsHover5(true);
            break;
          case 6:
            setIsHover6(true);
            break;
          default:
            break;
        }
      };

    const container = css`
        height: 100%;
        width: 100%;
        background: url(https://www.zego.im/_nuxt/img/a18a38f.jpg) no-repeat 50%;
        background-size: cover;
        overflow-y: hidden;
        @media screen and (max-width: 1440px){
            height: 100%;
    width: 100%;
    background: url(https://www.zego.im/_nuxt/img/a18a38f.jpg) no-repeat 50%;
    background-size: cover;
    overflow-y: hidden;
        }
    `
    const content = css`
        display: flex;
        flex-direction: row;
        max-width: 1440px;
        margin: 0 auto;
        height: 100%;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
            max-width: 75vw;
    margin: 0 auto;
    height: 100%;
        }
        @media screen and (max-width: 750px){
            display: none;  
        }
        
    `
    const left = css`
        margin-top: 137px;
        margin-right: 50px;
        @media screen and (max-width: 1440px){
            margin-top: 7.135vw;
    margin-right: auto; 
        }
    `
    const title = css`
        font-size: 40px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 64px;
        @media screen and (max-width: 1440px){
            font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 3.333vw; 
        }
    `
    const right = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1110px;
        height: 100%;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 57.8125vw;
    height: 100%; 
        }
    `
    const items = css`
        height: 100%;
        display: flex;
        flex-direction: column;
    `
    const item = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover ? '84%' : '50%'} ;
        background: ${isHover ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_interactive.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover? '100%' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover ? '84%' : '50%'} ;
            background: ${isHover ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_interactive.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const item2 = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover2 ? '84%' : '50%'} ;
        background: ${isHover2 ? 'url(https://www.zego.im/_nuxt/img/40da607.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover2 ? 'cover' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover2 ? '84%' : '50%'} ;
            background: ${isHover2 ? 'url(https://www.zego.im/_nuxt/img/40da607.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover2? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const item3 = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover3 ? '84%' : '50%'} ;
        background: ${isHover3 ? 'url(https://www.zego.im/_nuxt/img/0127701.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover3 ? 'cover' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover3 ? '84%' : '50%'} ;
            background: ${isHover3 ? 'url(https://www.zego.im/_nuxt/img/0127701.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover3? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const item4 = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover4 ? '84%' : '50%'} ;
        background: ${isHover4 ? 'url(https://www.zego.im/_nuxt/img/190f8d2.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover4 ? 'cover' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover4 ? '84%' : '50%'} ;
            background: ${isHover4 ? 'url(https://www.zego.im/_nuxt/img/190f8d2.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover4? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const item5 = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover5 ? '84%' : '50%'} ;
        background: ${isHover5 ? 'url(https://www.zego.im/_nuxt/img/04c508c.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover5 ? 'cover' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover5 ? '84%' : '50%'} ;
            background: ${isHover5 ? 'url(https://www.zego.im/_nuxt/img/04c508c.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover5? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const item6 = css`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${isHover6 ? '84%' : '50%'} ;
        background: ${isHover6 ? 'url(https://www.zego.im/_nuxt/img/9e01af7.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
        background-size:${isHover6 ? 'cover' : 'auto'};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${isHover6 ? '84%' : '50%'} ;
            background: ${isHover6 ? 'url(https://www.zego.im/_nuxt/img/9e01af7.png) no-repeat' : 'hsla(0,0%,100%,.05)'}  ;
            background-size:${isHover6? '100%' : 'auto'};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `
    const itemTitle = css`
        font-size: 50px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 46px;
        margin-bottom: 45px;
        display:block ;
        @media screen and (max-width: 1440px){
            font-size: 2.604vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.396vw;
    margin-bottom: 2.34375vw;
    display: block;
        }
    `
    const itemContent = css`
        color: #fff;
        max-width: 270px;
        font-size: 20px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        line-height: 30px;
        @media screen and (max-width: 1440px){
            max-width: 14.0625vw;
    font-size: 1.042vw;
    font-weight: 400;
    line-height: 1.5625vw;
        }
    `
    const titleHover = css`
        display: block;
        font-size: 46px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 60px;
        margin-bottom: 28px;
        @media screen and (max-width: 1440px){
            display: block;
            font-size: 2.396vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 3.125vw;
    margin-bottom: 1.458vw;
        }
    `
    const mcontent = css`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
        }
    `
    const mleft=css`
        @media screen and (max-width: 750px){
            padding: 1.2rem 0 0.6rem;
        }
    `
    const mright=css`
        @media screen and (max-width: 750px){
            padding-bottom: 1.2rem;
        }
    `
    const mbodytitle=css`
        @media screen and (max-width: 750px){
            text-align: center;
    font-size: .56rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .9rem;
        }
    `
    const mwordlinewrap=css`
    display: none;
        @media screen and (max-width: 750px){
            display: block; 
        }
    `
    const productapism=css`
        @media screen and (max-width: 750px){
            max-width: 6.86rem;
    margin: 0 auto;
        }
    `
    const elcollapse=css`
        border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
    @media screen and (max-width: 750px){
        display: flex;
    flex-wrap: wrap;
    border-top: unset;
    border-bottom: unset;
    }
    `
    const elcollapseitem=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitem2=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover2 ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover2 ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitem3=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover3 ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover3 ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitem4=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover4 ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover4 ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitem5=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover5 ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover5 ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitem6=css`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${isHover6 ? 'url(https://www.zego.im/_nuxt/img/e47b3fd.png)' : 'hsla(0,0%,100%,.05)'} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${isHover6 ?  '2.36rem': '1.52rem'} ;
        }
    `
    const elcollapseitemheader=css`
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: 0;
    @media screen and (max-width: 750px){
        height: auto;
    background: 0 0;
    padding-left: 0.48rem;
    padding-top: 0.48rem;
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    border-bottom: unset;
    }
    `
    const bgicon2=css`
    @media screen and (max-width: 750px){
        background: ${isHover2 ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    background-position-x: -2.6rem;
    opacity: 1;
    transition: opacity .2s;
    transition-delay: .7s;
    width: 2.6rem;
    height: ${isHover2 ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;
    }
    `
    const bgicon3=css`
    @media screen and (max-width: 750px){
        background: ${isHover3 ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    background-position-x: -5.2rem;
    width: 2.6rem;
    height: ${isHover3 ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `
    const bgicon4=css`
    @media screen and (max-width: 750px){
        background: ${isHover4 ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    background-position-x: -7.8rem;
    width: 2.6rem;
    height: ${isHover4 ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `
    const bgicon5=css`
    @media screen and (max-width: 750px){
        background: ${isHover5 ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    background-position-x: -10.4rem;
    width: 2.6rem;
    height: ${isHover5 ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `
    const bgicon6=css`
    @media screen and (max-width: 750px){
        background: ${isHover6 ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    background-position-x: -13rem;
    width: 2.6rem;
    height: ${isHover6 ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `
    const bgicon=css`
    @media screen and (max-width: 750px){
        background: ${isHover ? 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)' : 'url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)'} no-repeat;
    background-size: cover;
    width: 2.6rem;
    height: ${isHover ? '2.36rem' : '1.5rem'};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `
    const mtitle=css`
      @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-align: center;
    align-items: center;
      }  
    `
    const mname=css`
        @media screen and (max-width: 750px){
            font-size: .36rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .56rem;
    text-align: left;
        }
    `
    const mdesc2=css`
    
       @media screen and (max-width: 750px){
        display:${isHover2 ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    const mdesc3=css`
    
       @media screen and (max-width: 750px){
        display:${isHover3 ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    const mdesc4=css`
    
       @media screen and (max-width: 750px){
        display:${isHover4 ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    const mdesc5=css`
    
       @media screen and (max-width: 750px){
        display:${isHover5 ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    const mdesc6=css`
    
       @media screen and (max-width: 750px){
        display:${isHover6 ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    const mdesc=css`
    
       @media screen and (max-width: 750px){
        display:${isHover ? 'block' : 'none'};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `
    
    return (
        <div css={container}>
            <div css={content}>
                <div css={left}>
                    <div css={title}>
                        <div>專業技術</div>
                        <div>保障高品質服務</div>
                    </div>
                </div>
                <div css={right}>
                    <div css={items}>
                        <div css={item}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}>
                            {isHover ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            豐富的虛擬形
                                        </div>
                                        <div>
                                            象互動玩法
                                        </div>
                                    </div>
                                    <div css={itemContent}> 多样化互动玩法，让虚拟形象能够更好地表达</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>可互動</div>
                                    <div css={itemContent}> 多样化互动玩法，让虚拟形象能够更好地表达</div>
                                </>
                            )}
                        </div>
                        <div css={item2}
                            onMouseEnter={() => setIsHover2(true)}
                            onMouseLeave={() => setIsHover2(false)}>
                            {isHover2 ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            全終端跨平台
                                        </div>
                                        <div>
                                            的完美適配
                                        </div>
                                    </div>
                                    <div css={itemContent}> 支持多種主流開發平台接入，深度兼容15000+終端設備</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>跨平台</div>
                                    <div css={itemContent}> 支持多種主流開發平台接入，深度兼容15000+終端設備</div>
                                </>
                            )}
                        </div>
                  </div>
                  <div css={items}>
                        <div css={item3}
                            onMouseEnter={() => setIsHover3(true)}
                            onMouseLeave={() => setIsHover3(false)}>
                            {isHover3 ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            齊全的美聲
                                        </div>
                                        <div>
                                            美顏應用插件
                                        </div>
                                    </div>
                                    <div css={itemContent}> 多样化插件应用，满足各类视频场景美颜美声特效需求</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>多插件</div>
                                    <div css={itemContent}> 多样化插件应用，满足各类视频场景美颜美声特效需求</div>
                                </>
                            )}
                        </div>
                        <div css={item4}
                            onMouseEnter={() => setIsHover4(true)}
                            onMouseLeave={() => setIsHover4(false)}>
                            {isHover4 ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            高可用全球
                                        </div>
                                        <div>
                                            實時傳輸網路
                                        </div>
                                    </div>
                                    <div css={itemContent}> 212个国家地区网络全覆盖，构建全球海量有序数据网络</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>覆全球</div>
                                    <div css={itemContent}> 212个国家地区网络全覆盖，构建全球海量有序数据网络</div>
                                </>
                            )}
                        </div>
                  </div>
                  <div css={items}>
                        <div css={item5}
                            onMouseEnter={() => setIsHover5(true)}
                            onMouseLeave={() => setIsHover5(false)}>
                            {isHover5 ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            超低延遲
                                        </div>
                                        <div>
                                            流暢通話
                                        </div>
                                    </div>
                                    <div css={itemContent}> 端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>低延遲</div>
                                    <div css={itemContent}> 端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话</div>
                                </>
                            )}
                        </div>
                        <div css={item6}
                            onMouseEnter={() => setIsHover6(true)}
                            onMouseLeave={() => setIsHover6(false)}>
                            {isHover6 ? (
                                <>
                                    <div css={titleHover}>
                                        <div>
                                            完善的運營
                                        </div>
                                        <div>
                                            跟蹤體系
                                        </div>
                                    </div>
                                    <div css={itemContent}> 星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应</div>
                                </>
                            ) : (
                                <>
                                    <div css={itemTitle}>助運營</div>
                                    <div css={itemContent}> 星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应</div>
                                </>
                            )}
                        </div>
                  </div>
                </div>
            </div>
            <div css={mcontent}>
                <div css={mleft}>
                    <div css={mbodytitle}>
                        <div css={mwordlinewrap}>
                            <div>
                                <div>專業技術</div>
                                <div>保障高品質服務</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={mright}>
                    <div css={productapism}>
                        <div>
                            <div css={elcollapse} role='tablist' aria-multiselectable='true'>
                                <div css={elcollapseitem}
                                onClick={()=>handleItemClick(1)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>豐富的虛擬形象互動玩法</div>
                                            </div>
                                            <div css={mdesc}>多樣化互動玩法，讓虛擬形象能夠更好地表達自我</div>
                                        </div>
                                    </div>
                                </div>
                                <div css={elcollapseitem2}
                                onClick={()=>handleItemClick(2)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon2}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>齊全的美聲美顏應用插件</div>
                                            </div>
                                            <div css={mdesc2}>多样化插件应用，满足各类视频场景美颜美声特效需求</div>
                                        </div>
                                    </div>
                                </div>
                                <div css={elcollapseitem3}
                                onClick={()=>handleItemClick(3)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon3}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>超低延遲，流暢通話</div>
                                            </div>
                                            <div css={mdesc3}>端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话</div>
                                        </div>
                                    </div>
                                </div>
                                <div css={elcollapseitem4}
                                onClick={()=>handleItemClick(4)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon4}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>全終端跨平台的完美適配</div>
                                            </div>
                                            <div css={mdesc4}>支持多種主流開發平台接入，深度兼容15000+終端設備</div>
                                        </div>
                                    </div>
                                </div>
                                <div css={elcollapseitem5}
                                onClick={()=>handleItemClick(5)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon5}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>高可用全球實時傳輸網路</div>
                                            </div>
                                            <div css={mdesc5}>212个国家地区网络全覆盖，构建全球海量有序数据网络</div>
                                        </div>
                                    </div>
                                </div>
                                <div css={elcollapseitem6}
                                onClick={()=>handleItemClick(6)}>
                                    <div role='tab' aria-controls='elcollapsecontent5411' aria-describedby='elcollapsecontent5411'>
                                        <div css={elcollapseitemheader} role='button' id='elcollapsehead5411' aria-expanded='false' tabIndex={0}>
                                            <div css={bgicon6}></div>
                                            <div css={mtitle}>
                                                <div css={mname}>完善的運營跟蹤體系</div>
                                            </div>
                                            <div css={mdesc6}>星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mid