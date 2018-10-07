import { bootstrap } from '../services/appBootstrap';
import 'normalize.css';
import './index.scss';

bootstrap('.react-container', {
    symbols: ['MSFT', 'AAPL', 'NTDOY']
});