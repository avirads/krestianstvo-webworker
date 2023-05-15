import { render } from 'solid-js/web';
import { Selo } from 'krestianstvo';
import App from './ksdk.jsx';

render(
  () => (
    <Selo
      nodeID={'marker'}
      seloID={'1'}
      component={App}
      reflectorHost={'https://time.livecoding.space'}
    />
  ),
  document.getElementById('map')
);
