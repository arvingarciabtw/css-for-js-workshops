/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  medium: {
    "--padding": 0,
    "--height": "12px",
  },
  large: {
    "--padding": "4px",
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  const Wrapper = styled.div`
    padding: var(--padding);
    width: 370px;
    height: var(--height);
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    box-shadow: 2px 2px 1px ${COLORS.transparentGray35} inset;
  `;

  const NormalProgress = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
  `;

  const RoundedProgress = styled(NormalProgress)`
    border-radius: 4px 4px 4px 4px;
  `;

  let Progress;
  if (value >= 99) {
    Progress = RoundedProgress;
  } else {
    Progress = NormalProgress;
  }

  return (
    <>
      <Wrapper style={styles}>
        <Progress></Progress>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
