import React from 'react';

const CyberCard = () => {
  return (
    <div className="cyber-card-container">
      <div className="cyber-card-header">
        <div className="cyber-card-dots">
          <svg viewBox="0 0 24 24" fill="currentColor" className="dot-red">
            <circle r={12} cy={12} cx={12} />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="dot-yellow">
            <circle r={12} cy={12} cx={12} />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="dot-green">
            <circle r={12} cy={12} cx={12} />
          </svg>
        </div>
        <span className="cyber-card-title">StartupGrowth.tsx</span>
      </div>
      
      <div className="cyber-card-body">
        <p className="cyber-line">
          <span className="c-bracket">&lt;</span><span className="c-tag">DashboardCard</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-1">
          <span className="c-bracket">&lt;</span><span className="c-tag">Title</span><span className="c-bracket">&gt;</span>
          <span className="c-val-box"><span className="c-val">Seed Funding Raised</span></span>
          <span className="c-bracket">&lt;/</span><span className="c-tag">Title</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-1">
          <span className="c-bracket">&lt;</span><span className="c-tag">Metric</span><span className="c-bracket">&gt;</span>
          <span className="c-val-box"><span className="c-val">$ 185,500</span></span>
          <span className="c-bracket">&lt;/</span><span className="c-tag">Metric</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-1">
          <span className="c-bracket">&lt;</span><span className="c-tag">Flex</span><span className="c-attr">className</span><span className="c-bracket">=</span><span className="c-val-box"><span className="c-val">"mt-4"</span></span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-2">
          <span className="c-bracket">&lt;</span><span className="c-tag">Text</span><span className="c-bracket">&gt;</span>
          <span className="c-bracket">&lt;</span><span className="c-tag">Bold</span><span className="c-bracket">&gt;</span>
          <span className="c-val-box"><span className="c-val">74%</span></span>
          <span className="c-bracket">&lt;/</span><span className="c-tag">Bold</span><span className="c-bracket">&gt;</span>
          <span className="c-val-box"><span className="c-val">of funding goal</span></span>
          <span className="c-bracket">&lt;/</span><span className="c-tag">Text</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-2">
          <span className="c-bracket">&lt;</span><span className="c-tag">Text</span><span className="c-bracket">&gt;</span>
          <span className="c-val-box"><span className="c-val">$ 250,000</span></span>
          <span className="c-bracket">&lt;/</span><span className="c-tag">Text</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-1">
          <span className="c-bracket">&lt;/</span><span className="c-tag">Flex</span><span className="c-bracket">&gt;</span>
        </p>
        
        <p className="cyber-line indent-1">
          <span className="c-bracket">&lt;</span><span className="c-tag">ProgressBar</span>
          <span className="c-attr">value</span><span className="c-bracket">=</span><span className="c-val-box"><span className="c-val">{'{'} 74 {'}'}</span></span>
          <span className="c-attr">color</span><span className="c-bracket">=</span><span className="c-val-box"><span className="c-val">"indigo"</span></span>
          <span className="c-bracket">/&gt;</span>
        </p>
        
        <p className="cyber-line">
          <span className="c-bracket">&lt;/</span><span className="c-tag">DashboardCard</span><span className="c-bracket">&gt;</span>
        </p>
      </div>
    </div>
  );
}

export default CyberCard;