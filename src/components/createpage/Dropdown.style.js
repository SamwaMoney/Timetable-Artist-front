import styled from 'styled-components';

const S = {};

S.DescDiv = styled.div`
    /* width: 14.45rem; */
    width: 72%;
    height: 2rem;
    z-index: 10;

    display: flex;
    justify-content: space-between;

    &.ischecked {
        pointer-events: none;
        opacity: 0.7;
    }

    &.first {
        z-index: 30;
    }

    &.second {
        position: relative;
        z-index: 20;
        margin-top: 5%;
        width: 100%;
    }

    @media screen and (max-height: 500px) {
        height: 1.5rem;
    }
`;

// DateTimeDropdown

S.DayDropdownDiv = styled.div`
    width: 4.1rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '35px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};

    @media screen and (max-height: 500px) {
        height: ${props => (props.isopen ? '7.5rem' : '1.5rem')};
    }
`;

S.TimeDropdownDiv = styled(S.DayDropdownDiv)`
    width: 4.5rem;
`;

S.DownIcon = styled.img`
    width: 0.8rem;
    margin-right: 0.75rem;

    rotate: ${props => (props.isopen ? '180deg' : '0deg')};
`;

S.DescText = styled.span`
    font-family: Gothic A1;
    font-size: 0.84vw;
    font-weight: 500;
    line-height: 2rem;

    @media screen and (max-height: 500px) {
        line-height: 1.5rem;
    }
`;

S.DescDayText = styled(S.DescText)`
    margin-left: 23%;
`;

S.DescTimeText = styled(S.DescText)`
    margin-left: 14.3%;
`;

// PlaceDropdown
S.DropdownDiv = styled.div`
    width: 14.45rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '28px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};

    @media screen and (max-height: 500px) {
        height: ${props => (props.isopen ? '7.5rem' : '1.5rem')};
    }
`;

S.DescPlaceText = styled(S.DescText)`
    margin-left: 9.1%;
`;

export { S };
