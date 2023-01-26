import { Context } from 'react';

export type AnimationContextType = {
  animationCompleted: boolean | string;
  setAnimationCompleted: (completed: boolean) => void;
}

export const AnimationContext: Context<AnimationContextType>;