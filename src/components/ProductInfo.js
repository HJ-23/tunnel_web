import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ onOpenBrochure }) => {
  const features = [
  { icon: '🌐', title: '多源感知监测', description: '融合温湿度、有害气体、粉尘浓度、震动等多维感知数据，实现实时监测' },
  { icon: '⚙️', title: '智能预警分析', description: '基于数据分析算法，自动识别渗漏积水、坍塌风险及人员入侵等异常情况' },
  { icon: '📸', title: '高清视频巡检', description: '系统提供高分辨率巡检画面，支持远程视频巡查与图像留存' },
  { icon: '👷', title: '人员安全监控', description: '监测隧道作业人员定位、遗留工具与车辆接近风险等安全状态' },
  { icon: '☁️', title: '云端数据中心', description: '数据统一汇聚至监控中心，通过通信网络实现远程访问与集中管理' },
  { icon: '🔒', title: '多级防护体系', description: '防火墙、服务器与数据库协同防护，确保系统安全与稳定运行' },
  { icon: '🛰️', title: '远程可扩展', description: '系统可按需扩展监测模块，支持多隧道、跨区域接入与数据同步' },
  { icon: '💡', title: '智能决策支持', description: '提供风险预警、事件记录与统计报表，为隧道安全运维提供决策依据' }
];

const specifications = [
  { label: '监测内容', value: '渗漏水、坍塌、积水、震动、气体、粉尘、温湿度等' },
  { label: '视频分辨率', value: '1080p 高清' },
  { label: '数据通信', value: '有线/无线，支持4G/专网接入' },
  { label: '监测频率', value: '≤1s 实时刷新' },
  { label: '中心服务器', value: '平台服务器 + 数据库服务器 + 文件服务器' },
  { label: '防护等级', value: 'IP67（防尘防水）' },
  { label: '工作温度', value: '-20°C ~ 60°C' },
  { label: '系统扩展性', value: '支持多模块组合、按需部署' }
];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/tunnel1.png');

  const handleImageError = () => {
    setShowImage(false);
  };

  // 点击按钮在应用内切换到“宣传册”页
  const handleOpenBrochure = () => {
    if (typeof onOpenBrochure === 'function') {
      onOpenBrochure();
    }
  };

  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>隧道状态智能监测系统</h2>
        <p className="hero-description">
          隧道状态智能监测系统通过先进的多源感知和数据分析技术，实时监测、自动识别并及时预警隧道内的风险状况，包括：隧道内渗漏积水、隧道掉块，隧道内人员和大型动物入侵等。系统自动提供隧道状态巡检的高清图片，支持远程视频查看。
        </p>
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="隧道状态智能监测系统"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">隧道状态智能监测系统（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h3>立即体验</h3>
        <p>查看完整的产品宣传册，了解更多技术细节和应用案例</p>
        <button className="cta-button" onClick={handleOpenBrochure}>
          <span>📄</span>
          查看宣传册
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
