import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'; // 导入全局样式文件
import Head from './Head';
import Content from './Content';
import Footer from './Footer';
import ScrollListener from '../ScrollListener';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
