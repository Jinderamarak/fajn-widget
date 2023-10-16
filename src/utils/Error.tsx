import { FC } from "react";

type Props = {
  message: string;
};

const Error: FC<Props> = ({ message }: Props) => {
  return (
    <section className="error">
      <p>{message}</p>
    </section>
  );
};

export default Error;
