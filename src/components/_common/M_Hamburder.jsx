import styled from 'styled-components';

const MHamburger = () => {
    return (
        <Wrapper>
            <Line1 />
            <Line2 />
            <Line3 />
        </Wrapper>
    );
};

export default MHamburger;

const Wrapper = styled.div`
    position: absolute;
    top: 8%;
    left: 7%;
    width: 43px;
    height: 40px;
    span {
        background-color: black;
        position: absolute;
        width: 2.4rem;
        height: 4px;
        font-weight: 500;
        border-radius: 2px;
    }
`;

const Line1 = styled.span`
    top: 0px;
`;

const Line2 = styled.span`
    top: 13px;
`;

const Line3 = styled.span`
    top: 26px;
`;
