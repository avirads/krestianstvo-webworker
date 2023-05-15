import { createLocalStore } from 'krestianstvo';
const worker = new Worker('../web_worker.js');

export default function App(props) {
  props.selo.sendExtMsg({
    id: props.nodeID,
    msg: 'can_be_anything',
    params: [`${props.selo.clientSeloID}`, 'operation'],
  });

  const [local, setLocal] = createLocalStore(
    {
      data: {
        type: 'Node',
        nodeID: props.nodeID,
        properties: {
          ticking: false,
        },
        dynamic: [],
      },
    },
    props
  );

  const setData = (data) => {
    console.log(`got ${data} from krestianstvo into web app`);
    worker.postMessage(JSON.stringify(data));
  };
  props.selo.createAction(props.nodeID, 'can_be_anything', setData);

  return <></>;
}
