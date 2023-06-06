import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HeroGradient from './index';

describe('HeroGradient', () => {
  it('should render without crashing', () => {
    const { container } = render(<HeroGradient posTrackMouse={{ clientX: 0, clientY: 0 }} />);
    expect(container).toBeTruthy();
  });

  it('should trigger animation when animationCompleted is true', () => {
    const { container } = render(<HeroGradient posTrackMouse={{ clientX: 0, clientY: 0 }} />);
    const wrapper = container.firstChild;
    const children = wrapper.querySelectorAll('div');

    expect(children[0].style.opacity).toBe('0');
    expect(children[1].style.opacity).toBe('0');

    fireEvent.mouseMove(document, { clientX: 50, clientY: 50 });
    expect(children[0].style.transform).toBe('scale(1)');
    expect(children[1].style.transform).toBe('scale(1)');
  });
});
