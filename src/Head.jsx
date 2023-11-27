/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import {BsTelephone} from'react-icons/bs';

const Head = () => {
 // 状态用于存储滚动状态
 const [isScrolled, setIsScrolled] = useState(false);

 // useEffect 用于在组件挂载和卸载时添加和移除滚动事件监听器
 useEffect(() => {
   // 处理滚动事件的函数
   const handleScroll = () => {
    
     // 获取滚动位置
     const position = window.scrollY;

     // 根据滚动位置更新状态
     if (position > 0) {
       setIsScrolled(true);
     } else {
       setIsScrolled(false);
     }
   };

   // 添加滚动事件监听器
   window.addEventListener('scroll', handleScroll);

   // 在组件卸载时移除滚动事件监听器，避免内存泄漏
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []); // 空数组表示只在组件挂载和卸载时运行 useEffect
 const [isHovered, setIsHovered] = useState(false);
    const header=css`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 443;
        background: 0 0;
        box-shadow: none;
        width: 100%;
        height: 64px;
        display: flex;
        background-color: ${isScrolled ? '#fff' : ''};
        
        
       
        @media screen and (max-width: 1440px){
            width: 100%;
    height: 3.333vw;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 443;
    background: 0 0;
    box-shadow: none;
    background-color: ${isScrolled ? '#fff' : ''};
        }
        @media screen and (max-width: 750px){
            position: sticky;
            height: 1.24rem;
        z-index: 2022;
        }
        
    `
    const headerWrapper=css`
        max-width: 1440px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0 0 0 7px;
        align-items: center;
        @media screen and (max-width: 1440px){
            max-width: 75vw;
    margin: 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 0 0 0 0.365vw;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3.333vw;
    display: flex;
        }
        @media screen and (max-width: 750px){
            display: none;
           
        }
    
    `
    const menuContainer=css`
        display: flex;
        justify-content: flex-start;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start; 
        }
    `
    const navWrapper=css`
        display: flex;
        margin-left: 56px;
        
        @media screen and (max-width: 1440px){
            display: flex;
    margin-left: 2.917vw;
        }
    `
    const menuHead=css`
        display: flex;
        height: 64px;
        align-items: center;
        width: 1256px;
        flex-direction: row;
        justify-content: space-between;
        
        @media screen and (max-width: 1440px){
            display: flex;
    height: 3.333vw;
    -webkit-box-align: center;
    align-items: center;
    width: 65.417vw;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
        }
    `
    const menuLeft=css`
        display: flex;
        height: 64px;
        align-items: center;
   
    `
  
    const menuName=css`
        position: relative;
        justify-content: center;
        width: max-content;
        padding: 0 24px;
        font-weight: 600;
        font-size: 14px;
        color: ${isScrolled ? 'black' : 'white'};
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1440px){
            position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    width: max-content;
    padding: 0 1.25vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    font-size: .729vw;
    color: #fff;
    height: 2.083vw;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
        }
        span{
            @media screen and (max-width: 1440px){
                font-size: .729vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: ${isScrolled ? 'black' : 'white'};
            }
        }

    `
    const menuRight=css`
        display: flex;
        flex-direction: row;
        align-items: center;
        
    `
    const contactAccount=css`
        height: 64px;
        display: flex;
        align-items: center;
        margin-right: 22px;
        position: relative;
        cursor: pointer;
        
        @media screen and (max-width: 1440px){
            height: 3.333vw;
            display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1.146vw;
    position: relative;
    cursor: pointer;
        }
    `
    const navSpan=css`
        margin-left: 4px;
        line-height: 20px;
        font-weight: 600;
        font-size: 14px;
        color: ${isScrolled ? 'black' : 'white'};
        @media screen and (max-width: 1440px){
            margin-left: 0.208vw;
    line-height: 1.042vw;
    font-family: PingFangSC-SNaN0vwibold;
    font-weight: 600;
    font-size: .729vw;
    color: ${isScrolled ? 'black' : 'white'};
        }
    `
    const navImg=css`
        width: 20px;
        height: 20px;
        color: ${isScrolled ? 'black' : 'white'};
        @media screen and (max-width: 1440px){
            width: 1.042vw;
    height: 1.042vw;
    content: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/activity/lxwm/icon_call_nav_nor%402x.png);  
        }
    `
    const loginBtn=css`
        width: 134px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-decoration: none;
        background:${isScrolled ? 'rgba(0,85,255,.9)' : 'hsla(0,0%,100%,.9)'};
        color: ${isScrolled ? '#fff' : '#05f'};
        
        @media screen and (max-width: 1440px){
            height: 2.083vw;
    border-radius: 1.042vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.042vw;
    background: hsla(0,0%,100%,.9);
    color: #05f;
    float: left;
    text-align: center;
    word-break: keep-all;
    cursor: pointer;
        }
        @media screen and (max-width: 890px){
            width: 70px;
        }
    `
    const mheaderwrapper=css`
        
        @media screen and (max-width: 750px){
            display: flex;
    height: 1.24rem;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0 0.32rem;
    background: #fff;
        }
    `
    const logocontainer=css`
        @media screen and (max-width: 750px){
            width: inherit; 
        }
    `
    const iconlogowrap=css`
        display: none;
    
    @media screen and (max-width: 750px){
        -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    width: 100%;
    }
    `
    const madmin=css`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
        }
    `
    const iconadmin=css`
        
    @media screen and (max-width: 750px){
        display: block;
    width: 0.48rem;
    height: 0.48rem;
    margin-right: 0.48rem;
    }
    `
    const navbtn=css`
        @media screen and (max-width: 750px){
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAABZElEQVR4Xu3cwQnCQBRF0UkJFmE11ms1FmEJ2oCLMHAgfq5ruSaHpygDHqsHFThovfgKGI8g4ICxAM634ICxAM634ICxAM634ICxAM634ICxAM634ICxAM634KsC3+6PD762S+ffr+epcZ560q87DThg+g5owZR3rYADxgI434IDxgI4zxeMr39Mfvt78BgBfCMBB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcH57wR3bd2xPt8lPNFpwC27BVADH+4gIGAvgfAv+d2B8/WPy2z80xgjgGwk4YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA89sL7lS5U2W6zY6MKG9/Z4B5Aw6YC+AX6DM4YCyA83zB+PrH5Ld/aIwRwDcScMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOe/ps1gWVVa3EUAAAAASUVORK5CYII=);
    background-size: 100% 100%;
    width: 0.48rem;
    height: 0.48rem;
    transition: transform .9s linear,-webkit-transform .9s linear;
        }
    `
const menucontent =css`
    position: absolute;
    display: ${isHovered ? 'block' : 'none'};
    left: 0;
    top: 64px;
    background:${isHovered ? '#f4f5f7' : '#fff'};
    z-index: 43;
    width: 100vw;
    height: ${isHovered ? '458px' : '0'};
    border-radius: 4px;
    padding: 0;
    will-change: height;
    transition: height 1s ease-in-out;
    opacity: ${isHovered ? '1' : '0'};
   
`
const menuwrapper=css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    max-width: 1440px;
    height: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
`
const menudropdownleft=css`
    width: auto;
    padding: 46px 28px 46px 0;
    z-index: 10;
    display: -webkit-box;
    display: flex;
    position: relative;
`
const contentarea=css`
    width: 158px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    z-index: 10;
`
const menuheadline=css`
   font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #28292e;
    line-height: 22px;
    font-weight: 600;
    margin-bottom: 20px; 
`
const enterall=css`
   display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #28292e; 
`
const menutitle=css`
    font-size: 14px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #28292e;
    line-height: 20px;
    height: 34px;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    -webkit-box-pack: start;
    justify-content: flex-start;
`
const lefticon=css`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 196px;
    height: 206px;
    z-index: 1;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego-commons/bg/bg_tab2.png) no-repeat;
    background-size: cover;
`
const menudropdownright=css`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding: 46px 0 46px 72px;
    background: #fff;
    width: 100%;
`
const rementuijian=css`
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #28292e;
    line-height: 22px;
    width: max-content;
    margin-bottom: 24px;
`
const dropdownmid=css`
    width: 1032px;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 10;
    max-height: 200px;
`
const item=css`
   width: 222px;
    height: 126px;
    padding-top: 26px;
    padding-left: 16px;
    margin-right: 32px;
    margin-bottom: 32px; 
    position: relative;
    padding: 16px 24px;
    border-radius: 8px;
    text-decoration: none;
`
const img=css`
    z-index: -1;
    width: 222px;
    height: 126px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    overflow: hidden;
    img{
        width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
    }
`
const dbox=css`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-bottom: 6px;
`
const dtitle=css`
    font-size: 15px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 21px;
    white-space: nowrap;
`
const ddesc=css`
   max-width: 96px;
    font-size: 13px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: 19px; 
`
const dicon=css`
    position: absolute;
    top: -3px;
    left: 0;
    animation: run-gif-data-v-2bd7e930 1.4s steps(29) 0s infinite;
    width: 67px;
    height: 21px;
    background-image: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/index/tag_gif.png);
    background-size: cover;
  
