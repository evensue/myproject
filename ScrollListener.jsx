import React, { useEffect, useState } from 'react';

const ScrollListener = () => {
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

  // 返回 JSX，根据滚动状态修改元素样式
  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1 style={{ color: isScrolled ? 'red' : 'black' }}>
        {isScrolled ? 'Scrolled!' : 'Not Scrolled'}
      </h1>
      <div style={{ height: '800px', background: 'lightgray', overflowY: 'scroll' }}>
        {/* 页面内容，使页面可以滚动 */}
      </div>
    </div>
  );
};

export default ScrollListener;
