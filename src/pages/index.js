import { useState } from 'react';
import { useReward } from 'react-rewards';
import React from 'react';

const IndexPage = () => {
  return <Cannon />;
};

const Cannon = () => {
  const { reward: confettiReward, isAnimating } = useReward('rewardId', 'confetti', { lifetime: 200, angle: 45, decay: 0.94, spread: 45, startVelocity: 35, elementCount: 250, elementSize: 8, zIndex: 0, position: "fixed", colors: ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] });
  const { reward: balloonsReward, isBalloonsAnimating } = useReward('balloonsReward', 'balloons', { angle: 90, spread: 90, elementCount: 15 });
  const [isTextVisible, setIsTextVisible] = useState(false);


  const handleRewardClick = () => {
    if (!isAnimating) { confettiReward() };
    if (!isBalloonsAnimating) { balloonsReward() };
    setIsTextVisible(true);
  };

  return (

    <div style={{ paddingBottom: "32px", display: 'flex', flexDirection: "column", justifyContent: 'flex-end', alignItems: 'center', height: '100vh', width: '100vw' }}>
      {isTextVisible && (
        <div className="fade-in-text">
          <p style={{ fontFamily: "sans-serif", fontSize: "3.2em", textAlign: 'center', fontWeight: "bold", padding: "8px" }}>Happy Birthday <span style={{ color: "#e20b6d" }}>Anne!</span></p>
        </div>
      )
      }
      <div style={{ height: "50vw" }} />
      <span id="balloonsReward" />

      <span
        id="rewardId"
        style={{
          fontSize: '4rem',
          cursor: 'pointer',
          transform: 'rotate(-45deg)',
          marginBottom: '20px'
        }}
        onClick={handleRewardClick}
      >
        🎉
      </span>
    </div >
  );
};

export default IndexPage;
