import styled from 'styled-components';

export const SectionHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        color: black;
        font-weight: 600;

        div {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: 0.5rem;
        }
    }

    button {
        background-color: transparent;
        border: none;
        transition: all 0.3s ease;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Dot = styled.div `
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 0.5rem;
`;
