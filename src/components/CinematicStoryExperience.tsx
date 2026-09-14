import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentNetworkCanvas } from './AgentNetworkCanvas';
import { Scene01HeroHarness } from './scenes/Scene01HeroHarness';
import { Scene02HarnessSubsystems } from './scenes/Scene02HarnessSubsystems';
import { Scene03ServiceMap } from './scenes/Scene03ServiceMap';
import { Scene04FailureCascade } from './scenes/Scene04FailureCascade';
import { Scene05SecurityBoundary } from './scenes/Scene05SecurityBoundary';
import { Scene06OptimizationLoop } from './scenes/Scene06OptimizationLoop';
import { Scene07FinalVeltrix } from './scenes/Scene07FinalVeltrix';
import { SceneNavigationDock } from './SceneNavigationDock';
import { PersistentWaitlistBar } from './PersistentWaitlistBar';

interface CinematicStoryExperienceProps {
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const CinematicStoryExperience: React.FC<CinematicStoryExperienceProps> = ({
  onOpenWaitlist,
  onOpenDemo,
}) => {
  const TOTAL_SCENES = 7;
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0.0);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);

  const handleNext = useCallback(() => {
    setSceneProgress((prevProg) => {
      if (prevProg < 0.5) {
        return 0.6; // Advance to next phase inside current scene
      } else {
        setCurrentScene((prevScene) => Math.min(TOTAL_SCENES - 1, prevScene + 1));
        return 0.0;
      }
    });
  }, [TOTAL_SCENES]);

  const handlePrev = useCallback(() => {
    setSceneProgress((prevProg) => {
      if (prevProg > 0.4) {
        return 0.0;
      } else {
        setCurrentScene((prevScene) => Math.max(0, prevScene - 1));
        return 0.6;
      }
    });
  }, []);

  const handleSelectScene = (index: number) => {
    setCurrentScene(index);
    setSceneProgress(0.0);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 18) return;
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 420);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 35) {
        if (deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    const handleCustomNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ sceneIndex: number }>;
      if (customEvent.detail && typeof customEvent.detail.sceneIndex === 'number') {
        setCurrentScene(customEvent.detail.sceneIndex);
        setSceneProgress(0.0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('navigate-scene', handleCustomNavigate);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('navigate-scene', handleCustomNavigate);
    };
  }, [handleNext, handlePrev]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#030712] text-slate-100 flex flex-col justify-center items-center">
      
      {/* Background Sparse Living Agent Canvas */}
      <AgentNetworkCanvas />

      {/* Subtle Ambient Lighting Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#0052FF]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Minimal Left Dock Navigation */}
      <SceneNavigationDock
        currentScene={currentScene}
        totalScenes={TOTAL_SCENES}
        onSelectScene={handleSelectScene}
        onNextScene={handleNext}
        onPrevScene={handlePrev}
      />

      {/* Mobile-only Sticky CTA */}
      <PersistentWaitlistBar
        currentScene={currentScene}
        onOpenWaitlist={onOpenWaitlist}
        onOpenDemo={onOpenDemo}
      />

      {/* Main Pinned Viewport Container with Spacious Breathing Room */}
      <main className="relative w-full h-full flex items-center justify-center pt-14 pb-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`scene-${currentScene}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            {currentScene === 0 && (
              <Scene01HeroHarness
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
                onOpenDemo={onOpenDemo}
              />
            )}
            {currentScene === 1 && (
              <Scene02HarnessSubsystems
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
              />
            )}
            {currentScene === 2 && (
              <Scene03ServiceMap
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
              />
            )}
            {currentScene === 3 && (
              <Scene04FailureCascade
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
              />
            )}
            {currentScene === 4 && (
              <Scene05SecurityBoundary
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
              />
            )}
            {currentScene === 5 && (
              <Scene06OptimizationLoop
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
              />
            )}
            {currentScene === 6 && (
              <Scene07FinalVeltrix
                progress={sceneProgress}
                onOpenWaitlist={onOpenWaitlist}
                onOpenDemo={onOpenDemo}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Top Thin Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0052FF] to-[#00C2FF]"
          animate={{
            width: `${((currentScene + sceneProgress * 0.5) / (TOTAL_SCENES - 0.5)) * 100}%`,
          }}
          transition={{ duration: 0.25 }}
        />
      </div>

    </div>
  );
};
