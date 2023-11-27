/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import React from 'react'

const Conform = () => {
   
    const title =css`
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff; 
        font-size: 40px;
        line-height: 56px;
        margin-top: 100px;
        margin-bottom: 10px;
        text-align: center;
        @media screen and (max-width: 1440px){
            font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;  
    margin-top: 5.208vw;
    margin-bottom: 0.521vw;
    text-align: center;
    font-size: 2.083vw;
    line-height: 2.917vw;
        }
        @media screen and (max-width: 750px){
            font-size: .56rem;
            line-height: .9rem;
    margin-bottom: 0.8rem;
    padding-top: 1.2rem;
    margin-top: 0;
        }
        
    `
    const stepBox=css`
        display: flex;
        flex-direction: row;
        width: 1440px;
        margin: 80px auto 0;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    width: 75vw;
    margin: 4.167vw auto 0;   
        }
        @media screen and (max-width: 750px){
            display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.28rem;
    grid-row-gap: 0.28rem;
    width: 100%;
    margin-top: 0;
    padding: 0 0.32rem;  
        }
        

    `
    const stepItem=css`
        background: rgba(133,107,255,.1);
        border-radius: 8px;
        border: 1px solid #343864;
        box-shadow: none;
        width: 280px;
        height: 110px;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        padding-left: 32px;
        padding-top: 20px;
        position: relative;
        :last-of-type{
            margin-right: 0;
            ::after{
                display: none;
            }
        }
        ::after{
            content: "";
            width: 35px;
            height: 24px;
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/icon_arrow.png) no-repeat;
            position: absolute;
            left: 319px;
            top: 50%;
            transform: translateY(-50%);
            background-size: cover;
            @media screen and (max-width: 750px){
                display:none;
            }
            @media screen and (max-width: 1440px){
                content: "";
    width: 1.823vw;
    height: 1.25vw;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/icon_arrow.png) no-repeat;
    position: absolute;
    left: 16.615vw;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
            }
        }
        @media screen and (max-width: 1440px){
            background: rgba(133,107,255,.1);
            border-radius: 0.417vw;
    border: 0.052vw solid #343864;
    box-shadow: none;
    width: 14.583vw;
    height: 5.729vw;
    margin-right: auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding-left: 1.667vw;
    padding-top: 1.042vw;
    position: relative;
        }
        @media screen and (max-width: 750px){
            border-radius: 0.16rem;
        border: 0.02rem solid #343864;
        width: 3.28rem;
    height: 2.96rem;
    padding: 0.24rem 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        }
        
    `
    const stepicon=css`
        display:none;
        @media screen and (max-width: 1440px){
            display: none;
        }
        @media screen and (max-width: 750px){
            display: block;
    width: 1.12rem;
    height: auto;  
        }
       
    `
    const stepTop=css`
        margin-bottom: 12px;
        @media screen and (max-width: 1440px){
            margin-bottom: 0.625vw;
        }
        @media screen and (max-width: 750px){
            margin-top: 0.2rem;
    margin-bottom: 0.08rem;
        }
       
    `
    const id=css`
        color: #fff;
        font-size: 22px;
        font-family: Rubik-SemiBoldItalic,Rubik;
        font-weight: 400;
        line-height: 27px;
        text-shadow: 0 5px 13px rgba(134,162,255,.14);
        margin-right: 14px;
        font-style: oblique;
        @media screen and (max-width: 1440px){
            color: #fff;
            font-style: oblique;
            font-size: 1.146vw;
    font-family: Rubik-SemiBoldItalic,Rubik;
    font-weight: 400;
    line-height: 1.40625vw;
    text-shadow: 0 0.26vw 0.677vw rgba(134,162,255,.14);
    margin-right: 0.729vw;
        }
        @media screen and (max-width: 750px){
            font-size: .3rem;
    font-family: Rubik-SemiBoldItalic,Rubik;
    font-weight: 400;
    line-height: .36rem;
    text-shadow: 0 0 0 rgba(134,162,255,.14);
    margin-right: 0.06rem;
        }

    `
    const name=css`
        color: #fff;
        font-size: 20px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        line-height: 28px;
        @media screen and (max-width: 1440px){
            color: #fff; 
            font-size: 1.042vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: 1.458vw;
        }
        @media screen and (max-width: 750px){
            font-size: .28rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .4rem;
        }
    `
    const stepBottom=css`
        color: #a7a4b5;
        font-size: 16px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        line-height: 24px;
        @media screen and (max-width: 1440px){
            color: #a7a4b5;
            font-size: .833vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    line-height: 1.25vw;
        }
        @media screen and (max-width: 750px){
            max-width: 2.5rem;
    font-size: .24rem;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    line-height: .34rem;
    text-align: center;
        }
    `
    const stepOneBody=css`
        background: rgba(133,107,255,.1);
        border-radius: 8px;
        border: 1px solid #343864;
        box-shadow: none;
        display: block;
        width: 1440px;
        height: 240px;
        margin: 60px auto 0;
        position: relative;
        padding: 34px 140px 57px 420px;
        @media screen and (max-width: 1440px){
            background: rgba(133,107,255,.1);
    border-radius: 0.417vw;
    border: 0.052vw solid #343864;
    box-shadow: none;
    display: block;
    width: 75vw;
    height: 12.5vw;
    margin: 3.125vw auto 0;
    position: relative;
    padding: 1.771vw 7.292vw 2.96875vw 21.875vw;
        }
        @media screen and (max-width: 750px){
            display: none;  
        }

    `
    const steponebodym=css`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    padding-bottom: 1.28rem;  
        }
    `
    const photo=css`
        position: absolute;
        width: 294px;
        height: auto;
        top: 16px;
        left: 76px;
        border: 0;
        @media screen and (max-width: 1440px){
            position: absolute;
    width: 15.313vw;
    height: auto;
    top: 0.833vw;
    left: 3.958vw;
        }
    `
    const dialog=css`
        display: block;
        @media screen and (max-width: 1440px){
            display: block;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
        
    `
    const rightTitle=css`
        color: #fff;
        font-size: 24px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        line-height: 33px;
        margin-bottom: 18px;
        @media screen and (max-width: 1440px){
            color: #fff;
            font-size: 1.25vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: 1.719vw;
    margin-bottom: 0.9375vw;
        }
        @media screen and (max-width: 750px){
            font-size: .42rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    
    line-height: .58rem;
    text-align: center;
    color: #fff;
        }
    `
    const dialogSteps=css`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
    `
    const content=css`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
    `
    const userForm=css`
        width: max-content;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 20px;
        @media screen and (max-width: 1440px){
            width: max-content;
            align-items: center; 
            display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.4458vw;
        }
        @media screen and (max-width: 750px){
            width: auto; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    grid-column-gap: 0;
    grid-row-gap: 0;
        }
       
    `
    const formItem=css`
        margin-right: 20px;
        margin-bottom: 0;
        ::before{
            display: table;
            content: "";
        ::after{
            clear: both;
            display: table;
            content: "";
            }
        }
        @media screen and (max-width: 1440px){
            margin-right: 1.042vw;
    margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            margin-bottom: 0.32rem!important;
    margin-right: 0;
        }
       
    `
    const itemContent=css`
        margin-left: 0px;
        line-height: 1.2;
        position: relative;
        font-size: 14px;
        ::before{
            display: table;
            content: "";
        }
        ::after{
            clear: both;
            display: table;
            content: "";
        }
    `
    const input=css`
        font-size: 14px;
        position: relative;
        display: inline-block;
        width: 100%;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
        }
    `
    const inputInner=css`
        background: #241a48;
        color: #fff;
        border: 2px solid transparent;
        box-sizing: border-box;
        line-height: 1.5;
        width: 280px;
        height: 48px;
        border-radius: 26px;
        padding: 0 22px;
        display: inline-block;
        font-size: inherit;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        @media screen and (max-width: 1440px){
            background: #241a48;
    color: #fff;
    border: 0.104vw solid transparent;
    box-sizing: border-box; 
    line-height: 1.5;
    width: 14.583vw;
    height: 2.5vw;
    border-radius: 1.354vw;
    padding: 0 1.146vw;
        }
        @media screen and (max-width: 750px){
            width: 6.38rem;
    height: 0.88rem;
    margin: 0 auto; 
    border-radius: 0.52rem;
    padding: 0 0.48rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: .48rem;
        }
    `
    const submit=css`
        position: absolute;
        top: 153px;
        right: 214px;
        margin-right: 0;
        margin-bottom: 0;
        ::before{
            display: table;
            content: "";
        }
        @media screen and (max-width: 1440px){
            position: absolute;
    top: 7.969vw;
    right: 11.146vw;
            margin-right: 0;
            margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            margin-top: 0.08rem;
    margin-bottom: 0!important;
    position: relative;
    top: 0;
    right: 0; 
        }
       
    `
    const submitContent=css`
        margin-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
        position: relative;
        font-size: 14px;
        ::before{
            display: table;
            content: "";
        }
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
    `
    const button=css`
       background: #fff;
       border-radius: 26px;
        font-size: 14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #28292e;
        border: none;
        width: 180px;
        height: 48px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: not-allowed;
        white-space: nowrap;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        padding: 12px 20px;
        @media screen and (max-width: 1440px){
            background: #fff;  
            border-radius: 1.354vw;
    font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    border: none;
    width: 9.375vw;
    height: 2.5vw;
    line-height: 1.042vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        @media screen and (max-width: 750px){
            background: #fff; 
            width: 2.56rem;
    height: 0.88rem;
    border-radius: 0.52rem;
    border: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    font-size: .24rem;
    line-height: .48rem;
    letter-spacing: 0;
        }
        
    `
    const dialogm=css`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    position: relative;
        }
    `
    const rightform=css`
        @media screen and (max-width: 750px){
            margin-bottom: 0.4rem;
        }
    `
    const steponebox=css`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: 7.7rem;
    background: rgba(133,107,255,.1);
    border-radius: 0.16rem;
    border: 0.02rem solid #343864;
    box-shadow: none;
    padding: 0.48rem 0.24rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0.4rem auto 0;
        }
    `
    const dialogindexm=css`
       display: none; 
       @media screen and (max-width: 750px){
        display: block;
    position: relative;
       }
    `
  return (
    <>
    <div>
        <div css={title}>简单4步 • 探索新可能</div>
        <div css={stepBox}>
            <div css={stepItem}>
            <img  css={stepicon} src='https://www.zego.im/_nuxt/img/fcdbe8c.png'/>
                <div css={stepTop}>
                    <span css={id}>01</span>
                    <span css={name}>業務探索</span>
                </div>
                <div css={stepBottom}>
                    <div>
                    根据业务需要选择合适的方案
                    </div>
                </div>
            </div>
            <div css={stepItem}>
                <img  css={stepicon} src='https://www.zego.im/_nuxt/img/18b20cb.png'/>
                <div css={stepTop}>
                    <span css={id}>02</span>
                    <span css={name}>方案設計</span>
                </div>
                <div css={stepBottom}>
                    <div>
                    技术专家设计规划成熟方案
                    </div>
                </div>
            </div>
            <div css={stepItem}>
            <img  css={stepicon} src='https://www.zego.im/_nuxt/img/8c63d88.png'/>
                <div css={stepTop}>
                    <span css={id}>03</span>
                    <span css={name}>服務接入</span>
                </div>
                <div css={stepBottom}>
                    <div>
                    技术团队7*24小时提供协助
                    </div>
                </div>
            </div>
            <div css={stepItem}>
            <img  css={stepicon} src='https://www.zego.im/_nuxt/img/e7b2430.png'/>
                <div css={stepTop}>
                    <span css={id}>04</span>
                    <span css={name}>運營支撐</span>
                </div>
                <div css={stepBottom}>
                    <div>
                    提供可靠的质量分析产品运营
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div css={stepOneBody}>
            <img css={photo} src='https://www.zego.im/_nuxt/img/9120ff8.png'/>
            <div css={dialog}>
               <div css={rightTitle}>
               开启你的第一步
               </div>
                <div css={dialogSteps}>
                    <div css={content}>
                        <form css={userForm}>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的姓名" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的電話" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入公司名稱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的郵箱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={submit}>
                                <div css={submitContent}>
                                    <button type="button" disabled='disabled' css={button}>預約專屬專案</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <div css={dialogm}>
                <div css={rightform}>
                    <div css={rightTitle}>開啟你的第一步</div>
                    <div >
                        <div>
                            <div>
                                <div>
                                <form css={userForm}>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的姓名" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的電話" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入公司名稱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的郵箱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={submit}>
                                <div css={submitContent}>
                                    <button type="button" disabled='disabled' css={button}>預約專屬專案</button>
                                </div>
                            </div>
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div css={steponebodym}>
            <div css={steponebox}>
                <div css={dialogm}>
                <div css={rightform}>
                    <div css={rightTitle}>開啟你的第一步</div>
                    </div>
                    <div >
                        <div>
                            <div>
                                <div>
                                <form css={userForm}>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的姓名" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的電話" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入公司名稱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={formItem}>
                                <div css={itemContent}>
                                    <div css={input}>
                                        <input type="text" placeholder="請輸入你的郵箱" autoComplete='off' maxLength={30} id='userInput' css={inputInner} />
                                    </div>
                                </div>
                            </div>
                            <div css={submit}>
                                <div css={submitContent}>
                                    <button type="button" disabled='disabled' css={button}>預約專屬專案</button>
                                </div>
                            </div>
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
    </>
  )
}

export default Conform