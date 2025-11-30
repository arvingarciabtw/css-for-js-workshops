import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  margin: auto;
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
`;

export default Select;
