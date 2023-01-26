import { createContext, useState } from 'react';
import { AnimationContextType } from 'src/types/animationContext';

export const AnimationContext = createContext<AnimationContextType>({
  animationCompleted: false,
  setAnimationCompleted: () => { }
});

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationCompleted, setAnimationCompleted }}>
      {children}
    </AnimationContext.Provider>
  )
}

export default { AnimationContext, AnimationProvider }