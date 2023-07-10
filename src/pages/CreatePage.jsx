import CreateTimeTable from '../components/createpage/CreateTimeTable';
import { isMobile } from 'react-device-detect';

const CreatePage = () => {
    return isMobile ? "모바일" : <CreateTimeTable />;
};

export default CreatePage;
