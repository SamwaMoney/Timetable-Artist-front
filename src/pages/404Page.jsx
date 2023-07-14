import styled from 'styled-components';
import { M } from '../components/_common/Modal.style';
import S from '../components/rankingpage/Ranking.style';
const NotFoundPage = () => {
    return (
        <S.Wrapper>
            <M.Modal>
                <div className='red-background modal'>
                    <p className='emoji'>( ŏ̥̥̥̥ ם ŏ̥̥̥̥ )</p>
                    <p className='error-text'>Error Page</p>
                </div>
            </M.Modal>
        </S.Wrapper>
    );
};

export default NotFoundPage;
