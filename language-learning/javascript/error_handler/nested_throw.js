const otherFn = () => {
  throw new Error('ta errando ai');
}

const fn = () => {
  otherFn();
  return {};
}

fn();
