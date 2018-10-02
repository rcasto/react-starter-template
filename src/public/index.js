import { bootstrap } from '../services/appBootstrap';
import './index.css';

bootstrap('.react-container', {
    symbols: ['MSFT', 'AAPL', 'NTDOY']
});