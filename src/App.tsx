import { Button, Tooltip } from '@mantine/core';

const App = () => {
  return (
    <div className="text-white uppercase flex-col flex-between-center">
      <h1 className="font-bold text-2xl">Hello world!!</h1>
      <Tooltip label="abc">
        <Button className="active:!translate-y-0">Click me</Button>
      </Tooltip>
    </div>
  );
};

export default App;
