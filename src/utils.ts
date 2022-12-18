export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const handleThrottle = ({
  ref,
  cb,
}: {
  ref: React.MutableRefObject<boolean>;
  cb: () => void;
}) => {
  // If the state is inProgress - exit the function,
  // skip event processing
  if (ref.current) {
    return;
  }
  // Set inProgress to true and start the timer
  ref.current = true;
  setTimeout(() => {
    // Increment the throttleHandleCount
    // state by one
    cb();
    // Set inProgress to false, which means
    // that setTimeout will work
    // again on the next run
    ref.current = false;
  }, 500);
};