`
const zhanwei=css`
  width: 1020px;
    height: 100%;
    position: absolute;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego-commons/bg/bg_picture.jpg) no-repeat 50%;
    background-size: cover;
    top: 0;
    right: 0;
    z-index: 1;  
`
  return (
    
    <>
      <div>
        <header css={header}>
            <div css={headerWrapper}>
                <div css={menuContainer}>
                    <nav css={navWrapper}>
                        <div css={menuHead}>
                            <div css={menuLeft} onMouseLeave={() => setIsHovered(false)}> 
                                    
                                        <div css={menuName} onMouseEnter={() => setIsHovered(true)} >
                                            <span>產品</span>
                                        </div>
                                        <div css={menucontent}>
                                            <div css={menuwrapper}>
                                                <div css={menudropdownleft}>
                                                    <div css={contentarea}>
                                                        <div css={menuheadline}>
                                                            <a href="#" target='_blank' css={enterall}>
                                                                全部產品 
                                                            </a>
                                                        </div>
                                                        <div css={menutitle}>
                                                            精選推薦
                                                        </div>
                                                        <div css={menutitle}>
                                                            雲通訊服務
                                                        </div>
                                                        <div css={menutitle}>
                                                            Meta&nbsp;元宇宙
                                                        </div>
                                                        <div css={menutitle}>
                                                            擴展服務
                                                        </div>
                                                        <div css={menutitle}>
                                                            低代碼產品
                                                        </div>
                                                        <div css={menutitle}>
                                                            軟件工具
                                                        </div>
                                                        <div css={lefticon}></div>
                                                    </div>
                                                </div>
                                                <div css={menudropdownright}>
                                                    <div css={rementuijian}>
                                                        熱門推薦
                                                    </div>
                                                    <div css={dropdownmid}>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_video.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>實時音視頻</div>
                                                            </div>
                                                            <div css={ddesc}>一對一、多對多視頻通話</div>
                                                            <div css={dicon}></div>
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_ktv.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>在線KTV</div>
                                                            </div>
                                                            <div css={ddesc}>線上正版曲庫K歌房</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_game.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>小遊戲</div>
                                                            </div>
                                                            <div css={ddesc}>遊戲化互動玩法升級</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_avatar.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>Avatar 虛擬形象</div>
                                                            </div>
                                                            <div css={ddesc}>實時互動的虛擬形象引擎</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/app/banner_shuzhiren%20.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>數字人</div>
                                                            </div>
                                                            <div css={ddesc}>提效視頻創作，降低直播成本</div>
                                                            
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                                <div css={zhanwei}></div>
                                            </div>
                                        </div>
                                        <div css={menuName} onMouseEnter={() => setIsHovered(true)}>
                                            <span>解決方案</span>
                                        </div>
                                        <div css={menucontent}>
                                            <div css={menuwrapper}>
                                                <div css={menudropdownleft}>
                                                    <div css={contentarea}>
                                                        <div css={menuheadline}>
                                                            <a href="#" target='_blank' css={enterall}>
                                                                全部產品 
                                                            </a>
                                                        </div>
                                                        <div css={menutitle}>
                                                            精選推薦
                                                        </div>
                                                        <div css={menutitle}>
                                                            雲通訊服務
                                                        </div>
                                                        <div css={menutitle}>
                                                            Meta&nbsp;元宇宙
                                                        </div>
                                                        <div css={menutitle}>
                                                            擴展服務
                                                        </div>
                                                        <div css={menutitle}>
                                                            低代碼產品
                                                        </div>
                                                        <div css={menutitle}>
                                                            軟件工具
                                                        </div>
                                                        <div css={lefticon}></div>
                                                    </div>
                                                </div>
                                                <div css={menudropdownright}>
                                                    <div css={rementuijian}>
                                                        熱門推薦
                                                    </div>
                                                    <div css={dropdownmid}>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_video.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>123</div>
                                                            </div>
                                                            <div css={ddesc}>一對一、多對多視頻通話</div>
                                                            <div css={dicon}></div>
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_ktv.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>在線KTV</div>
                                                            </div>
                                                            <div css={ddesc}>線上正版曲庫K歌房</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_game.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>小遊戲</div>
                                                            </div>
                                                            <div css={ddesc}>遊戲化互動玩法升級</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_avatar.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>Avatar 虛擬形象</div>
                                                            </div>
                                                            <div css={ddesc}>實時互動的虛擬形象引擎</div>
                                                            
                                                        </a>
                                                        <a href="#" target='_blank' css={item}>
                                                            <div css={img}>
                                                                <img src="https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/app/banner_shuzhiren%20.png" ></img>

                                                            </div>
                                                            <div css={dbox}>
                                                                <div css={dtitle}>數字人</div>
                                                            </div>
                                                            <div css={ddesc}>提效視頻創作，降低直播成本</div>
                                                            
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                                <div css={zhanwei}></div>
                                            </div>
                                        </div>
                                        <div css={menuName}>
                                            <span>體驗aPP</span>
                                        </div>
                                        <div css={menuName}>
                                            <span>產業中心</span>
                                        </div>
                                        <div css={menuName}>
                                            <span>價格</span>
                                        </div>
                                      
                                     
                                
                            </div>
                            <div css={menuRight}>
                               <div css={contactAccount}>
                                    <BsTelephone css={navImg}/>
                                    <span css={navSpan}>聯繫我們</span>
                               </div>
                               <a href='#' target='_blank' css={loginBtn}>登錄/註冊</a>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
            <div css={mheaderwrapper}>
                <div css={logocontainer}>
                    <div css={iconlogowrap}>
                        
                            <a href='#'>
                                <div>NU</div>
                            </a>
                            <div css={madmin}>
                                <img css={iconadmin} src='https://www.zego.im/_nuxt/img/b5a8986.png'/>
                                <div css={navbtn}></div>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div>

            </div>
        </header>
      </div>
    </>
  )
}

export default Head
