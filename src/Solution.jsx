/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React, { useState } from 'react'

const Solution = () => {
    
    const [selectedTab, setSelectedTab] = useState('tab-first' );

      
    const handleTabClick = (tabId) => {
          setSelectedTab(tabId);
        };
    const container=css`
        background: #0e041e;
        padding: 100px 0;
        @media screen and (max-width: 1440px){
            background: #0e041e;
            padding: 5.208vw 0;
        }
        @media screen and (max-width: 750px){
            padding: 1.2rem 0 0;
            height: 13.6rem;

        }
        
    `
    const title=css`
        margin-bottom: 80px;
        font-size: 40px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 600;
        color: #28292e;
        line-height: 56px;
        text-align: center;
        color: #fff;
        @media screen and (max-width: 1440px){
            margin-bottom: 4.167vw;
    font-size: 2.083vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    line-height: 2.917vw;
    text-align: center;
    color: #fff;
        }
        @media screen and (max-width: 750px){
            margin-bottom: 0.6rem;
    font-size: .56rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .9rem;
    text-align: center;
        }
        
       
    `
    const contentStyle=css`
        width: 1440px;
        background: rgba(133,107,255,.06);
        border-radius: 20px;
        border: 1px solid #343864;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            width: 75vw;
    background: rgba(133,107,255,.06);
    border-radius: 1.042vw;
    border: 0.052vw solid #343864; 
    margin: 0 auto;
        }
        @media screen and (max-width: 750px){
            width: 100%;
    max-width: 7.5rem;
    border: none;
    background: #0e041e;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
        }
        
    `
    const content=css`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
        
    `
    const contentLeft=css`
        padding: 42px 49px;
        @media screen and (max-width: 1440px){
            padding: 2.1875vw 2.552vw;
        }
    `
    const photo=css`
        width: 1120px;
        height: auto;
        @media screen and (max-width: 1440px){
            width: 58.333vw;
    height: auto;
        }
    `
    const contentRight=css`
        background: rgba(249,252,253,.05) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_product.png) no-repeat;
        background-size: 210px 500px;
        background-position-y: 224px;
        border-radius: 0 19px 19px 0;
        padding: 44px 0 0 36px;
        height: 726px;
        width: 220px;
        @media screen and (max-width: 1440px){
            background: rgba(249,252,253,.05) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_product.png) no-repeat;
    background-size: 10.9375vw 26.042vw;
    background-position-y: 11.667vw;
    border-radius: 0 0.99vw 0.99vw 0;
    padding-left: 1.875vw;
    padding: 2.292vw 0 0 1.719vw;
    height: 37.8125vw;
    width: 11.458vw;
        }
    `
    const relatedTitle=css`
        color: #737ac4;
        font-size: 14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 28px;
        @media screen and (max-width: 1440px){
            color: #737ac4;
            font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: 1.042vw;
    margin-bottom: 1.458vw;
        }
    `
    const items=css`
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        margin-bottom: 20px;
        @media screen and (max-width: 1440px){
            font-size: .9375vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    margin-bottom: 1.042vw;
        }
    `
    const item=css`
        color: #fff;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        line-height: 25px;
        text-decoration: none;
    outline: 0;
    box-shadow: none;
    outline-offset: 0;
    @media screen and (max-width: 1440px){
        color: #fff;
        font-size: .9375vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: 1.302vw;
    }
    `
    const mcontent=css`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    width: 7.5rem;
        }
    `
    const eltabstop=css`
        
    `
    const eltabsheader=css`
        padding: 0;
    position: relative;
    margin: 0 0 15px;
    @media screen and (max-width: 750px){
        background: hsla(0,0%,100%,.15);
        width: max-content;
    height: 0.92rem;
    border-radius: 0.54rem;
    margin: 0 auto;
    padding: 0.08rem;
    }
    `
    const eltabscontent=css`
        overflow: hidden;
    position: relative;
    `
    const eltabsnavwrap=css`
        overflow: hidden;
    margin-bottom: -1px;
    position: relative;
    @media screen and (max-width: 750px){
        height: 100%;
    width: 100%;
    }
    `
    const eltabsscroll=css`
        overflow: hidden;
        @media screen and (max-width: 750px){
            height: 100%;
            display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
        }
    `
    const eltabsnav=css`
        transform: translateX(0px);
        white-space: nowrap;
    position: relative;
    transition: transform .3s,-webkit-transform .3s;
    float: left;
    z-index: 2;
    @media screen and (max-width: 750px){
        height: 100%;
        display: flex;
    flex-direction: row;
    align-items: center;
    }
    `
    const eltabsactive=css`
        width: 123px;
    transform: translateX(0px);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
    @media screen and (max-width: 750px){
        display: none;
    }

    `
    const eltabsitem=css`
        padding-left: 0;
        color: #409eff;
        padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    @media screen and (max-width: 750px){
        font-size: .28rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: .4rem;
    background: ${selectedTab === 'tab-first' ? '#fff' : ''};
    
    border-radius: 0.54rem;
    width: 2.36rem;
    height: 0.76rem;
    display: flex;
    justify-content: center;
    padding: 0.18rem 0;
    color: ${selectedTab === 'tab-first' ? '#28292e' : 'hsla(0,0%,100%,.4)'}!important;
    
    
    }
    `
    const eltabsecond=css`
       padding-right: 0; 
       padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    @media screen and (max-width: 750px){
        background: ${selectedTab === 'tab-second' ? '#fff' : ''};
        width: 2.36rem;
        border-radius: 0.54rem;
    height: 0.76rem;
    display: flex;
    justify-content: center;
    padding: 0.18rem 0;
    font-size: .28rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .4rem;
    color: ${selectedTab === 'tab-second' ? '#28292e' : 'hsla(0,0%,100%,.4)'}!important;

    }
    `
    const eltabpane=css`
        @media screen and (max-width: 750px){
            overflow-x: scroll;
    padding-top: 0.44rem;
    padding-bottom: 1.58rem;
        }
    `
    const diagram=css`
        @media screen and (max-width: 750px){
            height: 7.6rem;
    width: auto;
        }
    `
    const tabsecond=css`
        display: block;
        @media screen and (max-width: 750px){
            padding-top: 0.6rem;
    padding-bottom: 1.22rem; 
    div{
        margin-bottom: 0.24rem;
        a{
            background: rgba(133,107,255,.15);
    color: #fff;
    width: 5rem;
    margin: 0 auto;
    height: 1.16rem;
    box-shadow: 0 0.08rem 0.16rem 0 rgba(0,85,255,.08);
    border-radius: 0.16rem;
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: .32rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: .44rem;
        }
    }
        }
    `
    
    
  return (
    
    <div css={container}>
        <div css={title}>方案架構</div>
        <div css={contentStyle}>
            <div css={content}>
                <div css={contentLeft}>
                    <img css={photo} src='https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_architecture.png'/>
                </div>
                <div css={contentRight}>
                
                    <div id="tab-second" aria-controls="pane-second" role="tab" tabIndex="0" aria-selected="true" css={relatedTitle}>相關產品</div>
                    
                    <div role="tabpanel" id="pane-second" aria-labelledby="tab-second"  >
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >MetaWorld虛擬世界</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >Avatar虛擬形象</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >實時音視頻</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >即時通訊IM</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >CDN直播</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >低延遲直播</a>
                        </div>
                        <div css={items}>
                            <a href='#' target='_blank' css={item} >實時錄製</a>
                        </div>
                    </div>
                </div>
            </div>
            <div css={mcontent}>
                <div css={eltabstop}>
                    <div css={eltabsheader}>
                        <div css={eltabsnavwrap}>
                            <div css={eltabsscroll}>
                                <div css={eltabsnav} role='tablist'>
                                    <div css={eltabsactive}></div>
                                    <div css={eltabsitem} aria-controls='pane-first' role='tab'  id='tab-first' tabIndex={0} onClick={() => handleTabClick('tab-first')}>架構圖</div>
                                    <div css={eltabsecond} aria-controls='pane-second' role='tab' id='tab-second' tabIndex={-1} onClick={() => handleTabClick('tab-second')}>相關雲產品</div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div css={eltabscontent}>
                    {selectedTab === 'tab-first' && (
                        <div css={eltabpane} id='pane-first' role='tabpanel' aria-labelledby='tab-first'>
                           <img css={diagram} src='https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_img_live_architecture.png' /> 
                        </div>)}
                        {selectedTab === 'tab-second' && (
                        <div css={tabsecond} id='pane-second' role='tabpanel' aria-labelledby='tab-second' aria-hidden="true">
                        <div css={items}>
                        <a href='#' target='_blank' css={item} >MetaWorld虛擬世界</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >Avatar虛擬形象</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >實時音視頻</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >即時通訊IM</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >CDN直播</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >低延遲直播</a>
                    </div>
                    <div css={items}>
                        <a href='#' target='_blank' css={item} >實時錄製</a>
                    </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solution