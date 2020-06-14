import React, { ReactNode } from 'react';
import location from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';

type Props = {
  routeLocation: location
  switchDirection: string,
  isAnimated: boolean,
  children: ReactNode
};

const WithTransition = (props: Props) => {
  const { routeLocation, switchDirection, isAnimated, children } = props;

  return (
    <TransitionGroup
      component={null}
      childFactory={child =>
        React.cloneElement(child, {
          timeout: isAnimated ? 600 : 0,
          appear: false,
          enter: isAnimated,
          exit: isAnimated,
          classNames: isAnimated ? switchDirection : undefined
        })}
    >
      <CSSTransition
        key={routeLocation.key}
        timeout={isAnimated ? 600 : 0}
        appear={false}
        enter={isAnimated}
        exit={isAnimated}
        classNames={isAnimated ? switchDirection : undefined}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );

};

export default WithTransition;
