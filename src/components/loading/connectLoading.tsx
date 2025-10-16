import React, { useEffect, useState } from "react";

export const ConnectLoading: React.FC = () => {
  const [progress, setProgress] = useState(0); // line growth
  const [heartDrawProgress, setHeartDrawProgress] = useState(0); // heart drawing
  const [fadeProgress, setFadeProgress] = useState(0); // line fading
  const [heartComplete, setHeartComplete] = useState(false); // heart spinning
  const [textProgress, setTextProgress] = useState(0); // text moving inward

  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const centerY = height / 2;
  const HEART_PATH_LENGTH = 200;


  // 1️⃣ Animate horizontal lines from edges to center
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // 2️⃣ Draw heart outline after horizontal lines meet
  useEffect(() => {
    if (progress >= 100) {
      const heartInterval = setInterval(() => {
        setHeartDrawProgress((prev) => {
          if (prev >= 1) {
            clearInterval(heartInterval);
            setHeartComplete(true);

            // Start fading lines after heart is fully drawn
            const fadeInterval = setInterval(() => {
              setFadeProgress((prev) => {
                if (prev >= 1) {
                  clearInterval(fadeInterval);
                  return 1;
                }
                return prev + 0.006;
              });
            }, 20);

            // Start moving text along fading lines
            const textInterval = setInterval(() => {
              setTextProgress((prev) => {
                if (prev >= 1) {
                  clearInterval(textInterval);
                  return 1;
                }
                return prev + 0.01;
              });
            }, 25);

            return 1;
          }
          return prev + 0.02;
        });
      }, 20);
    }
  }, [progress]);

  // 3️⃣ Line positions (lines remain full at center while heart forms)
  const leftLineX =
    progress < 100
      ? (centerX * progress) / 100
      : centerX; // stay at center while heart draws
  const rightLineX =
    progress < 100
      ? width - (centerX * progress) / 100
      : centerX; // stay at center while heart draws

  // 4️⃣ Text positions (from edges toward heart sides)
  const leftTextX = 0 + (centerX - 76) * textProgress;
  const rightTextX = width - (width - (centerX + 98)) * textProgress;
  const textY = centerY - 20;

  // 5️⃣ Heart paths
  const leftHeartPath = `
    M ${centerX},${centerY}
    C ${centerX - 50},${centerY - 30} ${centerX - 25},${centerY - 80} ${centerX},${centerY - 50}
  `;
  const rightHeartPath = `
    M ${centerX},${centerY}
    C ${centerX + 50},${centerY - 30} ${centerX + 25},${centerY - 80} ${centerX},${centerY - 50}
  `;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <svg className="perspective-[800px]"  width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        {/* Horizontal lines */}
        {leftLineX > 0 && (
          <line
            x1={0}
            y1={centerY}
            x2={leftLineX - fadeProgress * (leftLineX - (centerX - 60))}
            y2={centerY}
            stroke="#f43f5e"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={1 - fadeProgress}
          />
        )}
        {rightLineX < width && (
          <line
            x1={width}
            y1={centerY}
            x2={rightLineX + fadeProgress * ((centerX + 60) - rightLineX)}
            y2={centerY}
            stroke="#f43f5e"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={1 - fadeProgress}
          />
        )}

        {/* Heart drawing */}
        {heartDrawProgress > 0 && !heartComplete && (
          <>
            <path
              d={leftHeartPath}
              fill="transparent"
              stroke="#f43f5e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={HEART_PATH_LENGTH}
              strokeDashoffset={HEART_PATH_LENGTH * (1 - heartDrawProgress)}
            />
            <path
              d={rightHeartPath}
              fill="transparent"
              stroke="#f43f5e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={HEART_PATH_LENGTH}
              strokeDashoffset={HEART_PATH_LENGTH * (1 - heartDrawProgress)}
            />
          </>
        )}

        {/* Heart spinning after fully drawn */}
        {heartComplete && (
          <g
          className="animate-spinCoin"
            style={{
              transformOrigin: `${centerX}px ${centerY}px`,
              transformStyle: "preserve-3d",
              animation: "spinCoin 2s linear infinite",
            }}
          >
            <path
              d={leftHeartPath}
              fill="transparent"
              stroke="#f43f5e"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d={rightHeartPath}
              fill="transparent"
              stroke="#f43f5e"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Text moving along faded lines */}
        {textProgress > 0 && (
          <>
            <text
              x={leftTextX}
              y={textY}
              fill="#f43f5e"
              fontSize="32"
              fontWeight="bold"
              textAnchor="middle"
            >
              Let's
            </text>
            <text
              x={rightTextX}
              y={textY}
              fill="#f43f5e"
              fontSize="32"
              fontWeight="bold"
              textAnchor="middle"
            >
              Connect
            </text>
          </>
        )}
      </svg>
    </div>
  );
};
