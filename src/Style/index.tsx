import styled from "@emotion/styled";

export const Sticky = styled('div')(({ bottom, top, index, right }: { bottom?: number, top?: number | string, index: number, right?: number | string }) => ({
    position: 'sticky',
    top: top,
    bottom: bottom,
    left: 0,
    right: right,
    background: 'transparent',
    zIndex: index
}))