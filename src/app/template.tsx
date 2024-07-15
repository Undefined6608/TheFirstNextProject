import { FC, ReactNode } from "react";

const Template: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={"template"}>{children}</div>;
};

export default Template;
