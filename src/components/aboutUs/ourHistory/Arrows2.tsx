import React from "react";
import { AllImages } from '../../../helpers';

import {
  getItemsPos,
  slidingWindow,
  VisibilityContext
} from "react-horizontal-scrolling-menu";

function Arrow({
  direction,
  children,
  disabled,
  onClick
}: {
  direction:any,
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: "19px",
        height: "29px",
        cursor: "pointer",
        border: "none",
        backgroundColor: "transparent",
        color: "red"
      }}
    >
    <img src={direction === "next" ? AllImages.RightArrow : AllImages.LeftArrow} />
    </button>
  );
}

export function LeftArrow() {
  const {
    getItemById,
    isFirstItemVisible,
    items,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const prevGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).prev();
  const { center } = getItemsPos(prevGroupItems);
  const scrollPrevCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  console.log({ prevGroupItems, center });
  return (
    <Arrow direction="prev" disabled={disabled} onClick={scrollPrevCentered}>
    </Arrow>
  );
}

export function RightArrow() {
  const {
    getItemById,
    isLastItemVisible,
    items,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const prevGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).next();
  const { center } = getItemsPos(prevGroupItems);
  const scrollPrevCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  return (
    <Arrow direction="next" disabled={disabled} onClick={scrollPrevCentered}>
    </Arrow>
  );
}
