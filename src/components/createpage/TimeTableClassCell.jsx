import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { CLASS_BLOCK_COLOR } from '../../consts/timeTableInput';

const TimeTableClassCell = ({
    selectedData,
    dayMappings,
    cellRefs,
    etcDescDivRef,
}) => {
    // 배경색 칠한 td 위에 올려둘 강의명과 강의장소
    const AdditionalContent = ({ selectedData }) => (
        <BlockText>
            <div>{selectedData.name}</div>
            <br />
            <div>{selectedData.place}</div>
        </BlockText>
    );

    // 강의 블록 길이 계산하는 함수
    const calculateBlockLength = (startH, endH) => {
        const classTime = endH - startH;
        if (classTime === 3) {
            return 6;
        } else if (classTime >= 4 && classTime <= 5) {
            return 9;
        } else if (classTime === 6) {
            return 12;
        } else if (classTime >= 7 && classTime <= 8) {
            return 15;
        } else if (classTime === 9) {
            return 18;
        } else if (classTime >= 10 && classTime <= 11) {
            return 21;
        } else {
            return 3;
        }
    };

    // 강의 블록 올리는 로직
    const showClassBlock = selectedData => {
        selectedData.forEach((data, index) => {
            console.log('showClassBlock-----------');

            // 지정된 시간이 없는 경우
            if (data.startTime === -1) {
                etcDescDivRef.current.innerText = `${data.name} `;
                return;
            } else {
                // 강의 시간이 하나인 경우

                // 강의 시간이 2개인 경우 -> 배경색 달라지는 문제 해결해야 함

                // 시작시간 시랑 분 분리
                const [startH, startM] = data.startTime
                    .split(':')
                    .map(str => parseInt(str, 10));

                // 끝시간 시랑 분 분리
                const [endH, endM] = data.endTime
                    .split(':')
                    .map(str => parseInt(str, 10));

                // id 변수
                const findId = `${dayMappings[data.day]}-${startH}`;

                // 원하는 key를 가진 요소에 접근
                const targetElement = cellRefs.current[findId];

                // targetElement가 정상적으로 찾아졌을 때
                if (targetElement) {
                    // class 추가
                    targetElement.classList.add('selected');
                    targetElement.style.backgroundColor =
                        CLASS_BLOCK_COLOR[index];

                    // rowSpan 속성 추가
                    targetElement.rowSpan = calculateBlockLength(startH, endH);

                    // AdditionalContent 컴포넌트를 생성하여 targetElement의 하위로 추가
                    ReactDOM.render(
                        <AdditionalContent selectedData={data} />,
                        targetElement,
                    );
                }
            }
        });
    };

    useEffect(() => {
        console.log('시작');
        if (selectedData && selectedData.length > 0) {
            console.log(selectedData);
            console.log('timetable 값 들어옴');
            showClassBlock(selectedData);
        }
    }, [selectedData]);

    return null;
};

export default TimeTableClassCell;

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
