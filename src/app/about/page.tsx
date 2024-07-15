import { FC } from "react";

const getData = async (): Promise<{ message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "Hello, Dashboard!",
  };
};

const About: FC = async () => {
  const { message } = await getData();
  return <>{message}</>;
};

export default About;
