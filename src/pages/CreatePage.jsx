import CreateTimeTable from '../components/createpage/CreateTimeTable';
import { isMobile } from 'react-device-detect';
import MCreateTimeTable from '../components/createpage/M_CreateTimeTable';

const CreatePage = () => {
    return isMobile ? <MCreateTimeTable /> : <CreateTimeTable />;
};

export default CreatePage;
