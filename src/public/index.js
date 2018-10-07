import { bootstrap } from '../services/appBootstrap';
import 'normalize.css';
import './index.css';

bootstrap('.react-container', {
    symbols: ['MSFT', 'AAPL', 'NTDOY']
});