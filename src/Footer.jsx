/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React from 'react'
import {AiOutlinePhone} from'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
    const footerWrap=css`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
       
    `
    const footerFreeWrap=css`
        height: 350px;
        background: #000002;
        width: 100%;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            height: 18.229vw;  
            background: #000002;
    width: 100%;
    margin: 0 auto;
        }
    `
    const bgfooter=css`
        height: 350px;
        width: 100%;
        background: url(https://www.zego.im/_nuxt/img/4580834.png) no-repeat 50%;
        background-size: cover;
        @media screen and (max-width: 1440px){
            height: 18.229vw; 
            width: 100%;
            background: url(https://www.zego.im/_nuxt/img/4580834.png) no-repeat 50%;
    background-size: cover;
        }
    `
    const freeBox=css`
        padding-top: 67px;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            padding-top: 3.49vw;
    max-width: 75vw;
    margin: 0 auto; 
        }

        @media screen and (max-width: 750px){
            max-width: 100%;
            height: 5.22rem;
    background: url(https://www.zego.im/_nuxt/img/741269e.png) no-repeat;
    background-size: cover;
    padding: 0.84rem 0 0.8rem 0.32rem;
        }
        
    `
    const title=css`
        font-size: 32px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 45px;
        text-align: left;
        margin-bottom: 24px;
        @media screen and (max-width: 1440px){
            font-size: 1.667vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.34375vw;
    text-align: left;
    margin-bottom: 1.25vw;
        }
    `
    const freeBottom=css`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    flex-direction: row; 
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        
    `
    const freebtn=css`
        width: 140px;
        height: 48px;
        margin-right: 16px;
        background: #05f;
        border-radius: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 24px;
        text-decoration: none;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    margin-right: 0.833vw;
    background: #05f;
    border-radius: 1.354vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.25vw;
        }
        @media screen and (max-width: 750px){
            display: flex;
    width: 2.08rem;
    height: 0.72rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .48rem;
    align-items: center;
    justify-content: center;
    background: #05f;
    border-radius: 0.52rem;
    margin-right: 0.18rem;
        }
    `
    const checkPrice=css`
        width: 140px;
        height: 48px;
        border-radius: 26px;
        border: 1px solid #fff;
        font-size: 16px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw; 
    border-radius: 1.354vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.25vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        @media screen and (max-width: 750px){
            width: 2.08rem;
    border-radius: 0.52rem;
    border: 0.02rem solid #fff;
    height: 0.72rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
    `
    const detailbox=css`
        display: flex;
        flex-direction: row;
        margin-top: 70px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 3.646vw; 
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.94rem;
        }
        

    `
    const item=css`
        display: flex;
        flex-direction: column;
        margin-right: 64px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 3.333vw;
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 0.12rem; 
    :last-of-type{
        margin-right: 0;
    }
        }
    `
    const poppins=css`
        font-size: 24px;
        font-weight: 500;
        color: #fff;
        line-height: 35px;
        margin-bottom: 2px;
        text-align: left;
        @media screen and (max-width: 1440px){
            font-size: 1.25vw;
            font-weight: 500;
    color: #fff;
    line-height: 1.823vw;
    margin-bottom: 0.104vw;
        }
        @media screen and (max-width: 750px){
            font-size: .28rem; 
            font-weight: 500;
    color: #fff;
    line-height: .42rem;
    margin-bottom: 0.08rem;
    max-width: 3.48rem;
        }
       
    `
    const desc=css`
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: 1.042vw;
        }
        @media screen and (max-width: 750px){
            font-size: .24rem;
    line-height: .28rem;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: #fff;
    transform: scale(.8);
    transform-origin: 0;
        }
    `
    const footerContainer=css`
        background: #000404;
        @media screen and (max-width: 1440px){
            background: #000404;
        }
    `
    const introduce=css`
        display: flex;
        flex-direction: column;
        min-width: 925px;
        max-width: 1440px;
        padding-top: 66px;
        margin: 0 auto 34px;
        justify-content: space-between;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 48.177vw;
    max-width: 75vw;
    padding-top: 3.438vw;
    margin: 0 auto 1.771vw;
    -webkit-box-pack: justify;
    justify-content: space-between; 
        }
        
    `
    const right=css`
        padding-bottom: 43px;
        border-bottom: 1px solid hsla(0,0%,100%,.2);
        @media screen and (max-width: 1440px){
            padding-bottom: 2.24vw;
    border-bottom: 0.052vw solid hsla(0,0%,100%,.2); 
        }
    `
    const sitefooter=css`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
    `
    const sitefooterlist=css`
        margin-right: 102px;
        @media screen and (max-width: 1440px){
            margin-right: 5.3125vw; 
        }
    `
 
    const contact=css`
        margin-top: 12px;
        width: max-content;
        font-size: 14px;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 1440px){
            margin-top: 0.625vw;
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
         }
    `
    const text1=css`
        margin-top: 24px;
        margin-bottom: 14px;
        width: max-content;
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
         span{
            font-weight: 600;
         }
         @media screen and (max-width: 1440px){
            margin-top: 1.25vw;
    margin-bottom: 0.729vw;
    width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
         }
         
    `
    const img=css`
        width: 20px;
        height: 20px;
        margin-right: 8px;
        @media screen and (max-width: 1440px){
            width: 1.042vw;
    height: 1.042vw;
    margin-right: 0.417vw;
        }
    `
    const text2=css`
        width: max-content;
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
        }
    `
    const quicklinker=css`
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        color: #000;
        @media screen and (max-width: 1440px){
            display: flex;
            max-width: 75vw;
    color: #000;
        }
        @media screen and (max-width: 750px){
            -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 0.32rem; 
        }
        
        `
        const product=css`
            margin-right: 156px;  
            @media screen and (max-width: 1440px){
                margin-right: 8.125vw;
            }
        `
        const plan =css`
            margin-right: 138px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 8.125vw;
            }
        `
        const procenter =css`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
        `
        const developer =css`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
            
        `
        const about =css`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
        `
        const auth=css`
            margin-right: 0;
            margin-left: 0;
            ul{
                max-height: 232px;  
            }
        `
        
    
    
    const producttitle=css`
        margin-bottom: 26px;
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: hsla(0,0%,100%,.8);
        line-height: 22px;
        width: max-content;
        @media screen and (max-width: 1440px){
            margin-bottom: 1.042vw;
            width: max-content;
            font-size: .833vw;
            font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: hsla(0,0%,100%,.8);
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            font-size: .2rem;
        }
        
    `
    const menulist=css`
        max-height: 217px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-height: 11.502vw;
    flex-wrap: wrap; 
        }
    `
    const listitem=css`
        line-height: 17px;
        margin-bottom: 12px;
        width: max-content;
        list-style: none;
        :nth-of-type(n+7){
            margin-left: 36px;
            @media screen and (max-width: 1440px){
                margin-left: 1.875vw;   
            }
        }
        :last-of-type{
            margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            padding-left: 3em;
    text-indent: -3em;
    line-height: 1;
    margin-bottom: 0.2rem;
    width: auto;
        }
        @media screen and (max-width: 1440px){
            width: max-content;
    line-height: .885vw;
    margin-bottom: 0.833vw;
        }
        
    `
    const footerlink=css`
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,80%,.8);
        line-height: 20px;
        width: max-content;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,80%,.8);
    line-height: 1.042vw;
        }
    `
    const itemimg=css`
        width: 44px;
        height: 44px;  
        @media screen and (max-width: 1440px){
            width: 2.292vw;
    height: 2.292vw;  
        }
    `
    const mfooterwrap=css`
        display: none;
        @media screen and (max-width: 750px){
            display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background: #000404; 
        }
    `
    
    const mtitle=css`
        @media screen and (max-width: 750px){
            max-width: 3.48rem;
    margin-bottom: 0.36rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: .4rem; 
        }
    `
    const footerleftbox=css`
    @media screen and (max-width: 750px){
        padding: 0.48rem 0 0.4rem 0.32rem;
    }
    `
    const proitemwrap=css`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.32rem; 
        }
    `
    const proitem=css`
        @media screen and (max-width: 750px){
            font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .34rem;
    margin-right: 0.48rem;  
        }
    `
    const phonewrapper=css`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    position: relative;
        }
    `
    const phonebox=css`
        @media screen and (max-width: 750px){
            position: relative; 
        }
    `
    const mimg=css`
       @media screen and (max-width: 750px){
        display: block;
        width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.4rem;
       } 
    `
    const codephone=css`
        @media screen and (max-width: 750px){
            position: absolute;
    bottom: 1rem;
    left: 0;
    display: none; 
    width: max-content;
    background: #fff;
    border-radius: 0.08rem;
    padding: 0.18rem 0.32rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    line-height: .34rem;
        }
    `
    const addressbox=css`
        @media screen and (max-width: 750px){
            position: relative;  
        }
    `
    const codeaddress=css`
        @media screen and (max-width: 750px){
            display: none; 
            position: absolute;
    bottom: 1rem;
    left: -2rem;
    width: max-content;
    background: #fff;
    border-radius: 0.08rem;
    padding: 0.18rem 0.32rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    line-height: .34rem;
        }
    `

    
  return (
    <>

    <footer>
        <div css={footerWrap}>
            <div css={footerFreeWrap}>
                <div css={bgfooter}>
                    <div css={freeBox}>
                        <div css={title}>开启业务增长之旅，即享120,000分钟</div>
                        <div css={freeBottom}>
                            <a href='#' target='_blank' css={freebtn}>免费试用</a>
                            <div css={checkPrice}>方案諮詢</div>
                        </div>
                        <div css={detailbox}>
                            <div css={item}>
                                <div css={poppins}>7*24h</div>
                            <div css={desc}>技術團隊支持</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>99.99%</div>
                            <div css={desc}>全年服務可用性</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>212個</div>
                            <div css={desc}>國家地區全覆蓋</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>100+</div>
                            <div css={desc}>行業技術解決方案</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div css={footerContainer}>
                <div css={introduce}>
                    <div css={right}>
                        <div css={sitefooter}>
                            <div css={sitefooterlist}>
                                <a href='#' >Nu</a>
                                <div css={contact}>關注或連繫我們</div>
                                <div css={text1}>
                                    <AiOutlinePhone css={img}/>
                                    諮詢電話 : 
                                    <span> 02-8913-1553 </span>
                                </div>
                                <div css={text2}>
                                    <FaMapMarkerAlt css={img}/>
                                    地址 : 新北市新店區北新路三段207之3號7樓
                                </div>
                            </div>
                            <div css={quicklinker}>
                                <div css={product}>
                                    <h3 css={producttitle}>產品</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <div css={footerlink}>Avatar虛擬形象</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>實時音視頻</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>實時語音</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>即時通訊IM</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>暢直播</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>超級白板</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>AI視覺</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>實時錄製</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>星圖</div>
                                        </li>
                                    </ul>
                                </div>
                                <div css={plan}>
                                    <h3 css={producttitle}>解決方案</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <div css={footerlink}>秀場直播</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>語聊房</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>視頻會議</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>在線KTV</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>在線教育</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>電商直播</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>遊戲競技</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>物聯網</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>遠程醫療</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>在線健身</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>出海</div>
                                        </li>
                                    </ul>
                                </div>
                                <div css={procenter}>
                                    <h3 css={producttitle}>產業中心</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <div css={footerlink}>私有化部屬</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>信創產品</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>即構會議</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>呼叫中心</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>Go直播</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>企業通訊</div>
                                        </li>
                                    </ul>
                                </div>
                                <div css={developer}>
                                    <h3 css={producttitle}>開發者中心</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <div css={footerlink}>文檔中心</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>SDK中心</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>API中心</div>
                                        </li>
                                    </ul>
                                </div>
                                <div css={about}>
                                    <h3 css={producttitle}>公司</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <div css={footerlink}>關於我們</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>市場活動</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>熱門文章</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>校園招聘</div>
                                        </li>
                                        <li css={listitem}>
                                            <div css={footerlink}>社會招聘</div>
                                        </li>
                                    </ul>
                                </div>
                                <div css={auth}>
                                    <h3 css={producttitle}>認證</h3>
                                    <ul css={menulist}>
                                        <li css={listitem}>
                                            <img css={itemimg} src='https://www.zego.im/_nuxt/img/67fa300.png'/>
                                        </li>
                                        <li css={listitem}>
                                            <img css={itemimg} src='https://www.zego.im/_nuxt/img/4a0cad2.png'/>
                                        </li>
                                        <li css={listitem}>
                                            <img css={itemimg} src='https://www.zego.im/_nuxt/img/510ebd6.png'/>
                                        </li>
                                        <li css={listitem}>
                                            <img css={itemimg} src='https://www.zego.im/_nuxt/img/4c4d905.png'/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div css={mfooterwrap}>
            <div>
                    <div>
                        <div css={freeBox}>
                            <div css={mtitle}>
                            开启业务增长之旅
                            <br />
                            即享120,000分钟免费试用
                            </div>
                            <div css={freeBottom}>
                                <a href='#' target='_blank' css={freebtn}>免费试用</a>
                                <div css={checkPrice}>方案諮詢</div>
                            </div>
                            <div css={detailbox}>
                            <div css={item}>
                                <div css={poppins}>7*24h</div>
                            <div css={desc}>技術團隊支持</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>99.99%</div>
                            <div css={desc}>全年服務可用性</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>212個</div>
                            <div css={desc}>國家地區全覆蓋</div>
                            </div>
                            <div css={item}>
                                <div css={poppins}>100+</div>
                            <div css={desc}>行業技術解決方案</div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <div css={footerContainer}>
                <div>
                    <div>
                        <div css={footerleftbox}>
                            <div css={proitemwrap}>
                                <div css={proitem}>熱門產品</div>
                                <div css={proitem}>解決方案</div>
                                <div css={proitem}>開發者中心</div>
                                <div css={proitem}>價格</div>
                            </div>
                            <div css={phonewrapper}>
                                <div css={phonebox}>
                                    <img css={mimg} src="https://www.zego.im/_nuxt/img/b4d4660.png" lazy="loaded"/> 
                                    <div css={codephone}>02-8913-1553</div>
                                </div>
                                <div >
                                    <img css={mimg} src="https://www.zego.im/_nuxt/img/b1fabe9.png" />
                                </div>
                                <div css={addressbox}>
                                    <img css={mimg} src="https://www.zego.im/_nuxt/img/c05ba74.png"/>
                                    <div css={codeaddress}>新北市新店區北新路三段207之3號7樓</div>
                                </div>
                                <a href='#' target='_blank' >
                                    <img css={mimg} src='https://www.zego.im/_nuxt/img/4f41c18.png'/>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer