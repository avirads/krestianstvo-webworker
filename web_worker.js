onmessage = (message) => {
  console.log(`got ${message.data} from web app into web worker`);
};
