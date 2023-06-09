import { useState } from 'react';
import { useReward } from 'react-rewards';
import React from 'react';

const IndexPage = () => {
  return <Cannon />;
};

const Cannon = () => {
  const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('rewardId', 'confetti', { lifetime: 100, angle: 45, decay: 0.94, spread: 45, startVelocity: 35, elementCount: 250, elementSize: 10, zIndex: 0, position: "fixed", colors: ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] });
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons', { lifetime: 600, angle: 90, spread: 90, elementCount: 15, elementSize: 35, zIndex: -100 });
  const [isTextVisible, setIsTextVisible] = useState(false);


  const handleRewardClick = () => {
    console.log("test", isConfettiAnimating, isBalloonsAnimating)
    if (!isConfettiAnimating) { confettiReward() };
    if (!isBalloonsAnimating) { balloonsReward() };
    setIsTextVisible(true);
  };

  return (

    <div style={{ paddingBottom: "32px", display: 'flex', flexDirection: "column", justifyContent: 'flex-end', alignItems: 'center', height: '100vh', width: '100vw' }}>
      {isTextVisible && (
        <div className="fade-in-text">
          <p style={{ fontFamily: "sans-serif", fontSize: "3.2em", textAlign: 'center', fontWeight: "bold", padding: "8px" }}>Happy Birthday <span style={{ color: "#e20b6d" }}>Carolyn!</span></p>
        </div>
      )
      }
      <div style={{ height: "50vw" }} />

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
      <span id="balloonsReward" width="100vw" />
      <div style={{ height: "25vw" }} />

    </div >
  );
};

export default IndexPage;
