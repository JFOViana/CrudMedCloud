import React, { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import {
  ModalRoot,
  ModalOverlay,
  StyledModalContent,
  StyledModalTrigger,
  ModalTriggerClose,
  ModalTitle,
  ModalBody,
  ModalPortal,
} from "./styles";

interface ModalProps {
  title: string | ReactElement;
  element?: ReactElement;
  contentStyle?: CSSProperties | undefined;
  scrollBarchange?: boolean;
  children?: any;
}

export const ModalContent: React.FC<ModalProps> = ({
  title,
  element,
  children,
  contentStyle,
  scrollBarchange,
}) => {
  return (
    <ModalPortal>
      <ModalOverlay>
        <ModalBody>
          <StyledModalContent
            style={contentStyle}
            scrollBarchange={scrollBarchange}
          >
            <ModalTitle>
              <h2>{title}</h2>
              {element && <div className="element-contgainer">{element}</div>}
            </ModalTitle>
            {children}
          </StyledModalContent>
        </ModalBody>
      </ModalOverlay>
    </ModalPortal>
  );
};

export const Modal = ModalRoot;

export const ModalTrigger = StyledModalTrigger;
